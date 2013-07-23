// returns the total balance of both accounts
function totalBalance() {
  var checkingAmount = parseInt(document.getElementById('checkingBalance').innerText.replace("$",""));
  var savingsAmount = parseInt(document.getElementById('savingsBalance').innerText.replace("$", ""));
  return (checkingAmount + savingsAmount);
}

//deposits into the specified account
function deposit(which) {
    var field = document.getElementById(which+'Amount');
    var account = document.getElementById(which+'Balance');
    var balance = parseInt(document.getElementById(which+'Balance').innerText.replace("$", ""));
    account.innerText = "$" + (balance + parseInt(field.value));
    account.className = " balance";
}

// withdraws from the specificed account
function withdraw(which)  {
    var main = 'checking';
    var other = 'savings';
    if(which === 'savings') {
      main = 'savings';
      other = 'checking';
    }
    var input = document.getElementById(main+'Amount');
    var account = document.getElementById(main+'Balance');
    var balance = parseInt(document.getElementById(main+'Balance').innerText.replace("$", ""));
    var difference = balance - parseInt(input.value)
    if( parseInt(input.value)  > totalBalance()) {
       alert("Sorry, but you don't have enough funds to provide overdraft protection");
    } else if(difference > 0) {
      account.innerText="$"+(balance - Math.abs(difference));
    } else if(difference <= 0) {
      account.innerText = "$" + 0;
      account.className += " zero";
      var otherAccount = document.getElementById(other+"Balance");
      var otherBalance = parseInt(document.getElementById(other+"Balance").innerHTML.replace("$",""));
      otherAccount.innerHTML="$"+(otherBalance - Math.abs(difference));
      if (otherBalance === Math.abs(difference)) {
        otherAccount.className += " zero";
      }
    }
  }

window.onload = function(){

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
