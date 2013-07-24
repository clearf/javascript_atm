// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

var checking = 100;
var savings   = 200;

var checking_text = document.getElementById("checkingBalance");
checking_text.innerHTML = checking;

var savings_text = document.getElementById("savingsBalance");
savings_text.innerHTML = savings;

function background_color()  {
  if (checking === 0 && savings === 0) {
    document.getElementById("checkingBalance").style.background = "red";
    document.getElementById("savingsBalance").style.background = "red";
  } else if (savings !== 0 && checking ===0) {
    document.getElementById("savingsBalance").style.background = "grey";
    document.getElementById("checkingBalance").style.background = "red";
  } else if (checking !== 0 && savings !== 0) {
    document.getElementById("checkingBalance").style.background = "grey";
    document.getElementById("savingsBalance").style.background = "grey";
  } else if (savings ===0 && checking !==0) {
    document.getElementById("savingsBalance").style.background = "red";
    document.getElementById("checkingBalance").style.background = "grey";
  }
}

  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    var deposit = parseFloat(document.getElementById('checkingAmount').value);
    checking = deposit += parseFloat(checking);
    var checking_text = document.getElementById("checkingBalance");
    checking_text.innerHTML = parseFloat(checking);

    background_color();
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    var deposit = parseFloat(document.getElementById('savingsAmount').value);
    savings = deposit += parseFloat(savings);
    var savings_text = document.getElementById("savingsBalance");
    savings_text.innerHTML = parseFloat(savings);

    background_color();
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    var withdrawal = parseFloat(document.getElementById('checkingAmount').value);
    if (withdrawal <= checking) {
    checking -= parseFloat(withdrawal);
    checking_text = document.getElementById("checkingBalance");
    checking_text.innerHTML = parseFloat(checking);

    background_color();
    } else if (withdrawal <= (checking + savings)) {
    var difference = parseFloat(withdrawal) - checking;
    savings -= difference;
    checking -= parseFloat(withdrawal) - difference;

    checking_text.innerHTML = parseFloat(checking);
    savings_text.innerHTML = parseFloat(savings);

    background_color();
    }
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
    var withdrawal = parseFloat(document.getElementById('savingsAmount').value);

    if (withdrawal <= savings) {
      savings -= parseFloat(withdrawal);

      savings_text = document.getElementById("savingsBalance");
      savings_text.innerHTML = parseFloat(savings);

      background_color();
    } else if (withdrawal <= (savings+checking)) {
      var difference = parseFloat(withdrawal) - savings;
      checking -= difference;
      savings -= parseFloat(withdrawal) - difference;

      checking_text.innerHTML = parseFloat(checking);
      savings_text.innerHTML = parseFloat(savings);

      background_color();
    }
  };
};