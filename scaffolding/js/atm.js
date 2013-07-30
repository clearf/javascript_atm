// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

// Returns checkingBalance div and sets initial balance amount
var checkingBalance = $('#checkingBalance')[0];
var checkingBalanceAmount = 0;

// Returns savingsBalance div and sets initial balance amount
var savingsBalance = $('#savingsBalance')[0];
var savingsBalanceAmount = 0;

 function reddify(accountAmount, index) { //checking is 0 and savings is 1
  if (accountAmount === 0) {
    $('.balance')[index].style.background = "red";
  } else {
    $('.balance')[index].style.background = "#E3E3E3";
  }
}

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.
  $('#checkingDeposit')[0].onclick = function(event){
    var num = $('#checkingAmount').val();
    if (num >= 0) {
      checkingBalanceAmount += num*1;
      $('#checkingBalance').text("$"+checkingBalanceAmount);
    }
    reddify(checkingBalanceAmount,0);
  };

  $('#savingsDeposit')[0].onclick = function(event){
    var num = $('#savingsAmount').val();
    if (num >= 0) {
      savingsBalanceAmount += num*1;
      $('#savingsBalance').text("$"+savingsBalanceAmount);
    }
    reddify(savingsBalanceAmount,1);
  };


  $('#checkingWithdraw')[0].onclick = function(event){
    var num = $('#checkingAmount').val();
    if (Math.abs(num) <= checkingBalanceAmount) {
      checkingBalanceAmount -= num*1;
      $('#checkingBalance').text("$"+checkingBalanceAmount);
    } else if (Math.abs(num) <= (checkingBalanceAmount+savingsBalanceAmount)) {
      var diff = num*1 - checkingBalanceAmount;
      checkingBalanceAmount -= (num*1-diff);
      savingsBalanceAmount -= (diff);
      $('#checkingBalance').text("$"+checkingBalanceAmount);
      $('#savingsBalance').text("$"+savingsBalanceAmount);
    }
    reddify(checkingBalanceAmount,0);
  };

  $('#savingsWithdraw')[0].onclick = function(event){
    var num = document.getElementById("savingsAmount").value;
    if (Math.abs(num) <= savingsBalanceAmount) {
      savingsBalanceAmount -= num*1;
      $('#savingsBalance').text("$"+savingsBalanceAmount);
    } else if (Math.abs(num) <= (savingsBalanceAmount+checkingBalanceAmount)) {
      var diff = num*1 - savingsBalanceAmount;
      savingsBalanceAmount -= (num*1-diff);
      checkingBalanceAmount -= (diff);
      $('#savingsBalance').text("$"+savingsBalanceAmount);
      $('#checkingBalance').text("$"+checkingBalanceAmount);
    }
    reddify(savingsBalanceAmount,1);
  };

};
