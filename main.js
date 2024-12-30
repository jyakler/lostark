import {
  apikey,
  auctionPath,
  gemList,
  host,
  itemList as items,
  marketPath,
  table,
} from "./const.js";

function saveApiToken() {
  var apiToken = document.getElementById("apiToken").value;
  // var apiToken = apikey;
  localStorage.setItem("apiToken", `bearer ${apiToken}`);
  displayMessage("Your API token was successfully saved.", "message");
}

function displayMessage(message, id) {
  var messageElement = document.getElementById(id);
  messageElement.textContent = message;
  setTimeout(function () {
    messageElement.textContent = "";
  }, 5000); // Disappears after 5 seconds
}

function updateStorage(marketData = 0) {
  // event.preventDefault();
  let inputs;
  let scatter = document.getElementById("운명의 파편").value ?? 1e9;
  // let scatter = 10e9;
  if (marketData === 0) {
    inputs = document.querySelectorAll("[name='item']");
    inputs.forEach((input) => {
      const key = input.id;
      const value = input.value;
      localStorage.setItem(key, value);
    });
  } else {
    // console.log(marketData);
    inputs = marketData;
    inputs.forEach((input) => {
      if (input.Name === "운명의 파편 주머니(소)") {
        scatter = Math.min(scatter, input.YDayAvgPrice / 1000);
      } else if (input.Name === "운명의 파편 주머니(중)") {
        scatter = Math.min(scatter, input.YDayAvgPrice / 1500);
      }
      if ((input.Name === "운명의 수호석") | (input.Name === "운명의 파괴석")) {
        input.YDayAvgPrice /= 10;
      }

      scatter = Number(scatter).toFixed(5);
      localStorage.setItem(input.Name, input.YDayAvgPrice);
    });
  }
  localStorage.setItem("운명의 파편", scatter);
  displayMessage("items priced saved", "message2");
  calculateTable();
  loadData();
}

async function calculateTable() {
  const storedItems = { ...localStorage };
  const result = {};
  table.forEach((entry) => {
    if (entry.inputs.length <= 0) {
      entry.price = entry.calculation();
    } else {
      const values = {};
      entry.inputs.forEach((key) => {
        values[key] = storedItems[key];
      });

      entry.price = entry.calculation(values);
    }
    entry.specup = Math.ceil(entry.price / entry.upgrade);
  });
  console.log("table: ", table);
  await printTable();
}

async function printTable() {
  //sort
  table.sort(function (a, b) {
    return a.specup - b.specup;
  });

  //remove existing
  const tableBody = document.querySelector("#calculatedTable tbody");
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  // Populate the table
  var resultTable = document.getElementById("calculatedTable");
  console.log(table);
  table.forEach(function (table) {
    var row = resultTable.insertRow(-1);
    row.insertCell(0).innerText = table.name;
    row.insertCell(1).innerText = table.upgrade;
    row.insertCell(2).innerText = table.price;
    row.insertCell(3).innerText = table.specup;
  });
}

// function getCookie(name) {
//   var nameEquals = name + "=";
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var ca = decodedCookie.split(";");
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(nameEquals) === 0) {
//       return c.substring(nameEquals.length, c.length);
//     }
//   }
//   return null;
// }

function loadItemList() {
  document.getElementById("itemList").innerHTML = "";
  const itemListDiv = document.getElementById("itemList");
  items.forEach((item) => {
    const label = document.createElement("label");
    label.setAttribute("for", item);
    label.textContent = `${item}`;

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", item);
    input.setAttribute("name", "item");
    const br = document.createElement("br");

    if (
      (item !== "운명의 파편 주머니(소)") &
      (item !== "운명의 파편 주머니(중)")
    ) {
      itemListDiv.appendChild(label);
      itemListDiv.appendChild(input);
      itemListDiv.appendChild(br);
    }
  });
}

function loadData() {
  // if (localStorage.length == 0) {
  //   localStorage.setItem("lastUpdated", new Date());
  // }
  loadItemList();
  if (localStorage.length > 1) {
    const storedItems = { ...localStorage };
    for (const [key, value] of Object.entries(storedItems)) {
      if (key === "lastUpdated") {
        document.getElementById(key).innerHTML = value;
        continue;
      }
      if (key === "apiToken") {
        document.getElementById(key).value = value.split(" ")[1];
        continue;
      }
      try {
        document.getElementById(key).value = value;
      } catch (error) {
        console.log(key, value);
      }
    }
  }
}

// 거래소
async function getMarketPrice() {
  const api = localStorage.getItem("apiToken");
  console.log(api);
  const marketResult = await axios.post(
    host + marketPath,
    {
      Sort: "YDAY_AVG_PRICE",
      CategoryCode: 50000, // 강화재료
      ItemTier: 4,
      PageNo: 1,
      SortCondition: "ASC",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: api,
      },
    }
  );
  console.log(JSON.stringify(marketResult.data));
  updateStorage(marketResult.data.Items);
}

// 경매장
async function getAutctionPrice() {
  for (const gemName of gemList) {
    await auctionSave(gemName);
  }
}

async function auctionSave(itemName) {
  const api = localStorage.getItem("apiToken");

  const auctionResult = await axios.post(
    host + auctionPath,
    {
      ItemLevelMin: 0,
      ItemLevelMax: 1800,
      Sort: "BUY_PRICE",
      CategoryCode: 210000,
      ItemTier: 4,
      ItemName: itemName,
      PageNo: 1,
      SortCondition: "ASC",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: api,
      },
    }
  );
  localStorage.setItem(
    auctionResult.data.Items[0].Name,
    auctionResult.data.Items[0].AuctionInfo.BuyPrice
  );
}

async function getDataFromApi() {
  const lastUpdatedTime = new Date(
    localStorage.getItem("lastUpdated")
  ).getTime();
  const currentTime = new Date().getTime();
  if ((currentTime - lastUpdatedTime) / (1000 * 60) < 5) {
    displayMessage(
      "너무 자주 API키로 가격을 불러오고 있습니다. (최소 5분제한)",
      "message2"
    );
    return;
  }
  try {
    await getAutctionPrice();
    await getMarketPrice();
    displayMessage("API로 가격을 불러왔습니다", "message2");
    localStorage.setItem("lastUpdated", new Date());
  } catch (error) {
    console.log(error);
    displayMessage("API로 가격을 불러오는데 실패했습니다", "message2");
  }
}

function thanksTo() {
  // thanks to
  const box = document.getElementById("box");
  const hiddenText = document.getElementById("hiddenText");

  // manual
  const box2 = document.getElementById("box2");
  const hiddenText2 = document.getElementById("hiddenText2");

  box.addEventListener("click", () => {
    if (
      hiddenText.style.display === "none" ||
      hiddenText.style.display === ""
    ) {
      hiddenText.style.display = "block";
    } else {
      hiddenText.style.display = "none";
    }
  });

  box2.addEventListener("click", () => {
    // Toggle the display of the hidden text
    if (
      hiddenText2.style.display === "none" ||
      hiddenText2.style.display === ""
    ) {
      hiddenText2.style.display = "block";
    } else {
      hiddenText2.style.display = "none";
    }
  });
}

thanksTo();
window.saveApiToken = saveApiToken;
window.updateStorage = updateStorage;
window.getDataFromApi = getDataFromApi;
window.onload(loadData());