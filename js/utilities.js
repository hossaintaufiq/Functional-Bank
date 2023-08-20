function pickTheInput(inputId) {

    const inputSelect =document.getElementById(inputId);
    const valueInString = inputSelect.value;
    const value= parseFloat(valueInString);

    inputSelect.value='';

    return value;

}

function getTextElementById(elementId){
    const elementSelect = document.getElementById(elementId);
    const elementValueString = elementSelect.innerText;
    const elementValue = parseFloat(elementValueString);

    return elementValue;
}

function changingInnerTextById(elementId, value){
    const textElement = document.getElementById(elementId);
     textElement.innerText = value;
}