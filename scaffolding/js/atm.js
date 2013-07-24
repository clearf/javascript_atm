





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
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
  };

};

