window.onload = function(){
    document.getElementById("checkingDeposit").onclick = function(event){
	// Any code you put in here will be run when the checkingDeposit button is clicked
	// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
	// The click event is raised when the user clicks on an element. 

	document.getElementById("checkingDeposit").onclick = function(event){
	  // Any code you put in here will be run when the checkingDeposit button is clicked
	  var depositAmount = parseFloat(document.getElementById('checkingAmount').value);  
	  var checkingBalance = parseFloat(document.getElementById('checkingBalance').innerText.replace('$',''));    
	  // Check to make sure this number is not zero. 
	  if (depositAmount > 0 ){
	      checkingBalance += depositAmount;
	      document.getElementById('checkingBalance').innerText='$' + checkingBalance;
	  }
      };
      
      document.getElementById("savingsDeposit").onclick = function(event){
  // Any code you put in here will be run when the savingsDeposit button is clicked
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
  // Any code you put in here will be run when the checkingWithdraw button is clicked
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
  // Any code you put in here will be run when the savingsWithdraw button is clicked
  };

};

