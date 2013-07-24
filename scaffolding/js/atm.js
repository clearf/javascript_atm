





// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  var checkingBalance = 0;
  var savingsBalance =  0;


  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  document.getElementById("checkingDeposit").onclick = function(event){

    var checkingAmount = parseInt(document.getElementById("checkingAmount").value);
    checkingBalance += checkingAmount;
    document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);

    // Any code you put in here will be run when the checkingDeposit button is clicked
  };

  document.getElementById("savingsDeposit").onclick = function(event){

    var savingsAmount = parseInt(document.getElementById('savingsAmount').value);
    savingsBalance += savingsAmount;
    document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
    // Any code you put in here will be run when the savingsDeposit button is clicked
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    // var savingsWithdraw = parseInt(document.getElementById('savingsAmount').value);
    // if savingsWithdraw > savingsBalance
    // savingsBalance -= savingsWithdraw;
  var checkingAmountValue = parseInt(document.getElementById("checkingAmount").value);
    if (checkingAmountValue <= checkingBalance) {
      checkingBalance -= checkingAmountValue;
      document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);
    } else if (checkingAmountValue <= (checkingBalance + savingsBalance)) {
      savingsBalance = (checkingBalance + savingsBalance) - checkingAmountValue;
      checkingBalance = 0;
      document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);
      document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
    };

  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
       var savingsAmountValue = parseInt(document.getElementById("savingsAmount").value);
    if (savingsAmountValue <= savingsBalance) {
      savingsBalance -= savingsAmountValue;
      document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
    } else if (savingsAmountValue <= (checkingBalance + savingsBalance)) {
      checkingBalance = (checkingBalance + savingsBalance) - savingsAmountValue;
      savingsBalance = 0;
      document.getElementById("checkingBalance").innerText = ("$" + checkingBalance);
      document.getElementById("savingsBalance").innerText = ("$" + savingsBalance);
    };
  };

};

