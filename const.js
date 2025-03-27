import { RefiningComponent } from "./refine.js";

export const host = "https://developer-lostark.game.onstove.com";
export const marketPath = "/markets/items";
export const auctionPath = "/auctions/items";
export const gemList = [
  "7레벨 겁화의 보석",
  "7레벨 작열의 보석",
  "8레벨 겁화의 보석",
  "8레벨 작열의 보석",
  "9레벨 겁화의 보석",
  "9레벨 작열의 보석",
  "10레벨 겁화의 보석",
  "10레벨 작열의 보석",
];
export const accesoryList = [
  "중단일",
  "상단일",
  "중중",
  "상하",
  "상중",
  "상상",
];
export const itemList = [
  "운명의 수호석",
  "운명의 파괴석",
  "운명의 돌파석",
  "아비도스 융화 재료",
  "빙하의 숨결",
  "용암의 숨결",
  "운명의 파편 주머니(소)",
  "운명의 파편 주머니(중)",
  "운명의 파편",
  "장인의 재봉술 : 1단계",
  "장인의 재봉술 : 2단계",
  "장인의 야금술 : 1단계",
  "장인의 야금술 : 2단계",
  ...gemList,
  ...accesoryList,
];

const tableColor = {
  accesory: "#E2D5F2",
  weapon: "#F6D1D1",
  armor: "#D0E8F2",
  up_weapon: "#C9A9A6",
  up_armor: "#AABACB",
  gem: "#D4EAC7",
  book: "#FFF3C7",
};

const refineCal = new RefiningComponent();
export const table = [
  {
    name: "유물각인[저받,돌대,원한,타대] 5만골",
    upgrade: 2.6,
    color: tableColor.book,
    inputs: [],
    calculation: () => 50000 * 20,
  },
  {
    name: "유물각인[저받,돌대,원한,타대] 10만골",
    upgrade: 2.6,
    color: tableColor.book,
    inputs: [],
    calculation: () => 100000 * 20,
  },
  {
    name: "유물각인[저받,돌대,원한,타대] 20만골",
    upgrade: 2.6,
    color: tableColor.book,
    inputs: [],
    calculation: () => 200000 * 20,
  },
  {
    name: "유물각인[저받,돌대,원한,타대] 30만골",
    upgrade: 2.6,
    color: tableColor.book,
    inputs: [],
    calculation: () => 300000 * 20,
  },
  {
    name: "유물각인[저받,돌대,원한,타대] 40만골",
    upgrade: 2.6,
    color: tableColor.book,
    inputs: [],
    calculation: () => 400000 * 20,
  },
  {
    name: "7->8작 (예의보석)",
    upgrade: 0.187,
    color: tableColor.gem,
    inputs: ["8레벨 작열의 보석", "7레벨 작열의 보석"],
    calculation: (values) =>
      values["8레벨 작열의 보석"] - values["7레벨 작열의 보석"],
  },
  {
    name: "7->8작 (1개-사이클단축)",
    upgrade: 2.19,
    color: tableColor.gem,
    inputs: ["8레벨 작열의 보석", "7레벨 작열의 보석"],
    calculation: (values) =>
      values["8레벨 작열의 보석"] - values["7레벨 작열의 보석"],
  },
  {
    name: "7->8작 (2개-사이클단축)",
    upgrade: 2.37,
    color: tableColor.gem,
    inputs: ["8레벨 작열의 보석", "7레벨 작열의 보석"],
    calculation: (values) =>
      (values["8레벨 작열의 보석"] - values["7레벨 작열의 보석"]) * 2,
  },
  {
    name: "7->8겁 (딜지분 5%)",
    upgrade: 0.34,
    color: tableColor.gem,
    inputs: ["8레벨 겁화의 보석", "7레벨 겁화의 보석"],
    calculation: (values) =>
      values["8레벨 겁화의 보석"] - values["7레벨 겁화의 보석"],
  },
  {
    name: "7->8겁 (딜지분 20%)",
    upgrade: 0.79,
    color: tableColor.gem,
    inputs: ["8레벨 겁화의 보석", "7레벨 겁화의 보석"],
    calculation: (values) =>
      values["8레벨 겁화의 보석"] - values["7레벨 겁화의 보석"],
  },
  {
    name: "7->8겁 (딜지분 60%)",
    upgrade: 2,
    color: tableColor.gem,
    inputs: ["8레벨 겁화의 보석", "7레벨 겁화의 보석"],
    calculation: (values) =>
      values["8레벨 겁화의 보석"] - values["7레벨 겁화의 보석"],
  },

  {
    name: "8->9작 (1개-사이클단축)",
    upgrade: 2.23,
    color: tableColor.gem,
    inputs: ["9레벨 작열의 보석", "8레벨 작열의 보석"],
    calculation: (values) =>
      values["9레벨 작열의 보석"] - values["8레벨 작열의 보석"],
  },
  {
    name: "8->9작 (2개-사이클단축)",
    upgrade: 2.42,
    color: tableColor.gem,
    inputs: ["9레벨 작열의 보석", "8레벨 작열의 보석"],
    calculation: (values) =>
      (values["9레벨 작열의 보석"] - values["8레벨 작열의 보석"]) * 2,
  },
  {
    name: "8->9겁 (딜지분 20%)",
    upgrade: 0.77,
    color: tableColor.gem,
    inputs: ["9레벨 겁화의 보석", "8레벨 겁화의 보석"],
    calculation: (values) =>
      values["9레벨 겁화의 보석"] - values["8레벨 겁화의 보석"],
  },
  {
    name: "10멸->9겁 (딜지분 60%)",
    upgrade: 0.926,
    color: tableColor.gem,
    inputs: ["9레벨 겁화의 보석", "8레벨 겁화의 보석"],
    calculation: (values) =>
      values["9레벨 겁화의 보석"] - values["8레벨 겁화의 보석"],
  },

  {
    name: "9->10작 (1개-사이클단축)",
    upgrade: 2.28,
    color: tableColor.gem,
    inputs: ["10레벨 작열의 보석", "9레벨 작열의 보석"],
    calculation: (values) =>
      values["10레벨 작열의 보석"] - values["9레벨 작열의 보석"],
  },
  {
    name: "9->10작 (2개-사이클단축)",
    upgrade: 2.46,
    color: tableColor.gem,
    inputs: ["10레벨 작열의 보석", "9레벨 작열의 보석"],
    calculation: (values) =>
      (values["10레벨 작열의 보석"] - values["9레벨 작열의 보석"]) * 2,
  },
  {
    name: "9->10겁 (딜지분 20%)",
    upgrade: 0.75,
    color: tableColor.gem,
    inputs: ["10레벨 겁화의 보석", "9레벨 겁화의 보석"],
    calculation: (values) =>
      values["10레벨 겁화의 보석"] - values["9레벨 겁화의 보석"],
  },
  {
    name: "9->10겁 (딜지분 60%)",
    upgrade: 1.9,
    color: tableColor.gem,
    inputs: ["10레벨 겁화의 보석", "9레벨 겁화의 보석"],
    calculation: (values) =>
      values["10레벨 겁화의 보석"] - values["9레벨 겁화의 보석"],
  },

  {
    name: "무기18,19강 (최적)",
    upgrade: 1.12,
    color: tableColor.weapon,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "19").optimal,
  },
  {
    name: "무기20,21강 (최적)",
    upgrade: 1.12,
    color: tableColor.weapon,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "21").optimal,
  },
  {
    name: "무기22,23강 (최적)",
    upgrade: 1.12,
    color: tableColor.weapon,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "23").optimal,
  },
  {
    name: "무기24,25강 (최적)",
    upgrade: 1.12,
    color: tableColor.weapon,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "25").optimal,
  },

  {
    name: "무기18,19강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.12,
    color: tableColor.weapon,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "19").bind,
  },
  {
    name: "무기20,21강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.12,
    color: tableColor.weapon,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "21").bind,
  },
  {
    name: "무기22,23강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.12,
    color: tableColor.weapon,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "23").bind,
  },
  {
    name: "무기24,25강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.12,
    color: tableColor.weapon,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "25").bind,
  },
  {
    name: "무기 상급재련1~10(선조턴 숨결)",
    upgrade: 2.24,
    color: tableColor.up_weapon,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 파괴석",
      "용암의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 파괴석"] * 16005 +
        values["운명의 돌파석"] * 427 +
        values["아비도스 융화 재료"] * 640 +
        values["운명의 파편"] * 213394 +
        values["용암의 숨결"] * 50 +
        48014
      ).toFixed(0),
  },
  {
    name: "무기 상급재련11~20(선조턴 숨결)",
    upgrade: 2.24,
    color: tableColor.up_weapon,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 파괴석",
      "용암의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 파괴석"] * 29342 +
        values["운명의 돌파석"] * 587 +
        values["아비도스 융화 재료"] * 694 +
        values["운명의 파편"] * 426788 +
        values["용암의 숨결"] * 75 +
        106697
      ).toFixed(0),
  },
  {
    name: "무기 상급재련21~30(선조턴 숨결)",
    upgrade: 2.94,
    color: tableColor.up_weapon,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 파괴석",
      "용암의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 파괴석"] * 59233 +
        values["운명의 돌파석"] * 1234 +
        values["아비도스 융화 재료"] * 1382 +
        values["운명의 파편"] * 567654 +
        values["용암의 숨결"] * 171 +
        148084
      ).toFixed(0),
  },
  {
    name: "무기 상급재련31~40(선조턴 숨결)",
    upgrade: 3.3,
    color: tableColor.up_weapon,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 파괴석",
      "용암의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 파괴석"] * 69106 +
        values["운명의 돌파석"] * 1580 +
        values["아비도스 융화 재료"] * 1481 +
        values["운명의 파편"] * 641695 +
        values["용암의 숨결"] * 205 +
        197445
      ).toFixed(0),
  },
  {
    name: "방어구15,16강 (최적)",
    upgrade: 0.184,
    color: tableColor.armor,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "16").optimal,
  },
  {
    name: "방어구17,18,19강 (최적)",
    upgrade: 0.184,
    color: tableColor.armor,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "19").optimal,
  },
  {
    name: "방어구20,21강 (최적)",
    upgrade: 0.184,
    color: tableColor.armor,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "21").optimal,
  },
  {
    name: "방어구22,23강 (최적)",
    upgrade: 0.184,
    color: tableColor.armor,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "23").optimal,
  },
  // {
  //   name: "방어구15,16강 (골드+아비도스 외 귀속)",
  //   upgrade: 0.19,
  //   inputs: [],
  //   calculation: () => refineCal.calculate("armor", "t4_1590", "16").bindAll,
  // },
  // {
  //   name: "방어구17,18,19강 (골드+아비도스 외 귀속)",
  //   upgrade: 0.19,
  //   inputs: [],
  //   calculation: () => refineCal.calculate("armor", "t4_1590", "19").bindAll,
  // },
  // {
  //   name: "방어구20,21강 (골드+아비도스 외 귀속)",
  //   upgrade: 0.19,
  //   inputs: [],
  //   calculation: () => refineCal.calculate("armor", "t4_1590", "21").bindAll,
  // },
  // {
  //   name: "방어구22,23강 (골드+아비도스 외 귀속)",
  //   upgrade: 0.19,
  //   inputs: [],
  //   calculation: () => refineCal.calculate("armor", "t4_1590", "23").bindAll,
  // },

  {
    name: "방어구15,16강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 0.184,
    color: tableColor.armor,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "16").bind,
  },
  {
    name: "방어구17,18,19강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 0.184,
    color: tableColor.armor,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "19").bind,
  },
  {
    name: "방어구20,21강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 0.184,
    color: tableColor.armor,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "21").bind,
  },
  {
    name: "방어구22,23강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 0.184,
    color: tableColor.armor,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "23").bind,
  },
  {
    name: "방어구 상급재련1~10(선조턴 숨결)",
    upgrade: 0.37,
    color: tableColor.up_armor,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 수호석",
      "빙하의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 수호석"] * 13337 +
        values["운명의 돌파석"] * 320 +
        values["아비도스 융화 재료"] * 373 +
        values["운명의 파편"] * 128036 +
        values["빙하의 숨결"] * 50 +
        40545
      ).toFixed(0),
  },
  {
    name: "방어구 상급재련11~20(선조턴 숨결)",
    upgrade: 0.37,
    color: tableColor.up_armor,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 수호석",
      "빙하의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 수호석"] * 24007 +
        values["운명의 돌파석"] * 427 +
        values["아비도스 융화 재료"] * 427 +
        values["운명의 파편"] * 256073 +
        values["빙하의 숨결"] * 75 +
        66159
      ).toFixed(0),
  },
  {
    name: "방어구 상급재련21~30(선조턴 숨결)",
    upgrade: 0.49,
    color: tableColor.up_armor,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 수호석",
      "빙하의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 수호석"] * 49449 +
        values["운명의 돌파석"] * 890 +
        values["아비도스 융화 재료"] * 841 +
        values["운명의 파편"] * 346146 +
        values["빙하의 숨결"] * 167 +
        98899
      ).toFixed(0),
  },
  {
    name: "방어구 상급재련31~40(선조턴 숨결)",
    upgrade: 0.57,
    color: tableColor.up_armor,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 수호석",
      "빙하의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 수호석"] * 59339 +
        values["운명의 돌파석"] * 1137 +
        values["아비도스 융화 재료"] * 940 +
        values["운명의 파편"] * 395595 +
        values["빙하의 숨결"] * 201 +
        118679
      ).toFixed(0),
  },

  {
    name: "중단일 1부위",
    upgrade: 0.88,
    color: tableColor.accesory,
    inputs: ["중단일"],
    calculation: (values) => values["중단일"],
  },
  {
    name: "상단일 1부위",
    upgrade: 1.46,
    color: tableColor.accesory,
    inputs: ["상단일"],
    calculation: (values) => values["상단일"],
  },
  {
    name: "중단일->상단일 1부위",
    upgrade: 0.54,
    color: tableColor.accesory,
    inputs: ["중단일", "상단일"],
    calculation: (values) => values["상단일"] - values["중단일"],
  },
  {
    name: "중단일->중중 1부위",
    upgrade: 0.8,
    color: tableColor.accesory,
    inputs: ["중단일", "중중"],
    calculation: (values) => values["중중"] - values["중단일"],
  },
  {
    name: "중단일->상하 1부위",
    upgrade: 0.94,
    color: tableColor.accesory,
    inputs: ["중단일", "상하"],
    calculation: (values) => values["상하"] - values["중단일"],
  },
  {
    name: "중단일->상중 1부위",
    upgrade: 1.8,
    color: tableColor.accesory,
    inputs: ["중단일", "상중"],
    calculation: (values) => values["상중"] - values["중단일"],
  },
  {
    name: "상단일->상중 1부위",
    upgrade: 0.8,
    color: tableColor.accesory,
    inputs: ["상단일", "상중"],
    calculation: (values) => values["상중"] - values["상단일"],
  },
  {
    name: "상단일->상상 1부위",
    upgrade: 1.8,
    color: tableColor.accesory,
    inputs: ["상단일", "상상"],
    calculation: (values) => values["상상"] - values["상단일"],
  },
  {
    name: "중중->상상 1부위",
    upgrade: 1.1,
    color: tableColor.accesory,
    inputs: ["중중", "상상"],
    calculation: (values) => values["상상"] - values["중중"],
  },
  {
    name: "77돌->97돌(평균크리 5500골,돌 300골드 가정)",
    upgrade: 3.1,
    inputs: [],
    calculation: () => 3310000,
  },
];
