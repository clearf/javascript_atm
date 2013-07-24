// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.
var checking = 0;

  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    // getting the value of deposit in an absolute # form.
    var deposit = parseFloat(document.getElementById("checkingAmount").value);
    checking = deposit += parseFloat(checking);
    // making a variable out of the element ID checking balance.
    var checkingBalance = (document.getElementById("checkingBalance"));
    // making the balance above into the 'float' of deposit.
    checkingBalance.innerHTML = parseFloat(checking);
    // how many goddamn SEMICOLONS
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    var deposit = parseFloat(document.getElementById("savingsAmount").value);
    saving = deposit += parseFloat(saving);
    // making a variable out of the element ID checking balance.
    var checkingBalance = (document.getElementById("checkingBalance"));
    // making the balance above into the 'float' of deposit.
    savingsBalance.innerHTML = parseFloat(saving);
    // how many goddamn SEMICOLONS
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    var withdraw = parseFloat(document.getElementById("checkingAmount"));
    if (checking >= withdraw) {
    checking = withdraw -= parseFloat(checking);
    var checkingBalance = (document.getElementById("checkingBalance"));
    //
    checkingBalance.innerHTML = parseFloat(checking);

    } else if (checking <= withdraw) {
      alert("Not Enough Vespene Gas");
    }
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked

  };

};

