// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function() {

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.
  var checkingBalBox = document.getElementById("checkingBalance");
  var checking = 0;

  var savingsBalBox = document.getElementById("savingsBalance");
  var savings = 0;

  checkingBalBox.style.background = "#f33";
  savingsBalBox.style.background = "#f33";

  document.getElementById("checkingDeposit").onclick = function(event) {
    checking += parseInt(document.getElementById("checkingAmount").value, 10);
    checkingBalBox.innerText = "$" + checking;
    if (checking > 0) {
      checkingBalBox.style.background = "#E3E3E3";
    }
  };

  document.getElementById("savingsDeposit").onclick = function(event) {
    savings += parseInt(document.getElementById("savingsAmount").value, 10);
    savingsBalBox.innerText = "$" + savings;
    if (savings > 0) {
      savingsBalBox.style.background = "#E3E3E3";
    }
  };

  document.getElementById("checkingWithdraw").onclick = function(event) {
    var newAmt = checking - parseInt(document.getElementById("checkingAmount").value, 10);
    if (newAmt < 0) {
      if (newAmt + savings >= 0) {
        checking = 0;
        savings += newAmt;
        savingsBalBox.innerText = "$" + savings;
        if (savings === 0) {
          savingsBalBox.style.background = "#f33";
        }
      }
    }
    else {
      checking = newAmt;
    }
    checkingBalBox.innerText = "$" + checking;
    if (checking === 0) {
      checkingBalBox.style.background = "#f33";
    }
  };

  document.getElementById("savingsWithdraw").onclick = function(event) {
    var newAmt = savings - parseInt(document.getElementById("savingsAmount").value, 10);
    if (newAmt < 0) {
      if (newAmt + checking >= 0) {
        savings = 0;
        checking += newAmt;
        checkingBalBox.innerText = "$" + checking;
        if (checking === 0) {
          checkingBalBox.style.background = "#f33";
        }
      }
    }
    else {
      savings = newAmt;
    }
    savingsBalBox.innerText = "$" + savings;
    if (savings === 0) {
      savingsBalBox.style.background = "#f33";
    }
  };

};

