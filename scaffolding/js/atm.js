// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

var checking = 0;
var savings   = 0;

var checking_text = document.getElementById("checkingBalance");
checking_text.innerHTML = checking;

var savings_text = document.getElementById("savingsBalance");
savings_text.innerHTML = savings;

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    var deposit = parseFloat(document.getElementById('checkingAmount').value);
    checking = deposit += parseFloat(checking);
    var checking_text = document.getElementById("checkingBalance");
    checking_text.innerHTML = parseFloat(checking);
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    var deposit = parseFloat(document.getElementById('savingsAmount').value);
    savings = deposit += parseFloat(savings);
    var savings_text = document.getElementById("savingsBalance");
    savings_text.innerHTML = parseFloat(savings);
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    var withdrawal = parseFloat(document.getElementById('checkingAmount').value);
    if (checking < Math.abs(withdrawal - parseFloat(checking))) {
      alert("NOT ENOUGH FUNDS");
    } else {
    checking = Math.abs(withdrawal - parseFloat(checking));
    var checking_text = document.getElementById("checkingBalance");
    checking_text.innerHTML = parseFloat(checking);
    }
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
    var withdrawal = parseFloat(document.getElementById('savingsAmount').value);
    if (savings < Math.abs(withdrawal - parseFloat(savings))) {
      alert("NOT ENOUGH FUNDS");
    } else {
    savings = Math.abs(withdrawal - parseFloat(savings));
    var savings_text = document.getElementById("savingsBalance");
    savings_text.innerHTML = parseFloat(savings);
    }
  };



};

