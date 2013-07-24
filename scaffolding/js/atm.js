// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  document.getElementById("checkingDeposit").onclick = function(event){
     var deposit_amount = document.getElementById("checkingAmount").value;
     var current_balance = document.getElementById("checkingBalance").innerHTML.split("$")[1];
     var total_balance = parseInt(deposit_amount) + parseInt(current_balance);
     document.getElementById("checkingBalance").innerHTML = "$" +total_balance;

  document.getElementById("checkingWithdraw").onclick = function(event){
    var withdraw_amount = document.getElementById("checkingAmount").value;
    var current_balance = document.getElementById("checkingBalance").innerHTML.split("$")[1];
    var total_balance = parseInt(current_balance) - parseInt(withdraw_amount);
    document.getElementById("checkingBalance").innerHTML = "$" +total_balance;
     if (current_balance === 0);
       var current_balance = document.getElementById("checkingBalance");
       current_balance.style.backgroundColor = "red";
     };



    // Any code you put in here will be run when the checkingDeposit button is clicked
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    document.getElementById("savingsBalance").innerHTML = "2000";
    // Any code you put in here will be run when the savingsDeposit button is clicked
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
  };

};

