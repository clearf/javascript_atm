// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    // the increment
    document.getElementById('checkingBalance').textContent = ($ parseInt(document.getElementById('checkingBalance').textContent.match("[0-9]")) + document.getElementById('checkingAmount').value);
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    var balance = (parseInt(document.getElementById('savingsBalance').textContent[1]);
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    // Cannot go below 0
    while (parseInt(document.getElementById('checkingBalance').textContent[1]);
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
    // Cannot go below 0
    while (document.getElementById('checkingBalance').textContent[1])
  };

};

