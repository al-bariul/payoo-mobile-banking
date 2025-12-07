const addMoneyBtn = document.getElementById("addMoneyBtn");
const validPin = 1234;

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
