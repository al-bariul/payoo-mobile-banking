const addMoneyBtn = document.getElementById("addMoneyBtn");
const validPin = 1234;
const addMoneyBiggerBtn = document.getElementById("addMoneyBiggerBtn");
const cashOutBiggerBtn = document.getElementById("cashOutBiggerBtn");

/////////////////////////////
// Add Money Feature

addMoneyBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const selectBank = document.getElementById("selectBank").value;
  const accountNumber = parseInt(
    document.getElementById("accountNumber").value
  );
  const addAmount = parseInt(document.getElementById("addAmount").value);
  const pinNumber = parseInt(document.getElementById("pinNumber").value);

  // console.log(String(accountNumber));
  // console.log(String(accountNumber).length);

  if (String(accountNumber).length < 4) {
    alert("Please prive you 4 digit account number.");
    return; // Here writing return mean this function will be finish here. It will not show the below lines code.
  }

  if (validPin !== pinNumber) {
    alert("Please prive valid pin number.");
    return; // Here writing return mean this function will be finish here. It will not show the below lines code.
  }

  const money = parseInt(document.getElementById("money").innerText);
  const totalNewAvailableBalance = money + addAmount;
  document.getElementById("money").innerText = totalNewAvailableBalance;

  //   console.log(selectBank, accountNumber, addAmount, pinNumber, money);
});

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

