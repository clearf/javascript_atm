// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

// Returns the whole checkingBalance div
var checkingBalance = document.getElementById("checkingBalance");
// Sets initial checkingBalanceAmount
var checkingBalanceAmount = 0;

// Returns the whole savingsBalance div
var savingsBalance = document.getElementById("savingsBalance");
// Sets initial savingsBalanceAmount
var savingsBalanceAmount = 0;

window.onload = function(){

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  document.getElementById("checkingDeposit").onclick = function(event){
    var num = document.getElementById("checkingAmount").value;
    checkingBalanceAmount += num*1;
    checkingBalance.innerHTML = "$"+checkingBalanceAmount;
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    var num = document.getElementById("savingsAmount").value;
    savingsBalanceAmount += num*1;
    savingsBalance.innerHTML = "$"+savingsBalanceAmount;
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    var num = document.getElementById("checkingAmount").value;
    checkingBalanceAmount -= num*1;
    checkingBalance.innerHTML = "$"+checkingBalanceAmount;
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    var num = document.getElementById("savingsAmount").value;
    savingsBalanceAmount -= num*1;
    savingsBalance.innerHTML = "$"+savingsBalanceAmount;
  };

};



// function catWalk() {
//   img.style.left = catPosition + "px";
//   catPosition += 10;
// }

