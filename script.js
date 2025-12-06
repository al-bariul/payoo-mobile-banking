/* Login Button Functionality */
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const mobileNumber = 1234;
  const pinNumber = 1234;

  const getMobileNumberValue = document.getElementById("mobile-number").value; // It will give a string. But mobile number is a number. so, convert it inot number using parseInt

  const passwordValue = document.getElementById("password").value; // convert into number

  const convertGetMobileNumberValue = parseInt(getMobileNumberValue);
  const converPaswordNumber = parseInt(passwordValue);

  if (
    mobileNumber === convertGetMobileNumberValue &&
    pinNumber === converPaswordNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid mobile number or pin");
  }
});
