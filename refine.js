/**
 * MIT License

Copyright (c) 2021 icepeng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import { getRefineTable } from "./refinetable.js";

// interface RefineTable {
//   baseProb: number;
//   additionalProb: number;
//   janginMultiplier: number;
//   amount: Record<string, number>;
//   breath: Record<string, [number, number]>;
// }

const JANGIN_ACCUMULATE_DIVIDER = 2.15;

// export type Step = {
//   baseProb: number;
//   totalProb: number;
//   globalProb: number;
//   jangin: number;
//   price: number;
//   breathes: Record<string, number>;
// };

// export type Path = Step[];

export const breathNames = ["용암", "빙하"];

function getPrice(
  priceMap, //: Record<string, number>,
  bindedMap, //: Record<string, number>,
  amountMap //: Record<string, number>
) {
  return Object.entries(amountMap)
    .map(([key, amount]) => {
      if (key === "골드") {
        return 1 * Math.max(amount, 0);
      } else {
        return (
          priceMap[String(key)] * Math.max(amount - (bindedMap[key] ?? 0), 0)
        );
      }
    })
    .reduce((sum, x) => {
      return sum + x;
    }, 0);
}

function subtractAmount(
  bindedMap, //: Record<string, number>,
  amountMap //: Record<string, number>
) {
  return Object.fromEntries(
    Object.entries(bindedMap)
      .map(([key, amount]) => [key, amount - (amountMap[key] ?? 0)])
      .filter(([key, amount]) => Number(amount) > 0)
  );
}

function buildBreath(
  priceMap, //: Record<string, number>,
  breathMap, //: Record<string, [number, number]>,
  bindedMap, //: Record<string, number>,
  baseProb //: number
) {
  const breathes = Object.keys(breathMap).sort((a, b) => {
    const comparator =
      (Math.max(breathMap[a][0] - (bindedMap[a] ?? 0), 0) * priceMap[a]) /
        (breathMap[a][0] * breathMap[a][1]) -
      (Math.max(breathMap[b][0] - (bindedMap[b] ?? 0), 0) * priceMap[b]) /
        (breathMap[b][0] * breathMap[b][1]);

    if (comparator === 0) {
      return priceMap[a] / breathMap[a][1] - priceMap[b] / breathMap[b][1];
    }

    return comparator;
  });

  // Record<string,{ price: number; prob: number; amount: number }>
  const adjustedBreathMap = {};
  let probLeft = Math.max(baseProb, 0.01);

  breathes.forEach((name) => {
    const [breathAmount, breathProb] = breathMap[name];
    if (breathNames.includes(name)) {
      // 숨결
      const amount = Math.min(Math.ceil(probLeft / breathProb), breathAmount);
      adjustedBreathMap[name] = {
        price: Math.max(amount - (bindedMap[name] ?? 0), 0) * priceMap[name],
        prob: Math.min(amount * breathProb, probLeft),
        amount,
      };
      probLeft -= amount * breathProb;
    } else {
      // 책
      adjustedBreathMap[name] = {
        price: Math.max(1 - (bindedMap[name] ?? 0), 0) * priceMap[name],
        prob: breathProb,
        amount: 1,
      };
    }
  });

  return breathes.reduce(
    (arr, name) => {
      const prev = arr[arr.length - 1];
      const current = adjustedBreathMap[name];
      arr.push({
        price: prev.price + current.price,
        prob: prev.prob + current.prob,
        breathes: { ...prev.breathes, [name]: current.amount },
      });
      return arr;
    },
    [{ price: 0, prob: 0, breathes: {} }]
  );
}

export function optimize(
  table, //: RefineTable,
  priceMap, //: Record<string, number>,
  bindedMap, //: Record<string, number>,
  probFromFailure, //: number,
  startJangin //: number
) {
  const baseProb = table.baseProb;
  const additionalProb = table.additionalProb;
  const defaultBasePrice = getPrice(priceMap, {}, table.amount);
  const defaultBreath = buildBreath(priceMap, table.breath, {}, baseProb);

  function rec(
    currentProb, //: number,
    jangin, //: number,
    globalProb, //: number,
    breathCount, //: number,
    bindedLeft //: Record<string, number>
  ) /* {price: number;path: Path;} */ {
    const isBindedEmpty = Object.keys(bindedLeft).length === 0;
    const basePrice = isBindedEmpty
      ? defaultBasePrice
      : getPrice(priceMap, bindedLeft, table.amount);
    const breath = isBindedEmpty
      ? defaultBreath
      : buildBreath(priceMap, table.breath, bindedLeft, baseProb);

    if (globalProb <= 0) {
      return {
        price: 0,
        path: [],
      };
    }
    if (jangin >= 1) {
      return {
        price: basePrice,
        path: [
          {
            baseProb: 1,
            totalProb: 1,
            globalProb,
            jangin: 1,
            price: basePrice,
            breathes: {},
          },
        ],
      };
    }

    const prices = [];
    const pathes = [];

    for (let i = 0; i <= breathCount; i += 1) {
      const { price: breathPrice, prob: breathProb, breathes } = breath[i];
      const prob =
        Math.round(
          Math.min(currentProb + additionalProb + breathProb, 1) * 10000
        ) / 10000;
      const { price: failPrice, path } = rec(
        Math.min(currentProb + baseProb * 0.1, baseProb * 2),
        jangin + (prob / JANGIN_ACCUMULATE_DIVIDER) * table.janginMultiplier,
        globalProb * (1 - prob),
        i,
        bindedMap
        // subtractAmount(subtractAmount(bindedLeft, table.amount), breathes)
      );
      const validPath = Array.isArray(path) ? path : [path];
      prices.push(basePrice + breathPrice + (1 - prob) * failPrice);
      pathes.push([
        {
          baseProb: currentProb + additionalProb,
          totalProb: prob,
          globalProb: globalProb * prob,
          jangin,
          price: basePrice + breathPrice,
          breathes,
        },
        ...validPath,
      ]);
    }

    const minPrice = Math.min(...prices);
    const path = pathes[prices.indexOf(minPrice)];

    return { price: minPrice, path };
  }

  return rec(
    baseProb + probFromFailure,
    startJangin,
    1,
    Object.keys(table.breath).length,
    bindedMap
  );
}

export function fixed(
  table, //: RefineTable,
  priceMap, //: Record<string, number>,
  bindedMap, //: Record<string, number>,
  probFromFailure, //: number,
  startJangin, //: number,
  breathCount //: number
) {
  const baseProb = table.baseProb;
  const additionalProb = table.additionalProb;
  const defaultBasePrice = getPrice(priceMap, {}, table.amount);
  const defaultBreath = buildBreath(priceMap, table.breath, {}, baseProb);
  // console.log("baseprice: ", defaultBasePrice);
  function rec(
    currentProb, //: number,
    jangin, //: number,
    globalProb, //: number,
    bindedLeft //: Record<string, number>
  ) /* {price: number;path: Path;} */ {
    const isBindedEmpty = Object.keys(bindedLeft).length === 0;
    const basePrice = isBindedEmpty
      ? defaultBasePrice
      : getPrice(priceMap, bindedLeft, table.amount);

    const breath = isBindedEmpty
      ? defaultBreath
      : buildBreath(priceMap, table.breath, bindedLeft, baseProb);
    if (globalProb <= 0) {
      return {
        price: 0,
        path: [],
      };
    }
    if (jangin >= 1) {
      return {
        price: basePrice,
        path: [
          {
            baseProb: 1,
            totalProb: 1,
            globalProb,
            jangin: 1,
            price: basePrice,
            breathes: {},
          },
        ],
      };
    }
    const {
      price: breathPrice,
      prob: breathProb,
      breathes,
    } = breath[breathCount];
    // console.log("middle: ", breathPrice, breathProb, breathes);
    const prob =
      Math.round(
        Math.min(currentProb + additionalProb + breathProb, 1) * 10000
      ) / 10000;
    const { price: failPrice, path: failPath } = rec(
      Math.min(currentProb + baseProb * 0.1, baseProb * 2),
      jangin + (prob / JANGIN_ACCUMULATE_DIVIDER) * table.janginMultiplier,
      globalProb * (1 - prob),
      bindedMap
      // subtractAmount(subtractAmount(bindedLeft, table.amount), breathes)
    );

    return {
      price: basePrice + breathPrice + (1 - prob) * failPrice,
      path: [
        {
          baseProb: currentProb + additionalProb,
          totalProb: prob,
          globalProb: globalProb * prob,
          jangin,
          price: basePrice + breathPrice,
          breathes,
        },
        ...failPath,
      ],
    };
  }

  return rec(baseProb + probFromFailure, startJangin, 1, bindedMap);
}

export class RefiningComponent {
  reduceBindedMaterials = false;
  reduceBindedBooks = false;
  reduceBindedBreathes = false;

  optimalPrice = 0;
  optimalPath = [];

  noBreathPrice = 0;
  noBreathPath = [];

  fullBreathPrice = 0;
  fullBreathPath = [];

  bindedAllPrice = 0;
  bindedAllPath = [];

  bindedPrice = 0;
  bindedPath = [];

  // { name: string, amount: number, price: number }[]
  materials = [];
  materialPrice = 0;
  // { name: string, prob: number, amount: number, price: number }[]
  breathes = [];

  constructor() {}

  //(itemType: "armor" | "weapon", grade: "t4_1590", target)
  calculate(itemType, grade, target) {
    const itemInfo = {
      type: itemType,
      grade,
      target,
      baseProb: { value: null, disabled: true },
      additionalProb: { value: null, disabled: true },
      probFromFailure: 0,
      totalProb: { value: null, disabled: true },
      jangin: 0,
      applyResearch: false,
      applyHyperExpress: false,
    };
    const bindedForm = {};

    const table = getRefineTable(
      itemInfo.type,
      itemInfo.grade,
      itemInfo.target,
      itemInfo.applyResearch,
      itemInfo.applyHyperExpress
    );
    if (!table) {
      return;
    }

    let bindedMap = {}; // 귀속재료 없음

    const optimal = optimize(
      table,
      { ...localStorage },
      bindedMap,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100
    );

    this.optimalPrice = optimal.price;
    this.optimalPath = optimal.path;

    const noBreath = fixed(
      table,
      { ...localStorage },
      bindedMap,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100,
      0
    );

    this.noBreathPrice = noBreath.price;
    this.noBreathPath = noBreath.path;

    const fullBreath = fixed(
      table,
      { ...localStorage },
      bindedMap,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100,
      Object.keys(table.breath).length
    );

    this.fullBreathPrice = fullBreath.price;
    this.fullBreathPath = fullBreath.path;

    //귀속
    bindedMap["운명의 돌파석"] = 1e9;
    bindedMap["운명의 수호석"] = 1e9;
    bindedMap["운명의 파괴석"] = 1e9;
    bindedMap["운명의 파편"] = 1e9;
    bindedMap["용암의 숨결"] = 1e9;
    bindedMap["빙하의 숨결"] = 1e9;
    bindedMap["아비도스 융화 재료"] = 0;

    const bindedAllOptimal = fixed(
      table,
      { ...localStorage },
      bindedMap,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100,
      Object.keys(table.breath).length
    );

    this.bindedAllPrice = bindedAllOptimal.price;
    this.bindedAllPath = bindedAllOptimal.path;

    bindedMap["용암의 숨결"] = 0;
    bindedMap["빙하의 숨결"] = 0;
    const bindedOptimal = optimize(
      table,
      { ...localStorage },
      bindedMap,
      itemInfo.probFromFailure / 100,
      itemInfo.jangin / 100
    );

    this.bindedPrice = bindedOptimal.price;
    this.bindedPath = bindedOptimal.path;

    const result = {
      optimal: Number(this.optimalPrice.toFixed(2)),
      full: Number(this.fullBreathPrice.toFixed(2)),
      no: Number(this.noBreathPrice.toFixed(2)),
      bindAll: Number(this.bindedAllPrice.toFixed(2)),
      bind: Number(this.bindedPrice.toFixed(2)),
    };
    return result;
  }
}
