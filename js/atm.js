// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

$(function() {
  // okay, changed
  function checkCurrentBalance() {
    var checkingBalance = parseInt($("#checkingBalance").text());
    var savingsBalance = parseInt($("#savingsBalance").text());
    return checkingBalance + savingsBalance;
  }


  function depositMoney(account, amount) {
    var currentBalance = parseInt($(account).text());
    currentBalance += amount;
    $(account).text(currentBalance);
    accountWarning(account);
  }

  function withdrawMoney(account, amount) {
    var currentBalance = parseInt($(account).text());
    var totalBalance = checkCurrentBalance();
    if (amount <= currentBalance) {
      currentBalance -= amount;
      $(account).text(currentBalance);
      accountWarning(account);
    } else if (amount <= totalBalance) {
      overdraftProtection(account, amount);
    } else {
      console.log("You don't have enough money in total!");
    }
  }

  function accountWarning(account) {
    var checkAccountBalance = parseInt($(account).text());
    if (checkAccountBalance === 0) {
      $(account).parent().css({'background-color': '#FE2E2E'});
    } else {
      $(account).parent().css({'background-color': '#E3E3E3'});
    }
  }

  function overdraftProtection(account, amount) {
    function whichAccount(currentAccount, otherAccount) {
      var currentBalance = parseInt($(currentAccount).text());
      var currentTransaction = currentBalance;
      currentBalance -= currentBalance;
      $(currentAccount).text(currentBalance);
      var crossAccountBalance = parseInt($(otherAccount).text());
      crossAccountBalance -= (amount - currentTransaction);
      $(otherAccount).text(crossAccountBalance);
      accountWarning(currentAccount);
    }

    if (account === "#checkingBalance") {
      whichAccount("#checkingBalance", "#savingsBalance");
    } else if (account === "#savingsBalance") {
      whichAccount("#savingsBalance", "#checkingBalance");
    }
  }

  $("#checkingDeposit").click(function () {
    var checkingAmount = parseInt($("#checkingAmount").val());
    depositMoney("#checkingBalance", checkingAmount);
  });

  $("#savingsDeposit").click(function () {
    var savingsAmount = parseInt($("#savingsAmount").val());
    depositMoney("#savingsBalance", savingsAmount);
  });

  $("#checkingWithdraw").click(function () {
    checkCurrentBalance();
    var checkingAmount = parseInt($("#checkingAmount").val());
    withdrawMoney("#checkingBalance", checkingAmount);
  });

  $("#savingsWithdraw").click(function () {
    checkCurrentBalance();
    var savingsAmount = parseInt($("#savingsAmount").val());
    withdrawMoney("#savingsBalance", savingsAmount);
  });
});