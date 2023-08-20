document.getElementById("button-deposit").addEventListener("click", function(){
    // deposit part 
    const depositAmount= pickTheInput('deposit-field');
    const preDepositAmount= getTextElementById('deposit-amount');
    const newDepositAmount = depositAmount + preDepositAmount;
    changingInnerTextById('deposit-amount', newDepositAmount);
   
    // total part 

    const preTotalAmount= getTextElementById('total-balance');
    const newTotalAmount = preTotalAmount+depositAmount;
    changingInnerTextById('total-balance', newTotalAmount);
})
