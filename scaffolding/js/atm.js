// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  var checkingAmount = document.getElementById("checkingAmount");
  var checkingBalance = document.getElementById("checkingBalance");

  var savingsAmount = document.getElementById("savingsAmount");
  var savingsBalance = document.getElementById("savingsBalance");

  document.getElementById("checkingDeposit").onclick = function(event){
    console.log(event);
    var amountToDeposit = parseFloat(checkingAmount.value, 10);
    var currentBalance = parseFloat(checkingBalance.innerText, 10);
    checkingBalance.innerText = Math.abs(amountToDeposit) + currentBalance;
    // Any code you put in here will be run when the checkingDeposit button is clicked
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    var amountToWithdraw = parseFloat(checkingAmount.value,10);
    var currentBalance = parseFloat(checkingBalance.innerText, 10);

    if (amountToWithdraw > currentBalance){
      alert("You do not sufficient funds for this withdrawal");
    }else{
      checkingBalance.innerText = currentBalance - Math.abs(amountToWithdraw);
    }
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
  };

};

