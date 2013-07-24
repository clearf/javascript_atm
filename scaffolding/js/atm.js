// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload
// The load event fires at the end of the document loading process.
// At this point, all of the objects in the document are in the DOM,
// and all the images and sub-frames have finished loading.

window.onload = function(){

  // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onclick
  // The click event is raised when the user clicks on an element.

  document.getElementById("checkingBalance").style.background = "red";
  document.getElementById("savingsBalance").style.background = "red";

  document.getElementById("checkingDeposit").onclick = function(event){
    // Any code you put in here will be run when the checkingDeposit button is clicked
    document.getElementById("checkingBalance").textContent = "$" + (parseInt(document.getElementById("checkingBalance").textContent.slice(1),10) + parseInt(document.getElementById("checkingAmount").value));
    if (document.getElementById("checkingBalance").textContent !== "$0") {
      document.getElementById("checkingBalance").style.background = "#E3E3E3";
    }
  };

  document.getElementById("savingsDeposit").onclick = function(event){
    // Any code you put in here will be run when the savingsDeposit button is clicked
    document.getElementById("savingsBalance").textContent = "$" + (parseInt(document.getElementById("savingsBalance").textContent.slice(1),10) + parseInt(document.getElementById("savingsAmount").value));
    if (document.getElementById("savingsBalance").textContent !== "$0") {
      document.getElementById("savingsBalance").style.background = "#E3E3E3";
    }
  };

  document.getElementById("checkingWithdraw").onclick = function(event){
    // Any code you put in here will be run when the checkingWithdraw button is clicked
    if ((document.getElementById("checkingBalance").textContent.slice(1) - parseInt(document.getElementById("checkingAmount").value)) < 0) {
    } else {
      document.getElementById("checkingBalance").textContent = "$" + (parseInt(document.getElementById("checkingBalance").textContent.slice(1),10) - parseInt(document.getElementById("checkingAmount").value));
    }
    if (document.getElementById("checkingBalance").textContent === "$0") {
      document.getElementById("checkingBalance").style.background = "red";
    }
  };

  document.getElementById("savingsWithdraw").onclick = function(event){
    // Any code you put in here will be run when the savingsWithdraw button is clicked
    if ((document.getElementById("savingsBalance").textContent.slice(1) - parseInt(document.getElementById("savingsAmount").value)) <0){
    } else {
      document.getElementById("savingsBalance").textContent = "$" + (parseInt(document.getElementById("savingsBalance").textContent.slice(1),10) - parseInt(document.getElementById("savingsAmount").value));
    }
    if (document.getElementById("savingsBalance").textContent === "$0") {
      document.getElementById("savingsBalance").style.background = "red";
    }
  };

};

