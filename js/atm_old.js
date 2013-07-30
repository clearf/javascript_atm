// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

// window.onload = function(){

  // function checkCurrentBalance() {
  //   var checkingBalance = parseInt(document.getElementById("checkingBalance").innerText.replace("$",""));
  //   var savingsBalance = parseInt(document.getElementById("savingsBalance").innerText.replace("$",""));
  // }

  // document.getElementById("checkingDeposit").onclick = function(event){
    // var checkingAmount = parseInt(document.getElementById('checkingAmount').value);
    // var checkingBalance = document.getElementById('checkingBalance');
    // var checkingBalanceInt = checkingBalance.innerText.replace("$","");
    // var newBalance = +checkingBalanceInt + +checkingAmount;
    // checkingBalance.innerHTML = '$' + newBalance;

    // balanceNotZero(checkingBalance);
    // if (checkingBalanceInt === "0") {
    //   var currentAccount = document.getElementById('checkingBalance');
    //   currentAccount.style.backgroundColor = "#E3E3E3";
    // }
  // };

  // document.getElementById("savingsDeposit").onclick = function(event){
    // var savingsAmount = parseInt(document.getElementById('savingsAmount').value);
    // var savingsBalance = document.getElementById('savingsBalance');
    // var savingsBalanceInt = savingsBalance.innerText.replace("$","");
    // var newBalance = +savingsBalanceInt + +savingsAmount;
    // savingsBalance.innerHTML = '$' + newBalance;

    // if (savingsBalanceInt === "0") {
    //   var currentAccount = document.getElementById('savingsBalance');
    //   currentAccount.style.backgroundColor = "#E3E3E3";
    // }
  // };

  // document.getElementById("checkingWithdraw").onclick = function(event){
  //   var checkingWithdraw = parseInt(document.getElementById('checkingAmount').value);
    // var checkingBalance = document.getElementById('checkingBalance');
    // var checkingBalanceInt = checkingBalance.innerText.replace("$","");
    // var savingsBalance = document.getElementById('savingsBalance');
    // var savingsBalanceInt = savingsBalance.innerText.replace("$","");

    // if (checkingWithdraw <= checkingBalanceInt) {
    //   var newBalance = +checkingBalanceInt - +checkingWithdraw;
    //   checkingBalance.innerHTML = '$' + newBalance;
      // if (newBalance === 0) {
      //   var currentAccount = document.getElementById('checkingBalance');
      //   currentAccount.style.backgroundColor = "#FE2E2E";
      // }
    // } else if (checkingWithdraw <= checkingBalanceInt + savingsBalanceInt) {
    //   var newCheckingBalance =  +checkingBalanceInt - +checkingBalanceInt;
    //   checkingBalance.innerHTML = '$' + newCheckingBalance;
    //   var newSavingsTransaction = +checkingWithdraw - +checkingBalanceInt;
    //   var newSavingsBalance = +savingsBalanceInt - +newSavingsTransaction;
    //   savingsBalance.innerHTML = '$' + newSavingsBalance;
  //   } else {
  //     return false;
  //   }
  // };

  // document.getElementById("savingsWithdraw").onclick = function(event){
    // checkCurrentBalance();
    // var savingsWithdraw = parseInt(document.getElementById("savingsAmount").value);

    // if (savingsWithdraw <= savingsBalance) {
    //   var newBalance = +savingsBalance - +savingsWithdraw;
    //   document.getElementById("savingsBalance").innerHTML = '$' + newBalance;
      // if (newBalance === 0) {
      //   var currentAccount = document.getElementById('savingsBalance');
      //   currentAccount.style.backgroundColor = "#FE2E2E";
      // }
  //   } else if (savingsWithdraw <= checkingBalance + savingsBalance) {
  //     var newSavingsBalance = +savingsBalance - +savingsBalance;
  //     document.getElementById("savingsBalance").innerHTML = '$' + newSavingsBalance;
  //     var newCheckingTransaction = +savingsWithdraw - +savingsBalance;
  //     var newCheckingBalance = +checkingBalance - +newCheckingTransaction;
  //     document.getElementById("checkingBalance").innerHTML = '$' + newCheckingBalance;
  //   } else {
  //     return false;
  //   }
  // };

  // function balanceNotZero(account) {
  //   console.log("whatsup");
  //   if (parseInt(account.innerText.replace("$","")) === 0) {
  //     console.log("hey");
  //     var currentAccount = document.getElementById(account);
  //     currentAccount.style.backgroundColor = "#E3E3E3";
  //   }
  // }
};