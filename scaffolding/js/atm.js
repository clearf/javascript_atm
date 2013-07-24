// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.


window.onload = function(){

// var checkingBalance = [];

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

var checking = 0;
var savings = 0;

var checking_balance = +document.getElementById("checkingBalance").innerText.replace("$", "");

var savings_balance = +document.getElementById("savingsBalance").innerText.replace("$", "");



  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
      var deposit = parseFloat(document.getElementById('checkingAmount').value);
      checking = deposit += parseFloat(checking);
      var checking_balance = document.getElementById("checkingBalance");
     checking_balance.innerHTML = parseFloat(checking);

  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
      var deposit = parseFloat(document.getElementById('savingsAmount').value);
      savings = deposit += parseFloat(savings);
      var savings_balance = document.getElementById("savingsBalance");
     savings_balance.innerHTML = parseFloat(savings);

  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
      var withdraw = parseFloat(document.getElementById('checkingAmount').value);

      if ((withdraw > checking) && (withdraw < checking + savings)) {
           alert("overdraft protection");
          } else if (withdraw > checking) {
           alert("insufficient funds");
            } else {
            checking = Math.abs(withdraw - parseFloat(checking));
            var checking_text = document.getElementById("checkingBalance");
            checking_text.innerHTML = parseFloat(checking);
    }
   };

  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
      var withdraw = parseFloat(document.getElementById('savingsAmount').value);
      savings = parseFloat(savings) - withdraw;
      var savings_balance = document.getElementById("savingsBalance");
     savings_balance.innerHTML = parseFloat(savings);

};

