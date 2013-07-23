// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

// Returns the whole checkingBalance div
var checkingBalance = document.getElementById("checkingBalance");
// Sets initial checkingBalanceAmount
var checkingBalanceAmount = 0;

// Returns the whole savingsBalance div
var savingsBalance = document.getElementById("savingsBalance");
// Sets initial savingsBalanceAmount
var savingsBalanceAmount = 0;

 function reddify(accountAmount, index) { //checking is 0 and savings is 1
    if (accountAmount === 0) {
      document.getElementsByClassName("balance")[index].style.background = "red";
    }
    // unreddify as well
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.
  document.getElementById("checkingDeposit").onclick = function(event){
    var num = document.getElementById("checkingAmount").value;
    if (num >= 0) {
      checkingBalanceAmount += num*1;
      checkingBalance.innerHTML = "$"+checkingBalanceAmount;
    }
    reddify(checkingBalanceAmount,0);
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    var num = document.getElementById("savingsAmount").value;
    if (num >= 0) {
      savingsBalanceAmount += num*1;
      savingsBalance.innerHTML = "$"+savingsBalanceAmount;
    }
    reddify(savingsBalanceAmount,1);
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    var num = document.getElementById("checkingAmount").value;
    if (Math.abs(num) <= checkingBalanceAmount) {
      checkingBalanceAmount -= num*1;
      checkingBalance.innerHTML = "$"+checkingBalanceAmount;
    } else if (Math.abs(num) <= (checkingBalanceAmount+savingsBalanceAmount)) {
      var diff = num*1 - checkingBalanceAmount;
      checkingBalanceAmount -= (num*1-diff);
      savingsBalanceAmount -= (diff);
      checkingBalance.innerHTML = "$"+checkingBalanceAmount;
      savingsBalance.innerHTML = "$"+savingsBalanceAmount;
    }
    reddify(checkingBalanceAmount,0);
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    var num = document.getElementById("savingsAmount").value;
    if (Math.abs(num) <= savingsBalanceAmount) {
      savingsBalanceAmount -= num*1;
      savingsBalance.innerHTML = "$"+savingsBalanceAmount;
    } else if (Math.abs(num) <= (savingsBalanceAmount+checkingBalanceAmount)) {
      var diff = num*1 - savingsBalanceAmount;
      savingsBalanceAmount -= (num*1-diff);
      checkingBalanceAmount -= (diff);
      savingsBalance.innerHTML = "$"+savingsBalanceAmount;
      checkingBalance.innerHTML = "$"+checkingBalanceAmount;
    }
    reddify(savingsBalanceAmount,1);
  };

};

