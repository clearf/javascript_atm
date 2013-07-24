
// returns the total balance of both accounts
function totalBalance() {
    "use strict";
    var checkingAmount = parseFloat(document.getElementById('checkingBalance').innerText.replace("$", ""));
    var savingsAmount = parseFloat(document.getElementById('savingsBalance').innerText.replace("$", ""));
    return (checkingAmount + savingsAmount);
}

//deposits into the specified account
function deposit(which) {
    "use strict";
    var field = document.getElementById(which + 'Amount');
    var account = document.getElementById(which + 'Balance');
    var balance = account.innerText.replace("$", "");
    account.innerText = "$" + (balance + parseFloat(field.value));
    account.className = " balance";
}

// withdraws from the specificed account
function withdraw(which)  {
    "use strict";
    var main = 'checking';
    var other = 'savings';
    if(which === 'savings') {
      main = 'savings';
      other = 'checking';
    }
    var input = document.getElementById(main+'Amount');
    var account = document.getElementById(main+'Balance');
    var balance = parseFloat(document.getElementById(main+'Balance').innerText.replace("$", ""));
    var transaction = parseFloat(input.value);
    var difference = balance - transaction;
    if( transaction  > totalBalance() || transaction < 0){
       alert("Sorry, but your request cannot be proccessed");
    } else if(difference > 0) {
      account.innerText="$"+(balance - transaction);
    } else if(difference < 0) {
      var otherAccount = document.getElementById(other+"Balance");
      var otherBalance = parseFloat(document.getElementById(other+"Balance").innerHTML.replace("$",""));
      otherAccount.innerHTML="$"+(otherBalance - Math.abs(difference));
      if (otherBalance === Math.abs(difference)) {
        otherAccount.className += " zero";
      }
    }
    if (transaction >= balance) {
      account.innerText = "$" + 0;
      account.className += " zero";
    }
  }

window.onload = function(){
  "use strict";

  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    deposit('checking');
  };
  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    deposit('savings');
  };
  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    withdraw('checking');
  };
  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
    withdraw('savings');
  };
};
