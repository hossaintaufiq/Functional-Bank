document.getElementById('button-withdrow').addEventListener('click', function(){
    const withdrowAmount= pickTheInput('withdrow-field');
    const preWithdrowAmount =getTextElementById('withdrow-amount');
    const preTotalAmount =  getTextElementById('total-balance');
    if(isNaN(withdrowAmount)){
        alert('please enter a valid amount');
        return;
    }

    const newWithdrowAmount = withdrowAmount + preWithdrowAmount;

 
    if(withdrowAmount>preTotalAmount){
        alert('Invalid Amount');
        return;
    }
    const newTotalAmount =  preTotalAmount -withdrowAmount ;

    changingInnerTextById('withdrow-amount', newWithdrowAmount);
    changingInnerTextById('total-balance', newTotalAmount);



})