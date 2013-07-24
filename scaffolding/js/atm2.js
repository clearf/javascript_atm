// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){
  function checkCurrentBalance() {
    var checkingBalance = parseInt(document.getElementById("checkingBalance").innerText.replace("$",""));
    var savingsBalance = parseInt(document.getElementById("savingsBalance").innerText.replace("$",""));
    return checkingBalance + savingsBalance;
  }

  function depositMoney(account, amount) {
    var currentBalance = parseInt(document.getElementById(account).innerText.replace("$",""));
    currentBalance += amount;
    document.getElementById(account).innerHTML = "$" + currentBalance;
    accountWarning(account);
  }

  function withdrawMoney(account, amount) {
    var currentBalance = parseInt(document.getElementById(account).innerText.replace("$",""));
    var totalBalance = checkCurrentBalance();
    if (amount <= currentBalance) {
      currentBalance -= amount;
      document.getElementById(account).innerHTML = "$" + currentBalance;
      accountWarning(account);
    } else if (amount <= totalBalance) {
      overdraftProtection(account, amount);
    } else {
      console.log("You don't have enough money in total!");
    }
  }

  function accountWarning(account) {
    var checkAccountBalance = parseInt(document.getElementById(account).innerText.replace("$",""));
    if (checkAccountBalance === 0) {
      document.getElementById(account).style.backgroundColor = "#FE2E2E";
    } else {
      document.getElementById(account).style.backgroundColor = "#E3E3E3";
    }
  }

  function overdraftProtection(account, amount) {
    if (account === "checkingBalance") {
      console.log("haha");
      var currentBalance = parseInt(document.getElementById(account).innerText.replace("$",""));
      var currentTransaction = currentBalance;
      currentBalance -= currentBalance;
      document.getElementById(account).innerHTML = "$" + currentBalance;
      var crossAccountBalance = parseInt(document.getElementById("savingsBalance").innerText.replace("$",""));
      crossAccountBalance -= (amount - currentTransaction);
      document.getElementById("savingsBalance").innerHTML = "$" + crossAccountBalance;
      accountWarning(account);
    } else if (account === "savingsBalance") {
      var currentBalance = parseInt(document.getElementById(account).innerText.replace("$",""));
      var currentTransaction = currentBalance;
      currentBalance -= currentBalance;
      document.getElementById(account).innerHTML = "$" + currentBalance;
      var crossAccountBalance = parseInt(document.getElementById("checkingBalance").innerText.replace("$",""));
      crossAccountBalance -= (amount - currentTransaction);
      document.getElementById("checkingBalance").innerHTML = "$" + crossAccountBalance;
      accountWarning(account);
    }
  }

  document.getElementById("checkingDeposit").onclick = function(event){
    var checkingAmount = parseInt(document.getElementById("checkingAmount").value);
    depositMoney("checkingBalance", checkingAmount);
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    var savingsAmount = parseInt(document.getElementById("savingsAmount").value);
    depositMoney("savingsBalance", savingsAmount);
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    checkCurrentBalance();
    var checkingAmount = parseInt(document.getElementById("checkingAmount").value);
    withdrawMoney("checkingBalance", checkingAmount);
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    checkCurrentBalance();
    var savingsAmount = parseInt(document.getElementById("savingsAmount").value);
    withdrawMoney("savingsBalance", savingsAmount);
  };
};