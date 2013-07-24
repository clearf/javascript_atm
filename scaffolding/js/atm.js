// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM, 
// and all the images and sub-frames have finished loading.

window.onload = function(){
  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

   //Global variables of the balance elements to use to slightly dry up the code
    var checkingBalance = parseInt(document.getElementById('checkingBalance').innerText.match(/\d+/)[0]);
    var savingsBalance = parseInt(document.getElementById('savingsBalance').innerText.match(/\d+/)[0]);

    //these statements make the bg color red on start since they are $0. Gotta figure out a way to dry it up
    if (checkingBalance === 0){
        document.getElementById('checkingBalance').style.backgroundColor = "red";
    }
    if (savingsBalance === 0){
        document.getElementById('savingsBalance').style.backgroundColor = "red";
    }


    document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
      var depositAmount = parseInt(document.getElementById('checkingAmount').value);
      checkingBalance = checkingBalance + depositAmount;
      document.getElementById('checkingBalance').innerText = "$" + checkingBalance;

        //changes the bg color to grey when money is deposited
        if (checkingBalance > 0){
            document.getElementById('checkingBalance').style.backgroundColor = "#E3E3E3";
        }
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
      var savingsAmount = parseInt(document.getElementById('savingsAmount').value);
      savingsBalance = savingsBalance + savingsAmount;
      document.getElementById('savingsBalance').innerText = "$" + savingsBalance;

      //changes the bg color to grey when money is deposited
      if (savingsBalance > 0){
          document.getElementById('savingsBalance').style.backgroundColor = "#E3E3E3";
      }
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
      var withdrawAmount = parseInt(document.getElementById('checkingAmount').value);
      var startingBalance = parseInt(document.getElementById('checkingBalance').innerText.match(/\d+/)[0]);
      var checkingBalance = startingBalance - withdrawAmount;

      //Stops from withdrawing below zero
      if (checkingBalance < 0){
      } else {
          document.getElementById('checkingBalance').innerText = "$" + checkingBalance;
      }

      //changes bg to red if balance goes to 0
      if (checkingBalance === 0){
          document.getElementById('checkingBalance').style.backgroundColor = "red";
      }


  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
      var withdrawAmount = document.getElementById('savingsAmount').value;
      var startingBalance = document.getElementById('savingsBalance').innerText.match(/\d+/)[0];
      var savingsBalance = parseInt(startingBalance) - parseInt(withdrawAmount);

      //Stops from withdrawing below zero
      if (savingsBalance < 0){
      } else {
          document.getElementById('savingsBalance').innerText = "$" + savingsBalance;
      }

      //changes bg to red if balance goes to $0
      if (savingsBalance === 0){
          document.getElementById('savingsBalance').style.backgroundColor = "red";
      }
  };
};

