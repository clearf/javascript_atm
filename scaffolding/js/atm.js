// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  // Returns checkingBalance div, sets initial checkingBalanceAmount
  var checkingBalance = document.getElementById("checkingBalance");
  var checkingBalanceAmount = 0;

  // Returns savingsBalance div, sets initial savingsBalanceAmount
  var savingsBalance = document.getElementById("savingsBalance");
  var savingsBalanceAmount = 0;

  function reddify(accountAmount, index) { //checking is 0 and savings is 1
    if (accountAmount === 0) {
      document.getElementsByClassName("balance")[index].style.background = "red";
    } else {
      document.getElementsByClassName("balance")[index].style.background = "#E3E3E3";
    }
  }

  function deposit(accountAmount, accountBalanceAmount, accountBalance, index) {
    var num = document.getElementById(accountAmount).value;
    if (num >= 0) {
      accountBalanceAmount += num*1;
      accountBalance.innerHTML = "$"+accountBalanceAmount;
    }
    reddify(accountAmount,index);
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.
  document.getElementById("checkingDeposit").onclick = function(event){
    deposit("checkingAmount",checkingBalanceAmount,checkingBalance,0);
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    deposit("savingsAmount",savingsBalanceAmount,savingsBalance,1);
  };

  function withdraw(accountAmount,accountBalanceAmount1,accountBalanceAmount2,accountBalance1,accountBalance2,index) {
    var num = document.getElementById(accountAmount).value;
    if (Math.abs(num) <= accountBalanceAmount1) {
      accountBalanceAmount1 -= num*1;
      accountBalance1.innerHTML = "$"+accountBalanceAmount1;
    } else if (Math.abs(num) <= (accountBalanceAmount1+accountBalanceAmount2)) {
      var diff = num*1 - accountBalanceAmount1;
      accountBalanceAmount1 -= (num*1-diff);
      accountBalanceAmount2 -= (diff);
      accountBalance1.innerHTML = "$"+accountBalanceAmount1;
      accountBalance2.innerHTML = "$"+accountBalanceAmount2;
    }
    reddify(accountAmount,index);
  }

  document.getElementById("checkingWithdraw").onclick = function(event){
    withdraw("checkingAmount", checkingBalanceAmount, savingsBalanceAmount, checkingBalance, savingsBalance,0);
  };
  //   var num = document.getElementById("checkingAmount").value;
  //   if (Math.abs(num) <= checkingBalanceAmount) {
  //     checkingBalanceAmount -= num*1;
  //     checkingBalance.innerHTML = "$"+checkingBalanceAmount;
  //   } else if (Math.abs(num) <= (checkingBalanceAmount+savingsBalanceAmount)) {
  //     var diff = num*1 - checkingBalanceAmount;
  //     checkingBalanceAmount -= (num*1-diff);
  //     savingsBalanceAmount -= (diff);
  //     checkingBalance.innerHTML = "$"+checkingBalanceAmount;
  //     savingsBalance.innerHTML = "$"+savingsBalanceAmount;
  //   }
  //   reddify(checkingBalanceAmount,0);
  // };

  document.getElementById("savingsWithdraw").onclick = function(event){
    withdraw("savingsAmount",savingsBalanceAmount,checkingBalanceAmount,savingsBalance,checkingBalance,1);
  };
  //   var num = document.getElementById("savingsAmount").value;
  //   if (Math.abs(num) <= savingsBalanceAmount) {
  //     savingsBalanceAmount -= num*1;
  //     savingsBalance.innerHTML = "$"+savingsBalanceAmount;
  //   } else if (Math.abs(num) <= (savingsBalanceAmount+checkingBalanceAmount)) {
  //     var diff = num*1 - savingsBalanceAmount;
  //     savingsBalanceAmount -= (num*1-diff);
  //     checkingBalanceAmount -= (diff);
  //     savingsBalance.innerHTML = "$"+savingsBalanceAmount;
  //     checkingBalance.innerHTML = "$"+checkingBalanceAmount;
  //   }
  //   reddify(savingsBalanceAmount,1);
  // };

};

