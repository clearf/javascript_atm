// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){


//       var amount = parseInt(prompt("choose deposit amount"));
  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.


  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    var newBalance = parseInt(document.getElementById("checkingAmount").value) + parseInt(document.getElementById("checkingBalance").innerText.match(/\d+/)[0]);
    document.getElementById("checkingBalance").innerText = '$' + newBalance;
      if (document.getElementById("checkingBalance").innerText == '$0') {
      document.getElementById("checkingBalance").style.backgroundColor = "red";
      }
      else {
      document.getElementById("checkingBalance").style.backgroundColor = "grey";
    }

  };


  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    var newBalance = parseInt(document.getElementById("savingsAmount").value) + parseInt(document.getElementById("savingsBalance").innerText.match(/\d+/)[0]);
    document.getElementById("savingsBalance").innerText = '$' + newBalance;

      if (document.getElementById("savingsBalance").innerText == '$0') {
      document.getElementById("savingsBalance").style.backgroundColor = "red";
      }
      else {
      document.getElementById("savingsBalance").style.backgroundColor = "grey";
    }

  };


  document.getElementById("checkingWithdraw").onclick = function(event){
    // //This code was running fine  //
    // var balance = document.getElementById("checkingBalance").innerText;
    // if (parseInt(balance.match(/\d+/)[0]) > 0) {
    //     var newBalance = parseInt(balance.match(/\d+/)[0]) - parseInt(document.getElementById("checkingAmount").value);
    //     document.getElementById("checkingBalance").innerText = '$' + newBalance;
    //     }
    //     else
    //     {
    //       "";
    //     }

///////////////////////
//  // This is the overdraft protection code I could not get to run
  var savingsBalance = parseInt(document.getElementById("savingsBalance").innerText.match(/\d+/)[0]);
  var checkingBalance = parseInt(document.getElementById("checkingBalance").innerText.match(/\d+/)[0]);
  var checkingAmount = parseInt(document.getElementById("checkingAmount").value);
  if (checkingAmount < checkingBalance) {
    var checkingBalance = '$' + checkingBalance - checkingAmount;
  }
  else if ((checkingAmount > checkingBalance) && (checkingAmount < (checkingBalance + savingsBalance))) {
    var remainder = checkingAmount - checkingBalance;
    checkingBalance = '$0';
    savingsBalance = savingsBalance - remainder;
  }
  else {
    alert("insufficient balance");
  }

  if (document.getElementById("checkingBalance").innerText == '$0') {
  document.getElementById("checkingBalance").style.backgroundColor = "red";
  }
  else {
  document.getElementById("checkingBalance").style.backgroundColor = "grey";
  }
/////////////////////////////



  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
      if (parseInt(document.getElementById("savingsBalance").innerText.match(/\d+/)[0]) > 0) {
    newBalance = parseInt(document.getElementById("savingsBalance").innerText.match(/\d+/)[0]) - parseInt(document.getElementById("savingsAmount").value);
    document.getElementById("savingsBalance").innerText = '$' + newBalance;
    }
    else
    {
      "";
    }
       if (document.getElementById("savingsBalance").innerText == '$0') {
      document.getElementById("savingsBalance").style.backgroundColor = "red";
      }
      else {
      document.getElementById("savingsBalance").style.backgroundColor = "grey";
    }

  };

};



// var text = document.getElementById("checking");
// text.innerHTML = "hello"
