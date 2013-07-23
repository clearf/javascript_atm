// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.


window.onload = function(){

// var checkingBalance = [];

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    var amount = document.getElementById("checkingAmount").value;
    var balance = +document.getElementById("checkingBalance").innerText.replace("$", "") + +amount;

    checkingBalance.innerHTML = "$" + balance;

  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    var amount = document.getElementById("savingsAmount").value;
    var balance = +document.getElementById("savingsBalance").innerText.replace("$", "") + +amount;

    savingsBalance.innerHTML = "$" + balance;

  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    var amount = document.getElementById("checkingAmount").value;
    var balance = +document.getElementById("checkingBalance").innerText.replace("$", "") - +amount;
    if (amount > (+document.getElementById("checkingBalance").innerText.replace("$", ""))) {
      alert("Insufficient funds");
      } else {
        checkingBalance.innerHTML = "$" + balance;
    }

  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
    var amount = document.getElementById("savingsAmount").value;
    var balance = +document.getElementById("savingsBalance").innerText.replace("$", "") - +amount;
    if (amount > (+document.getElementById("savingsBalance").innerText.replace("$", ""))) {
      alert("Insufficient funds");
      } else {
    savingsBalance.innerHTML = "$" + balance;
    }
  };

};

