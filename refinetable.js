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
const t4ArmorBreathTable = {
  0.1: {
    "빙하의 숨결": [20, 0.005],
  },
  0.05: {
    "빙하의 숨결": [20, 0.0025],
  },
  0.04: {
    "빙하의 숨결": [20, 0.002],
  },
  0.03: {
    "빙하의 숨결": [20, 0.0015],
  },
  0.015: {
    "빙하의 숨결": [25, 0.0006],
  },
  0.01: {
    "빙하의 숨결": [25, 0.0004],
  },
  0.005: {
    "빙하의 숨결": [50, 0.0002],
  },
};

const t4WeaponBreathTable = {
  0.1: {
    "용암의 숨결": [20, 0.005],
  },
  0.05: {
    "용암의 숨결": [20, 0.0025],
  },
  0.04: {
    "용암의 숨결": [20, 0.002],
  },
  0.03: {
    "용암의 숨결": [20, 0.0015],
  },
  0.015: {
    "용암의 숨결": [25, 0.0006],
  },
  0.01: {
    "용암의 숨결": [25, 0.0004],
  },
  0.005: {
    "용암의 숨결": [50, 0.0002],
  },
};

export const refineData = {
  armor: {
    t4_1590: {
      11: {
        baseProb: 0.1,
        amount: {
          "운명의 수호석": 750,
          "운명의 돌파석": 11,
          "아비도스 융화 재료": 7,
          "운명의 파편": 3000,
          골드: 970,
        },
        breath: {
          ...t4ArmorBreathTable[0.1],
          재봉술업화: [1, 0.1],
        },
      },
      12: {
        baseProb: 0.1,
        amount: {
          "운명의 수호석": 780,
          "운명의 돌파석": 13,
          "아비도스 융화 재료": 7,
          "운명의 파편": 3180,
          골드: 1070,
        },
        breath: {
          ...t4ArmorBreathTable[0.1],
          재봉술업화: [1, 0.1],
        },
      },
      13: {
        baseProb: 0.05,
        amount: {
          "운명의 수호석": 840,
          "운명의 돌파석": 14,
          "아비도스 융화 재료": 9,
          "운명의 파편": 4560,
          골드: 1190,
        },
        breath: {
          ...t4ArmorBreathTable[0.05],
          재봉술업화: [1, 0.05],
        },
      },
      14: {
        baseProb: 0.05,
        amount: {
          "운명의 수호석": 930,
          "운명의 돌파석": 16,
          "아비도스 융화 재료": 9,
          "운명의 파편": 4920,
          골드: 1320,
        },
        breath: {
          ...t4ArmorBreathTable[0.05],
          재봉술업화: [1, 0.05],
        },
      },
      15: {
        baseProb: 0.04,
        amount: {
          "운명의 수호석": 1020,
          "운명의 돌파석": 18,
          "아비도스 융화 재료": 11,
          "운명의 파편": 5280,
          골드: 1460,
        },
        breath: {
          ...t4ArmorBreathTable[0.04],
        },
      },
      16: {
        baseProb: 0.04,
        amount: {
          "운명의 수호석": 1170,
          "운명의 돌파석": 20,
          "아비도스 융화 재료": 11,
          "운명의 파편": 5640,
          골드: 1600,
        },
        breath: {
          ...t4ArmorBreathTable[0.04],
        },
      },
      17: {
        baseProb: 0.03,
        amount: {
          "운명의 수호석": 1320,
          "운명의 돌파석": 22,
          "아비도스 융화 재료": 15,
          "운명의 파편": 7200,
          골드: 1760,
        },
        breath: {
          ...t4ArmorBreathTable[0.03],
        },
      },
      18: {
        baseProb: 0.03,
        amount: {
          "운명의 수호석": 1470,
          "운명의 돌파석": 23,
          "아비도스 융화 재료": 15,
          "운명의 파편": 7740,
          골드: 1930,
        },
        breath: {
          ...t4ArmorBreathTable[0.03],
        },
      },
      19: {
        baseProb: 0.03,
        amount: {
          "운명의 수호석": 1620,
          "운명의 돌파석": 25,
          "아비도스 융화 재료": 15,
          "운명의 파편": 8220,
          골드: 2110,
        },
        breath: {
          ...t4ArmorBreathTable[0.03],
        },
      },
      20: {
        baseProb: 0.015,
        amount: {
          "운명의 수호석": 1770,
          "운명의 돌파석": 27,
          "아비도스 융화 재료": 21,
          "운명의 파편": 9600,
          골드: 2300,
        },
        breath: {
          ...t4ArmorBreathTable[0.015],
        },
      },
      21: {
        baseProb: 0.015,
        amount: {
          "운명의 수호석": 1920,
          "운명의 돌파석": 29,
          "아비도스 융화 재료": 21,
          "운명의 파편": 10260,
          골드: 2500,
        },
        breath: {
          ...t4ArmorBreathTable[0.015],
        },
      },
      22: {
        baseProb: 0.01,
        amount: {
          "운명의 수호석": 2220,
          "운명의 돌파석": 31,
          "아비도스 융화 재료": 21,
          "운명의 파편": 10920,
          골드: 2710,
        },
        breath: {
          ...t4ArmorBreathTable[0.01],
        },
      },
      23: {
        baseProb: 0.01,
        amount: {
          "운명의 수호석": 2400,
          "운명의 돌파석": 34,
          "아비도스 융화 재료": 21,
          "운명의 파편": 11520,
          골드: 2920,
        },
        breath: {
          ...t4ArmorBreathTable[0.01],
        },
      },
      24: {
        baseProb: 0.005,
        amount: {
          "운명의 수호석": 2520,
          "운명의 돌파석": 36,
          "아비도스 융화 재료": 30,
          "운명의 파편": 12240,
          골드: 3150,
        },
        breath: {
          ...t4ArmorBreathTable[0.005],
        },
      },
      25: {
        baseProb: 0.005,
        amount: {
          "운명의 수호석": 2700,
          "운명의 돌파석": 40,
          "아비도스 융화 재료": 30,
          "운명의 파편": 12900,
          골드: 3390,
        },
        breath: {
          ...t4ArmorBreathTable[0.005],
        },
      },
    },
  },
  weapon: {
    t4_1590: {
      11: {
        baseProb: 0.1,
        amount: {
          "운명의 파괴석": 1250,
          "운명의 돌파석": 18,
          "아비도스 융화 재료": 12,
          "운명의 파편": 5000,
          골드: 1620,
        },
        breath: {
          ...t4WeaponBreathTable[0.1],
          야금술업화: [1, 0.1],
        },
      },
      12: {
        baseProb: 0.1,
        amount: {
          "운명의 파괴석": 1300,
          "운명의 돌파석": 21,
          "아비도스 융화 재료": 12,
          "운명의 파편": 5300,
          골드: 1790,
        },
        breath: {
          ...t4WeaponBreathTable[0.1],
          야금술업화: [1, 0.1],
        },
      },
      13: {
        baseProb: 0.05,
        amount: {
          "운명의 파괴석": 1400,
          "운명의 돌파석": 24,
          "아비도스 융화 재료": 15,
          "운명의 파편": 7600,
          골드: 1990,
        },
        breath: {
          ...t4WeaponBreathTable[0.05],
          야금술업화: [1, 0.05],
        },
      },
      14: {
        baseProb: 0.05,
        amount: {
          "운명의 파괴석": 1550,
          "운명의 돌파석": 27,
          "아비도스 융화 재료": 15,
          "운명의 파편": 8200,
          골드: 2200,
        },
        breath: {
          ...t4WeaponBreathTable[0.05],
          야금술업화: [1, 0.05],
        },
      },
      15: {
        baseProb: 0.04,
        amount: {
          "운명의 파괴석": 1700,
          "운명의 돌파석": 30,
          "아비도스 융화 재료": 18,
          "운명의 파편": 8800,
          골드: 2430,
        },
        breath: {
          ...t4WeaponBreathTable[0.04],
        },
      },
      16: {
        baseProb: 0.04,
        amount: {
          "운명의 파괴석": 1950,
          "운명의 돌파석": 33,
          "아비도스 융화 재료": 18,
          "운명의 파편": 9400,
          골드: 2670,
        },
        breath: {
          ...t4WeaponBreathTable[0.04],
        },
      },
      17: {
        baseProb: 0.03,
        amount: {
          "운명의 파괴석": 2200,
          "운명의 돌파석": 36,
          "아비도스 융화 재료": 25,
          "운명의 파편": 12000,
          골드: 2940,
        },
        breath: {
          ...t4WeaponBreathTable[0.03],
        },
      },
      18: {
        baseProb: 0.03,
        amount: {
          "운명의 파괴석": 2450,
          "운명의 돌파석": 39,
          "아비도스 융화 재료": 25,
          "운명의 파편": 12900,
          골드: 3220,
        },
        breath: {
          ...t4WeaponBreathTable[0.03],
        },
      },
      19: {
        baseProb: 0.03,
        amount: {
          "운명의 파괴석": 2700,
          "운명의 돌파석": 42,
          "아비도스 융화 재료": 25,
          "운명의 파편": 13700,
          골드: 3510,
        },
        breath: {
          ...t4WeaponBreathTable[0.03],
        },
      },
      20: {
        baseProb: 0.015,
        amount: {
          "운명의 파괴석": 2950,
          "운명의 돌파석": 45,
          "아비도스 융화 재료": 35,
          "운명의 파편": 16000,
          골드: 3830,
        },
        breath: {
          ...t4WeaponBreathTable[0.015],
        },
      },
      21: {
        baseProb: 0.015,
        amount: {
          "운명의 파괴석": 3200,
          "운명의 돌파석": 48,
          "아비도스 융화 재료": 35,
          "운명의 파편": 17100,
          골드: 4160,
        },
        breath: {
          ...t4WeaponBreathTable[0.015],
        },
      },
      22: {
        baseProb: 0.01,
        amount: {
          "운명의 파괴석": 3700,
          "운명의 돌파석": 52,
          "아비도스 융화 재료": 35,
          "운명의 파편": 18200,
          골드: 4510,
        },
        breath: {
          ...t4WeaponBreathTable[0.01],
        },
      },
      23: {
        baseProb: 0.01,
        amount: {
          "운명의 파괴석": 4000,
          "운명의 돌파석": 56,
          "아비도스 융화 재료": 35,
          "운명의 파편": 19200,
          골드: 4870,
        },
        breath: {
          ...t4WeaponBreathTable[0.01],
        },
      },
      24: {
        baseProb: 0.005,
        amount: {
          "운명의 파괴석": 4200,
          "운명의 돌파석": 60,
          "아비도스 융화 재료": 50,
          "운명의 파편": 20400,
          골드: 5250,
        },
        breath: {
          ...t4WeaponBreathTable[0.005],
        },
      },
      25: {
        baseProb: 0.005,
        amount: {
          "운명의 파괴석": 4500,
          "운명의 돌파석": 65,
          "아비도스 융화 재료": 50,
          "운명의 파편": 21500,
          골드: 5650,
        },
        breath: {
          ...t4WeaponBreathTable[0.005],
        },
      },
    },
  },
};

export function getRefineTable(
  itemType,
  itemGrade,
  refineTarget,
  applyResearch,
  applyHyperExpress
) {
  if (!itemType || !itemGrade || !refineTarget) {
    return undefined;
  }
  const data = refineData[itemType][itemGrade][refineTarget];

  let additionalProb = 0;
  let costReduction = 0;
  let goldReduction = 0;
  let goldCeilUnit = 1;
  let janginMultiplier = 1;
  if (itemGrade === "t3_1250" && refineTarget <= 12) {
    additionalProb = 0.1;
    costReduction = 0.4;
    goldReduction = 1;
  }
  if (itemGrade === "t3_1250" && refineTarget >= 13 && refineTarget <= 14) {
    additionalProb = 0.05;
    costReduction = 0.4;
    goldReduction = 1;
  }
  if (itemGrade === "t3_1250" && refineTarget === 15) {
    additionalProb = 0.03;
    costReduction = 0.4;
    goldReduction = 1;
  }
  if (itemGrade === "t3_1390" && refineTarget >= 1 && refineTarget <= 20) {
    additionalProb = data.baseProb;
    goldReduction = 0.5;
    costReduction = 0.5;
    goldCeilUnit = 10;
  }

  if (applyResearch) {
    if (itemGrade === "t3_1250" && refineTarget >= 1 && refineTarget <= 10) {
      additionalProb += 0.1;
    }
    if (itemGrade === "t3_1250" && refineTarget >= 11 && refineTarget <= 13) {
      additionalProb += 0.05;
    }
    if (itemGrade === "t3_1250" && refineTarget >= 14 && refineTarget <= 15) {
      additionalProb += 0.02;
    }
  }

  if (applyHyperExpress) {
    // 2024 Summer, Super Mococo Express
    if (itemGrade === "t3_1390" && refineTarget >= 13 && refineTarget <= 19) {
      additionalProb = data.baseProb;
      goldReduction = 0.7;
      costReduction = 0.7;
      goldCeilUnit = 1;
    }

    if (itemGrade === "t3_1525" && refineTarget >= 13 && refineTarget <= 15) {
      additionalProb += data.baseProb / 2;
      goldReduction = 0.4;
      costReduction = 0.4;
      goldCeilUnit = 1;
    }
  }

  additionalProb = Math.round(additionalProb * 1000) / 1000;

  return {
    additionalProb,
    janginMultiplier,
    amount: Object.fromEntries(
      Object.entries(data.amount).map(([name, value]) => [
        name,
        name === "골드"
          ? Math.ceil((value * (1 - goldReduction)) / goldCeilUnit) *
            goldCeilUnit
          : Math.round(value * (1 - costReduction)),
      ])
    ),
    baseProb: data.baseProb,
    breath: data.breath,
  };
}
