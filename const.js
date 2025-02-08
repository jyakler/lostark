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
  ...gemList,
  ...accesoryList,
];

const refineCal = new RefiningComponent();
export const table = [
  {
    name: "유물각인[저받,돌대,원한,타대] 5만골",
    upgrade: 2.6,
    inputs: [],
    calculation: () => 50000 * 20,
  },
  {
    name: "유물각인[저받,돌대,원한,타대] 10만골",
    upgrade: 2.6,
    inputs: [],
    calculation: () => 100000 * 20,
  },
  {
    name: "유물각인[저받,돌대,원한,타대] 20만골",
    upgrade: 2.6,
    inputs: [],
    calculation: () => 200000 * 20,
  },
  {
    name: "유물각인[저받,돌대,원한,타대] 30만골",
    upgrade: 2.6,
    inputs: [],
    calculation: () => 300000 * 20,
  },
  {
    name: "유물각인[저받,돌대,원한,타대] 40만골",
    upgrade: 2.6,
    inputs: [],
    calculation: () => 400000 * 20,
  },
  {
    name: "7->8작 (예의보석)",
    upgrade: 0.187,
    inputs: ["8레벨 작열의 보석", "7레벨 작열의 보석"],
    calculation: (values) =>
      values["8레벨 작열의 보석"] - values["7레벨 작열의 보석"],
  },
  {
    name: "7->8작 (1개-사이클단축)",
    upgrade: 2.19,
    inputs: ["8레벨 작열의 보석", "7레벨 작열의 보석"],
    calculation: (values) =>
      values["8레벨 작열의 보석"] - values["7레벨 작열의 보석"],
  },
  {
    name: "7->8작 (2개-사이클단축)",
    upgrade: 2.37,
    inputs: ["8레벨 작열의 보석", "7레벨 작열의 보석"],
    calculation: (values) =>
      (values["8레벨 작열의 보석"] - values["7레벨 작열의 보석"]) * 2,
  },
  {
    name: "7->8겁 (딜지분 5%)",
    upgrade: 0.34,
    inputs: ["8레벨 겁화의 보석", "7레벨 겁화의 보석"],
    calculation: (values) =>
      values["8레벨 겁화의 보석"] - values["7레벨 겁화의 보석"],
  },
  {
    name: "7->8겁 (딜지분 20%)",
    upgrade: 0.79,
    inputs: ["8레벨 겁화의 보석", "7레벨 겁화의 보석"],
    calculation: (values) =>
      values["8레벨 겁화의 보석"] - values["7레벨 겁화의 보석"],
  },
  {
    name: "7->8겁 (딜지분 60%)",
    upgrade: 2,
    inputs: ["8레벨 겁화의 보석", "7레벨 겁화의 보석"],
    calculation: (values) =>
      values["8레벨 겁화의 보석"] - values["7레벨 겁화의 보석"],
  },

  {
    name: "8->9작 (1개-사이클단축)",
    upgrade: 2.23,
    inputs: ["9레벨 작열의 보석", "8레벨 작열의 보석"],
    calculation: (values) =>
      values["9레벨 작열의 보석"] - values["8레벨 작열의 보석"],
  },
  {
    name: "8->9작 (2개-사이클단축)",
    upgrade: 2.42,
    inputs: ["9레벨 작열의 보석", "8레벨 작열의 보석"],
    calculation: (values) =>
      (values["9레벨 작열의 보석"] - values["8레벨 작열의 보석"]) * 2,
  },
  {
    name: "8->9겁 (딜지분 20%)",
    upgrade: 0.77,
    inputs: ["9레벨 겁화의 보석", "8레벨 겁화의 보석"],
    calculation: (values) =>
      values["9레벨 겁화의 보석"] - values["8레벨 겁화의 보석"],
  },
  {
    name: "10멸->9겁 (딜지분 60%)",
    upgrade: 0.926,
    inputs: ["9레벨 겁화의 보석", "8레벨 겁화의 보석"],
    calculation: (values) =>
      values["9레벨 겁화의 보석"] - values["8레벨 겁화의 보석"],
  },

  {
    name: "9->10작 (1개-사이클단축)",
    upgrade: 2.28,
    inputs: ["10레벨 작열의 보석", "9레벨 작열의 보석"],
    calculation: (values) =>
      values["10레벨 작열의 보석"] - values["9레벨 작열의 보석"],
  },
  {
    name: "9->10작 (2개-사이클단축)",
    upgrade: 2.46,
    inputs: ["10레벨 작열의 보석", "9레벨 작열의 보석"],
    calculation: (values) =>
      (values["10레벨 작열의 보석"] - values["9레벨 작열의 보석"]) * 2,
  },
  {
    name: "9->10겁 (딜지분 20%)",
    upgrade: 0.75,
    inputs: ["10레벨 겁화의 보석", "9레벨 겁화의 보석"],
    calculation: (values) =>
      values["10레벨 겁화의 보석"] - values["9레벨 겁화의 보석"],
  },
  {
    name: "9->10겁 (딜지분 60%)",
    upgrade: 1.9,
    inputs: ["10레벨 겁화의 보석", "9레벨 겁화의 보석"],
    calculation: (values) =>
      values["10레벨 겁화의 보석"] - values["9레벨 겁화의 보석"],
  },

  {
    name: "무기18,19강 (최적)",
    upgrade: 1.12,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "19").optimal,
  },
  {
    name: "무기20,21강 (최적)",
    upgrade: 1.12,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "21").optimal,
  },
  {
    name: "무기22,23강 (최적)",
    upgrade: 1.12,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "23").optimal,
  },
  {
    name: "무기24,25강 (최적)",
    upgrade: 1.12,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "25").optimal,
  },

  {
    name: "무기18,19강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.12,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "19").bind,
  },
  {
    name: "무기20,21강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.12,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "21").bind,
  },
  {
    name: "무기22,23강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.12,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "23").bind,
  },
  {
    name: "무기24,25강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.12,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "25").bind,
  },
  {
    name: "무기 상급재련1~10(선조턴 숨결)",
    upgrade: 2.24,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 파괴석",
      "용암의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 파괴석"] * 29670 +
        values["운명의 돌파석"] * 791 +
        values["아비도스 융화 재료"] * 1236 +
        values["운명의 파편"] * 247247 +
        values["용암의 숨결"] * 100 +
        55631
      ).toFixed(0),
  },
  {
    name: "무기 상급재련11~20(선조턴 숨결)",
    upgrade: 2.24,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 파괴석",
      "용암의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 파괴석"] * 54394 +
        values["운명의 돌파석"] * 1088 +
        values["아비도스 융화 재료"] * 1335 +
        values["운명의 파편"] * 494494 +
        values["용암의 숨결"] * 151 +
        123624
      ).toFixed(0),
  },
  {
    name: "무기 상급재련21~30(선조턴 숨결)",
    upgrade: 2.94,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 파괴석",
      "용암의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 파괴석"] * 59339 +
        values["운명의 돌파석"] * 1236 +
        values["아비도스 융화 재료"] * 1385 +
        values["운명의 파편"] * 568668 +
        values["용암의 숨결"] * 167 +
        148348
      ).toFixed(0),
  },
  {
    name: "무기 상급재련31~40(선조턴 숨결)",
    upgrade: 3.3,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 파괴석",
      "용암의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 파괴석"] * 69229 +
        values["운명의 돌파석"] * 1582 +
        values["아비도스 융화 재료"] * 1483 +
        values["운명의 파편"] * 642842 +
        values["용암의 숨결"] * 201 +
        197798
      ).toFixed(0),
  },

  // {
  //   name: "무기18,19강 (골드+아비도스 외 귀속)",
  //   upgrade: 1.3,
  //   inputs: [],
  //   calculation: () => refineCal.calculate("weapon", "t4_1590", "19").bindAll,
  // },
  // {
  //   name: "무기20,21강 (골드+아비도스 외 귀속)",
  //   upgrade: 1.3,
  //   inputs: [],
  //   calculation: () => refineCal.calculate("weapon", "t4_1590", "21").bindAll,
  // },
  // {
  //   name: "무기22,23강 (골드+아비도스 외 귀속)",
  //   upgrade: 1.3,
  //   inputs: [],
  //   calculation: () => refineCal.calculate("weapon", "t4_1590", "23").bindAll,
  // },
  // {
  //   name: "무기24,25강 (골드+아비도스 외 귀속)",
  //   upgrade: 1.3,
  //   inputs: [],
  //   calculation: () => refineCal.calculate("weapon", "t4_1590", "25").bindAll,
  // },
  {
    name: "방어구15,16강 (최적)",
    upgrade: 0.184,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "16").optimal,
  },
  {
    name: "방어구17,18,19강 (최적)",
    upgrade: 0.184,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "19").optimal,
  },
  {
    name: "방어구20,21강 (최적)",
    upgrade: 0.184,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "21").optimal,
  },
  {
    name: "방어구22,23강 (최적)",
    upgrade: 0.184,
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
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "16").bind,
  },
  {
    name: "방어구17,18,19강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 0.184,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "19").bind,
  },
  {
    name: "방어구20,21강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 0.184,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "21").bind,
  },
  {
    name: "방어구22,23강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 0.184,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "23").bind,
  },
  {
    name: "방어구 상급재련1~10(선조턴 숨결)",
    upgrade: 0.37,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 수호석",
      "빙하의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 수호석"] * 24725 +
        values["운명의 돌파석"] * 593 +
        values["아비도스 융화 재료"] * 742 +
        values["운명의 파편"] * 148348 +
        values["빙하의 숨결"] * 100 +
        46977
      ).toFixed(0),
  },
  {
    name: "방어구 상급재련11~20(선조턴 숨결)",
    upgrade: 0.37,
    inputs: [
      "운명의 파편",
      "운명의 돌파석",
      "아비도스 융화 재료",
      "운명의 수호석",
      "빙하의 숨결",
    ],
    calculation: (values) =>
      (
        values["운명의 수호석"] * 44504 +
        values["운명의 돌파석"] * 791 +
        values["아비도스 융화 재료"] * 791 +
        values["운명의 파편"] * 296697 +
        values["빙하의 숨결"] * 151 +
        89009
      ).toFixed(0),
  },
  {
    name: "방어구 상급재련21~30(선조턴 숨결)",
    upgrade: 0.49,
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
    inputs: ["중단일"],
    calculation: (values) => values["중단일"],
  },
  {
    name: "상단일 1부위",
    upgrade: 1.8,
    inputs: ["상단일"],
    calculation: (values) => values["상단일"],
  },
  {
    name: "중단일->중중 1부위",
    upgrade: 0.88,
    inputs: ["중단일", "중중"],
    calculation: (values) => values["중중"] - values["중단일"],
  },
  {
    name: "중단일->상하 1부위",
    upgrade: 1,
    inputs: ["중단일", "상하"],
    calculation: (values) => values["상하"] - values["중단일"],
  },
  {
    name: "중단일->상중 1부위",
    upgrade: 1.8,
    inputs: ["중단일", "상중"],
    calculation: (values) => values["상중"] - values["중단일"],
  },
  {
    name: "상단일->상중 1부위",
    upgrade: 0.8,
    inputs: ["상단일", "상중"],
    calculation: (values) => values["상중"] - values["상단일"],
  },
  {
    name: "상단일->상상 1부위",
    upgrade: 1.8,
    inputs: ["상단일", "상상"],
    calculation: (values) => values["상상"] - values["상단일"],
  },
  {
    name: "77돌->97돌(평균크리 5500골,돌 300골드 가정)",
    upgrade: 3.1,
    inputs: [],
    calculation: () => 3310000,
  },
];
