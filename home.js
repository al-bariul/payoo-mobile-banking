const addMoneyBtn = document.getElementById("addMoneyBtn");
const validPin = 1234;
const addMoneyBiggerBtn = document.getElementById("addMoneyBiggerBtn");
const cashOutBiggerBtn = document.getElementById("cashOutBiggerBtn");
const withdrawMoney = document.getElementById("withdrawMoney");

////////////////////////////
// converting string into an integer

function convertStringIntoInteger(id) {
  const selectId = document.getElementById(id);
  const takeValueOfSelectid = selectId.value;
  const convertValueIntoNumber = parseInt(takeValueOfSelectid);

  return convertValueIntoNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

////////////////////////////
// functio to get inner Text
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

/////////////////////////////
// Add Money Feature
addMoneyBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const selectBank = document.getElementById("selectBank").value;
  convertStringIntoInteger("accountNumber");

  const addAmount = convertStringIntoInteger("addAmount");
  const pinNumber = parseInt(document.getElementById("pinNumber").value);

  if (String(accountNumber).length < 4) {
    alert("Please prive you 4 digit account number.");
    return; // Here writing return mean this function will be finish here. It will not show the below lines code.
  }

  if (validPin !== pinNumber) {
    alert("Please prive valid pin number.");
    return; // Here writing return mean this function will be finish here. It will not show the below lines code.
  }

  const money = getInnerText("money");
  const totalNewAvailableBalance = money + addAmount;
  document.getElementById("money").innerText = totalNewAvailableBalance;
});

/////////////////////////////////////
// Cash Out Feature
withdrawMoney.addEventListener("click", function (event) {
  event.preventDefault();
  const cashOutAmount = parseInt(document.getElementById("removeAmount").value);
  const money = getInnerText("money");
  const totalNewAvailableBalance = money - cashOutAmount;
  document.getElementById("money").innerText = totalNewAvailableBalance;
});

///////////////////////////////////
// Toggling Feature
function togglingFeature(id, id2) {
  document.getElementById(id).style.display = "block";
  document.getElementById(id2).style.display = "none";

  console.log(id);
}

function toggleActiveClass(id, id2) {
  id.classList.add("active");
  id2.classList.remove("active");
}

addMoneyBiggerBtn.addEventListener("click", function () {
  togglingFeature("addMoney", "cashOut");
  toggleActiveClass(addMoneyBiggerBtn, cashOutBiggerBtn);
});

cashOutBiggerBtn.addEventListener("click", function () {
  togglingFeature("cashOut", "addMoney");
  toggleActiveClass(cashOutBiggerBtn, addMoneyBiggerBtn);
});

//
