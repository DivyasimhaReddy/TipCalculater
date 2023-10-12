let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input"

function calculateTip() {
        let billAmountInputValue = billAmountInput.value;
        let percentageTipInputValue =percentageTipInput.value;

    if (billAmountInputValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else if (percentageTipInputValue === "") {
        errorMessageElement.textContent = errorMessage;
    } else {
         errorMessageElement.textContent = "";
         
        let billAmounts = parseInt(billAmountInputValue);
        let percentageTips = parseInt(percentageTipInputValue);
        let calculateTip = (percentageTips/ 100) * billAmounts;
        let calculateTotal = billAmounts + calculateTip;

        tipAmountInput.value = calculateTip;
        totalInput.textContent = calculateTotal;
    }


}