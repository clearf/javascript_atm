// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){
  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  var checkingBalance = 0;
  var savingsBalance = 0;

  // To retrieve value in html form:
  // var checkingAmountValue = document.getElementById("checkingAmount").value;
  // var savingsAmountValue = document.getElementById("savingsAmount").value;
  // To Update balance in html file:
  // document.getElementById("checkingBalance").innerText = "$" + 100000000;
  // document.getElementById("savingsBalance").innerText = "$" + 99;

  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    var checkingAmountValue = parseInt(document.getElementById("checkingAmount").value);
    checkingBalance += checkingAmountValue;
    document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    var savingsAmountValue = parseInt(document.getElementById("savingsAmount").value);
    savingsBalance += savingsAmountValue;
    document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    var checkingAmountValue = parseInt(document.getElementById("checkingAmount").value);
    if (checkingAmountValue <= checkingBalance) {
      checkingBalance -= checkingAmountValue;
      document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);
    };
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
    var savingsAmountValue = parseInt(document.getElementById("savingsAmount").value);
    if (savingsAmountValue <= savingsBalance) {
      savingsBalance -= savingsAmountValue;
      document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
    };
  };

};

