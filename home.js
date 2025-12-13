const validPin = 1234;

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

///////////////////////////
// Making input field empty
function makeInputEmpty(id) {
  const commonVariable = document.getElementById(id);
  commonVariable.value = "";
}

/////////////////////////////
// Add Money Feature
document
  .getElementById("addMoneyBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const selectBank = document.getElementById("selectBank").value;
    convertStringIntoInteger("accountNumber");
    makeInputEmpty("accountNumber");

    const addAmount = convertStringIntoInteger("addAmount");
    const pinNumber = parseInt(document.getElementById("pinNumber").value);

    makeInputEmpty("addAmount");
    makeInputEmpty("pinNumber");

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
document
  .getElementById("withdrawMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = parseInt(
      document.getElementById("removeAmount").value
    );
    const money = getInnerText("money");
    const totalNewAvailableBalance = money - cashOutAmount;
    document.getElementById("money").innerText = totalNewAvailableBalance;
  });

///////////////////////////////////
// Transfer Money Feature
document
  .getElementById("sendMoney")
  .addEventListener("click", function (event) {
    event.preventDefault();
    convertStringIntoInteger("userAccountNumber");
    convertStringIntoInteger("transferAmount");
    convertStringIntoInteger("pinNumberTransferMoney");
  });

///////////////////////////////////
// Toggling Feature
function toggleFeature(id1, id2) {
  document.getElementById(id2).addEventListener("click", function () {
    const form = document.getElementsByClassName("form");
    const commonBtn = document.getElementsByClassName("commonBtn");

    for (const from of form) {
      from.style.display = "none";
    }

    for (btn of commonBtn) {
      btn.classList.remove("active");
    }
    document.getElementById(id1).style.display = "block";
    document.getElementById(id2).classList.add("active");
  });
}

toggleFeature("addMoney", "addMoneyBiggerBtn");
toggleFeature("cashOut", "cashOutBiggerBtn");
toggleFeature("transferMoney", "transferMoneyBiggerBtn");
toggleFeature("getBonus", "getBonusBiggerBtn");
toggleFeature("payBill", "payBillBiggerBtn");
toggleFeature("transaction", "transactionBiggerBtn");
