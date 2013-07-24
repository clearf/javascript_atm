// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  function checkCurrentBalance() {
    var checkingBalance = parseInt(document.getElementById("checkingBalance").innerText.replace("$",""));
    var savingsBalance = parseInt(document.getElementById("savingsBalance").innerText.replace("$",""));
  }

  function depositMoney(account, amount) {
    var currentBalance = parseInt(document.getElementById(account).innerText.replace("$",""));
    currentBalance += amount;
    document.getElementById(account).innerHTML = "$" + currentBalance;
    accountWarning(account);
  }

  function withdrawMoney(account, amount) {
    var currentBalance = parseInt(document.getElementById(account).innerText.replace("$",""));
    if (amount <= currentBalance) {
      currentBalance -= amount;
      document.getElementById(account).innerHTML = "$" + currentBalance;
      accountWarning(account);
    } else {
      console.log("You don't have enough money!");
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

  function checkTotalBalance() {
    checkCurrentBalance();
    var totalBalance = checkingBalance + savingsBalance;
  }

  // function overdraftProtection(account, amount) {
  //   checkTotalBalance();
  //   if (account === "checkingBalance") {
  //     if (amount <= totalBalance {
  //       // var crossAccountDeduction = amount - checkingBalance;
  //       withdrawMoney(account, checkingBalance);
  //       withdrawMoney("savingsBalance", (amount - checkingBalance));
  //     }
  //   } else { // this is savings instead
  //     console.log("NOOO!");
  //   }

  // }

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
    // overdraftProtection("checkingBalance", checkingAmount);
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    checkCurrentBalance();
    var savingsAmount = parseInt(document.getElementById("savingsAmount").value);
    withdrawMoney("savingsBalance", savingsAmount);
  };

};
