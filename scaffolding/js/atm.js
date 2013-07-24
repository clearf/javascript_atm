// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function() {

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  // SETUP
  var checkingBalBox = document.getElementById("checkingBalance");
  var checking = {
    amt: 0
  };

  var savingsBalBox = document.getElementById("savingsBalance");
  var savings = {
    amt: 0
  };

  checkingBalBox.style.background = "#f33";
  savingsBalBox.style.background = "#f33";

  // DEPOSIT FUNCTIONS
  document.getElementById("checkingDeposit").onclick = function(event) {
    checking["amt"] += parseInt(document.getElementById("checkingAmount").value, 10);
    checkingBalBox.innerText = "$" + checking["amt"];
    if (checking["amt"] > 0) {
      checkingBalBox.style.background = "#E3E3E3";
    }
  };

  document.getElementById("savingsDeposit").onclick = function(event) {
    savings["amt"] += parseInt(document.getElementById("savingsAmount").value, 10);
    savingsBalBox.innerText = "$" + savings["amt"];
    if (savings["amt"] > 0) {
      savingsBalBox.style.background = "#E3E3E3";
    }
  };

  // TOP-LEVEL WITHDRAWAL FUNCTIONS
  document.getElementById("checkingWithdraw").onclick = function(event) {
    var withdrawalAmt = parseInt(document.getElementById("checkingAmount").value, 10);
    withdraw(checking, savings, withdrawalAmt);
  };

  document.getElementById("savingsWithdraw").onclick = function(event) {
    var withdrawalAmt = parseInt(document.getElementById("savingsAmount").value, 10);
    withdraw(savings, checking, withdrawalAmt);
  };

  // ACCOUNT-BLIND WITHDRAWAL
  function withdraw(accountToWithdrawFrom, backupAccount, withdrawalAmt) {
    var newAmt = accountToWithdrawFrom["amt"] - withdrawalAmt;
    if (newAmt < 0) {
      if (newAmt + backupAccount["amt"] >= 0) {
        accountToWithdrawFrom["amt"] = 0;
        backupAccount["amt"] += newAmt;
      }
    }
    else {
      accountToWithdrawFrom["amt"] = newAmt;
    }
    resetBoxes();
  }

  // RESET BOXES HELPER METHOD
  // This necessitates some unnecessary instructions for the "advantage"
  // of DRYer code.
  // All in all, I'd favor my less DRY previous commit.
  function resetBoxes() {
    checkingBalBox.innerText = "$" + checking["amt"];
    if (checking["amt"] === 0) {
      checkingBalBox.style.background = "#f33";
    }
    else {
      checkingBalBox.style.background = "#E3E3E3";
    }

    savingsBalBox.innerText = "$" + savings["amt"];
    if (savings["amt"] === 0) {
      savingsBalBox.style.background = "#f33";
    }
    else {
      savingsBalBox.style.background = "#E3E3E3";
    }
  }

};