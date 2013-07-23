// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  document.getElementById("checkingDeposit").onclick = function(event){
    var checkingAmount = document.getElementById('checkingAmount').value;
    var checkingBalance = document.getElementById('checkingBalance');
    var newBalance = +checkingBalance.innerText.replace("$","") + +checkingAmount; // place plus sign in front to turn it into integer
    checkingBalance.innerHTML = '$' + newBalance;
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    var savingsAmount = document.getElementById('savingsAmount').value;
    var savingsBalance = document.getElementById('savingsBalance');
    var newBalance = +savingsBalance.innerText.replace("$","") + +savingsAmount;
    savingsBalance.innerHTML = '$' + newBalance;
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    var checkingWithdraw = parseInt(document.getElementById('checkingAmount').value);
    var checkingBalance = document.getElementById('checkingBalance');
    var checkingBalanceInt = checkingBalance.innerText.replace("$","");
    if (checkingWithdraw <= checkingBalanceInt) {
      var newBalance = checkingBalanceInt - checkingWithdraw;
      checkingBalance.innerHTML = '$' + newBalance;
    } else {
      return false;
    }
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    var savingsWithdraw = parseInt(document.getElementById('savingsAmount').value);
    var savingsBalance = document.getElementById('savingsBalance');
    var savingsBalanceInt = savingsBalance.innerText.replace("$","");
    if (savingsWithdraw <= savingsBalanceInt) {
      var newBalance = savingsBalanceInt - savingsWithdraw;
      savingsBalance.innerHTML = '$' + newBalance;
    }
  };

};