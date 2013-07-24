// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.


    document.getElementById("checkingBalance").style.background = "red";
    document.getElementById("savingsBalance").style.background = "red";

  // if (document.getElementById('checkingBalance').textContent === "$0"){
  //     document.getElementById("checkingBalance").style.backgroundColor = "red";
  //   } else if (document.getElementById('checkingBalance').textContent !== "$0"){
  //     document.getElementById("checkingBalance").style.backgroundColor = "grey";
  //   };
  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
   var balance = parseInt(document.getElementById('checkingBalance').textContent.match(/\d+/)) + parseInt(document.getElementById('checkingAmount').value);
    document.getElementById("checkingBalance").textContent = '$' + balance;
    if (document.getElementById("checkingBalance").textContent !== '$0') {
      document.getElementById("checkingBalance").style.backgroundColor = "grey";
    }
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    var balance = parseInt(document.getElementById('savingsBalance').textContent.match(/\d+/)) + parseInt(document.getElementById('savingsAmount').value);
    document.getElementById("savingsBalance").textContent = '$' + balance;
    if (document.getElementById("savingsBalance").textContent !== '$0'){
      document.getElementById("savingsBalance").style.backgroundColor = "grey";
    }
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    var balance = parseInt(document.getElementById('checkingBalance').textContent.match(/\d+/))
    if (balance !== 0) {
      var withdrawal = parseInt(document.getElementById('checkingBalance').textContent.match(/\d+/)) - parseInt(document.getElementById('checkingAmount').value);
      document.getElementById("checkingBalance").textContent = '$' + withdrawal;
      document.getElementById("checkingBalance").style.backgroundColor = "grey";
    } else {
      withdrawal === 0;
    }

  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
    var balance = parseInt(document.getElementById('savingsBalance').textContent.match(/\d+/))
    if (balance !== 0) {
      var withdrawal = parseInt(document.getElementById('savingsBalance').textContent.match(/\d+/)) - parseInt(document.getElementById('savingsAmount').value);
      document.getElementById("savingsBalance").textContent = '$' + withdrawal;
      document.getElementById("savingsBalance").style.backgroundColor = "grey";
    } else {
      withdrawal === 0;
    }


  };
};

