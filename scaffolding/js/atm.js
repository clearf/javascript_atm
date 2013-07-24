window.onload = function() {
  var checking = {
    balance: 0
  };
  var savings = {
    balance: 0
  };
  var checkingBalance = document.getElementById("checkingBalance");
  var savingsBalance = document.getElementById("savingsBalance");
  setBackgroundColor(checking, 0);
  setBackgroundColor(savings, 1);

  function setBackgroundColor(account, i) {
    if (account.balance === 0) {
      document.getElementsByClassName("balance")[i].style.background = "red";
    } else {
      document.getElementsByClassName("balance")[i].style.background = "#F5F5F5";
    }
  }

  function deposit(account, balanceDiv, elementId, i) {
    var depositAmount = parseFloat(document.getElementById(elementId).value);
    account.balance += depositAmount;
    balanceDiv.innerHTML = "$" + account.balance;
    setBackgroundColor(account, i);
  }

  function withdraw(account1, account2, balanceDiv1, balanceDiv2, elementId) {
    var checkingAmount = parseFloat(document.getElementById(elementId).value);
    if (checkingAmount <= account1.balance + account2.balance) {
      if (checkingAmount <= account1.balance) {
        account1.balance -= checkingAmount;
        balanceDiv1.innerHTML = "$" + account1.balance;
      } else {
        account2.balance -= (checkingAmount - account1.balance);
        balanceDiv2.innerHTML = "$" + account2.balance;
        account1.balance = 0;
        balanceDiv1.innerHTML = "$" + account1.balance;
      }
    }
    setBackgroundColor(checking, 0);
    setBackgroundColor(savings, 1);
  }

  document.getElementById("checkingDeposit").onclick = function(event){
    deposit(checking, checkingBalance, "checkingAmount", 0);
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    deposit(savings, savingsBalance, "savingsAmount", 1);
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    withdraw(checking, savings, checkingBalance, savingsBalance, "checkingAmount");
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    withdraw(savings, checking, savingsBalance, checkingBalance, "savingsAmount");
  };
};






