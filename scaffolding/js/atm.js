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
    if (cBalanceValue > 0) {
      cBalance.className = "balance";
    }
    // Any code you put in here will be run when the checkingDeposit button is clicked
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    var increase = parseInt(document.getElementById("savingsAmount").value);
    sBalanceValue += increase;
    sBalance.innerText = "$" + sBalanceValue;
    if (sBalanceValue > 0) {
      sBalance.className = "balance";
    }
    // Any code you put in here will be run when the savingsDeposit button is clicked
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    var decrease = parseInt(document.getElementById("checkingAmount").value);
    cBalanceValue -= decrease;
    cBalance.innerText = "$" + cBalanceValue;
    if (cBalanceValue == 0 && decrease > 0) {
      cBalance.className += " zero";
    }
    // Any code you put in here will be run when the checkingWithdraw button is clicked
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    var decrease = parseInt(document.getElementById("savingsAmount").value);
    sBalanceValue -= decrease;
    sBalance.innerText = "$" + sBalanceValue;
    if (sBalanceValue == 0 && decrease > 0) {
      sBalance.className += " zero";
    }
    // Any code you put in here will be run when the savingsWithdraw button is clicked
  };

};

