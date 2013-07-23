// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  document.getElementById("checkingDeposit").onclick = function(event){
    var checkingAmount = parseInt(document.getElementById('checkingAmount').value);
    var checkingBalance = document.getElementById('checkingBalance');
    var checkingBalanceInt = checkingBalance.innerText.replace("$","");
    var newBalance = +checkingBalanceInt + +checkingAmount;
    checkingBalance.innerHTML = '$' + newBalance;

    if (checkingBalanceInt === "0") {
      var currentAccount = document.getElementsByClassName('balance')[0];
      currentAccount.style.backgroundColor = "#E3E3E3";
    }
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    var savingsAmount = parseInt(document.getElementById('savingsAmount').value);
    var savingsBalance = document.getElementById('savingsBalance');
    var savingsBalanceInt = savingsBalance.innerText.replace("$","");
    var newBalance = +savingsBalanceInt + +savingsAmount;
    savingsBalance.innerHTML = '$' + newBalance;

    if (savingsBalanceInt === "0") {
      var currentAccount = document.getElementsByClassName('balance')[1];
      currentAccount.style.backgroundColor = "#E3E3E3";
    }
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    var checkingWithdraw = parseInt(document.getElementById('checkingAmount').value);
    var checkingBalance = document.getElementById('checkingBalance');
    var checkingBalanceInt = checkingBalance.innerText.replace("$","");
    if (checkingWithdraw <= checkingBalanceInt) {
      var newBalance = +checkingBalanceInt - +checkingWithdraw;
      checkingBalance.innerHTML = '$' + newBalance;
      if (newBalance === 0) {
        var currentAccount = document.getElementsByClassName('balance')[0];
        currentAccount.style.backgroundColor = "#FE2E2E";
      }
    } else {
      return false;
    }
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    var savingsWithdraw = parseInt(document.getElementById('savingsAmount').value);
    var savingsBalance = document.getElementById('savingsBalance');
    var savingsBalanceInt = savingsBalance.innerText.replace("$","");
    if (savingsWithdraw <= savingsBalanceInt) {
      var newBalance = +savingsBalanceInt - +savingsWithdraw;
      savingsBalance.innerHTML = '$' + newBalance;
      if (newBalance === 0) {
        var currentAccount = document.getElementsByClassName('balance')[1];
        currentAccount.style.backgroundColor = "#FE2E2E";
      }
    } else {
      return false;
    }
  };

};