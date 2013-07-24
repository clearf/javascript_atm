window.onload = function() {

  var checkingAccountBalance = 0;
  var savingsAccountBalance = 0;
  var checkingBalance = document.getElementById("checkingBalance");
  var savingsBalance = document.getElementById("savingsBalance");

  function setBackgroundColor() {
    if (checkingAccountBalance === 0) {
      document.getElementsByClassName("balance")[0].style.background = "red";
    } else {
      document.getElementsByClassName("balance")[0].style.background = "#F5F5F5";
    }
    if (savingsAccountBalance === 0) {
      document.getElementsByClassName("balance")[1].style.background = "red";
    } else {
      document.getElementsByClassName("balance")[1].style.background = "#F5F5F5";
    }
  }

  setBackgroundColor();

  document.getElementById("checkingDeposit").onclick = function(event){
    var checkingAmount = document.getElementById("checkingAmount").value;
    checkingAccountBalance += parseFloat(checkingAmount);
    checkingBalance.innerHTML = "$" + checkingAccountBalance;
    setBackgroundColor();
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    var savingsAmount = document.getElementById("savingsAmount").value;
    savingsAccountBalance += parseFloat(savingsAmount);
    savingsBalance.innerHTML = "$" + savingsAccountBalance;
    setBackgroundColor();
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    var checkingAmount = parseFloat(document.getElementById("checkingAmount").value);
    if (checkingAmount <= checkingAccountBalance + savingsAccountBalance) {
      if (checkingAmount <= checkingAccountBalance) {
        checkingAccountBalance -= checkingAmount;
        checkingBalance.innerHTML = "$" + checkingAccountBalance;
      } else {
        savingsAccountBalance -= (checkingAmount - checkingAccountBalance);
        savingsBalance.innerHTML = "$" + savingsAccountBalance;
        checkingAccountBalance = 0;
        checkingBalance.innerHTML = "$" + checkingAccountBalance;
      }
    }
    setBackgroundColor();
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    var savingsAmount = parseFloat(document.getElementById("savingsAmount").value);
    if (savingsAmount <= checkingAccountBalance + savingsAccountBalance) {
      if (savingsAmount <= savingsAccountBalance) {
        savingsAccountBalance -= savingsAmount;
        savingsBalance.innerHTML = "$" + savingsAccountBalance;
      } else {
        checkingAccountBalance -= (savingsAmount - savingsAccountBalance);
        checkingBalance.innerHTML = "$" + checkingAccountBalance;
        savingsAccountBalance = 0;
        savingsBalance.innerHTML = "$" + savingsAccountBalance;
      }
    }
    setBackgroundColor();
  };
};