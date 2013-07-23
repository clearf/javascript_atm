// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM, 
// and all the images and sub-frames have finished loading.

window.onload = function(){
  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.




  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
      var depositAmount = document.getElementById('checkingAmount').value;
      var stringBalance = document.getElementById('checkingBalance').innerText.match(/\d+/)[0];
      var checkingBalance = parseInt(stringBalance) + parseInt(depositAmount);
      document.getElementById('checkingBalance').innerText = "$" + checkingBalance;
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
      var savingsAmount = document.getElementById('savingsAmount').value;
      var stringBalance = document.getElementById('savingsBalance').innerText.match(/\d+/)[0];
      var savingsBalance = parseInt(stringBalance) + parseInt(savingsAmount);
      document.getElementById('savingsBalance').innerText = "$" + savingsBalance;
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
      var withdrawAmount = document.getElementById('checkingAmount').value;
      var stringBalance = document.getElementById('checkingBalance').innerText.match(/\d+/)[0];
      var checkingBalance = parseInt(stringBalance) - parseInt(withdrawAmount);

      if (checkingBalance < 0){

      } else {
          document.getElementById('checkingBalance').innerText = "$" + checkingBalance;
      }


  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
      var withdrawAmount = document.getElementById('savingsAmount').value;
      var stringBalance = document.getElementById('savingsBalance').innerText.match(/\d+/)[0];
      var savingsBalance = parseInt(stringBalance) - parseInt(withdrawAmount);
      if (savingsBalance < 0){

      } else {
          document.getElementById('savingsBalance').innerText = "$" + savingsBalance;
      }
  };

};

