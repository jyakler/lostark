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
    upgrade: 1.3,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "19").optimal,
  },
  {
    name: "무기20,21강 (최적)",
    upgrade: 1.3,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "21").optimal,
  },
  {
    name: "무기22,23강 (최적)",
    upgrade: 1.3,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "23").optimal,
  },
  {
    name: "무기24,25강 (최적)",
    upgrade: 1.3,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "25").optimal,
  },

  {
    name: "무기18,19강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.3,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "19").bind,
  },
  {
    name: "무기20,21강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.3,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "21").bind,
  },
  {
    name: "무기22,23강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.3,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "23").bind,
  },
  {
    name: "무기24,25강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 1.3,
    inputs: [],
    calculation: () => refineCal.calculate("weapon", "t4_1590", "25").bind,
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
    upgrade: 0.19,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "16").optimal,
  },
  {
    name: "방어구17,18,19강 (최적)",
    upgrade: 0.19,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "19").optimal,
  },
  {
    name: "방어구20,21강 (최적)",
    upgrade: 0.19,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "21").optimal,
  },
  {
    name: "방어구22,23강 (최적)",
    upgrade: 0.19,
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
    upgrade: 0.19,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "16").bind,
  },
  {
    name: "방어구17,18,19강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 0.19,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "19").bind,
  },
  {
    name: "방어구20,21강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 0.19,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "21").bind,
  },
  {
    name: "방어구22,23강 (골드+아비도스+숨결 외 귀속)",
    upgrade: 0.19,
    inputs: [],
    calculation: () => refineCal.calculate("armor", "t4_1590", "23").bind,
  },
];
