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

  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    var checkingWithdraw = document.getElementById('checkingAmount').value;
    var checkingBalance = document.getElementById('checkingBalance');
    var newBalance = +checkingBalance.innerText.replace("$","") - +checkingWithdraw;
    checkingBalance.innerHTML = '$' + newBalance;
  };

  document.getElementById("savingsWithdraw").onclick = function(event){

  };

};