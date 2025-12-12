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
addMoneyBiggerBtn.addEventListener("click", function () {
  document.getElementById("addMoney").style.display = "block";
  document.getElementById("cashOut").style.display = "none";

  // console.log(document.getElementById("addMoneyBiggerBtn"));
  addMoneyBiggerBtn.classList.add("active");
  cashOutBiggerBtn.classList.remove("active");
});

cashOutBiggerBtn.addEventListener("click", function () {
  document.getElementById("addMoney").style.display = "none";
  document.getElementById("cashOut").style.display = "block";
  cashOutBiggerBtn.classList.add("active");
  addMoneyBiggerBtn.classList.remove("active");
});

//
