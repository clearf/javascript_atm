// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.


window.onload = function(){

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  document.getElementById("checkingDeposit").onclick = function(event){
    var targetAccountId = document.getElementById("checkingBalance").id;
    var targetAmountString = document.getElementById("checkingAmount").value;
    if (targetAmountString !== '') {
      depositMoney(targetAccountId, parseInt(targetAmountString));
    }
    colorCode();
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    var targetAccountId = document.getElementById("savingsBalance").id;
    var targetAmountString = document.getElementById("savingsAmount").value;
    if (targetAmountString !== '') {
      depositMoney(targetAccountId, parseInt(targetAmountString));
    }
    colorCode();
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    getCurrentBalances();
    var targetAccountId = document.getElementById("checkingBalance").id;
    var targetAmount = document.getElementById("checkingAmount").value;
    if (checkForTransactabilty(targetAmount)) {
      if (triggerOverdraftProtection(targetAccountId, targetAmount)) {
        remainingAmountToBeWithdrawn = targetAmount - currentCheckingBal;
        withdrawMoney(targetAccountId, currentCheckingBal);
        withdrawMoney("savingsBalance", remainingAmountToBeWithdrawn);
      } else {
        withdrawMoney(targetAccountId, targetAmount);
      }
    }
    colorCode();
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    getCurrentBalances();
    var targetAccountId = document.getElementById("savingsBalance").id;
    var targetAmount = document.getElementById("savingsAmount").value;
    if (checkForTransactabilty(targetAmount)) {
      if (triggerOverdraftProtection(targetAccountId, targetAmount)) {
        remainingAmountToBeWithdrawn = targetAmount - currentSavingsBal;
        withdrawMoney(targetAccountId, currentSavingsBal);
        withdrawMoney("checkingBalance", remainingAmountToBeWithdrawn);
      } else {
        withdrawMoney(targetAccountId, targetAmount);
      }
    }
    colorCode();
  };

  currentCheckingBal = 0;
  currentSavingsBal = 0;

  function getCurrentBalances() {
    currentCheckingBal = parseInt(document.getElementById("checkingBalance").innerHTML.replace('$', ''), 10);
    currentSavingsBal = parseInt(document.getElementById("savingsBalance").innerHTML.replace('$', ''), 10);
  }

  function depositMoney(targetAccountId, targetAmount) {
    currentBalance = parseInt(document.getElementById(targetAccountId).innerHTML.replace('$', ''), 10);
    currentBalance += targetAmount;
    document.getElementById(targetAccountId).innerHTML = "$" + currentBalance;
  }

  function withdrawMoney(targetAccountId, targetAmount) {
    currentBalance = parseInt(document.getElementById(targetAccountId).innerHTML.replace('$', ''), 10);
    currentBalance -= targetAmount;
    document.getElementById(targetAccountId).innerHTML = "$" + currentBalance;
  }

  function checkForTransactabilty(amountToBeWithdrawn) {
    if (amountToBeWithdrawn <= currentCheckingBal + currentSavingsBal) {
      return true;
    } else {
      return false;
    }
  }

  function triggerOverdraftProtection(targetAccountId, amountToBeWithdrawn) {
    var currentBalance = parseInt(document.getElementById(targetAccountId).innerHTML.replace('$', ''), 10);
    if (amountToBeWithdrawn > currentBalance) {
      return true;
    } else {
      return false;
    }
  }

  function colorCode() {
    getCurrentBalances();
    if (currentCheckingBal === 0) {
      document.getElementById("checkingBalance").classList.add('zero');
    } else {
      document.getElementById("checkingBalance").classList.remove('zero');
    }
    if (currentSavingsBal === 0) {
      document.getElementById("savingsBalance").classList.add('zero');
    } else {
      document.getElementById("savingsBalance").classList.remove('zero');
    }
  }
};
