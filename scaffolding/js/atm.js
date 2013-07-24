// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.
var cBalance = 0;
var sBalance = 0;

window.onload = function(){

  var cBalance = document.getElementById("checkingBalance");
  var sBalance = document.getElementById("savingsBalance");
  var cBalanceValue = parseInt(cBalance.innerText.slice(1, 100));
  var sBalanceValue = parseInt(sBalance.innerText.slice(1, 100));

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  document.getElementById("checkingDeposit").onclick = function(event){
    var increase = parseInt(document.getElementById("checkingAmount").value);
    cBalanceValue += increase;
    cBalance.innerText = "$" + cBalanceValue;
    // Any code you put in here will be run when the checkingDeposit button is clicked
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    var increase = parseInt(document.getElementById("savingsAmount").value);
    sBalanceValue += increase;
    sBalance.innerText = "$" + sBalanceValue;
    // Any code you put in here will be run when the savingsDeposit button is clicked
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
  };

};

