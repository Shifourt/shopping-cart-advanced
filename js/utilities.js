function updateNumberCase(inputId, isIncrease){
    const numberField = document.getElementById(inputId);
    const numberString = numberField.value;
    const PreviousNumber = parseInt(numberString);
    let newNumber;
    if(isIncrease){
        newNumber = PreviousNumber + 1;
    }else{
        newNumber = PreviousNumber - 1;
    }
    
    numberField.value = newNumber;
    return newNumber;
}

function updateTotalPrice(newCaseNumber, totalPriceElement, price){
    const totalPrice = newCaseNumber * price;
    totalPriceElement.innerText = totalPrice;
}

function getTextElementValueById(elementId){
    const totalPriceElement = document.getElementById(elementId);
    const totalPriceElementValueString = totalPriceElement.innerText;
    const totalPriceElementValue = parseInt(totalPriceElementValueString);
    return totalPriceElementValue;
}

function calculateTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate subTotal
    const totalPhonePriceElementValue = getTextElementValueById('phone-total');
    const totalCasePriceElementValue = getTextElementValueById('case-total');
    const currentSubTotalValue = totalPhonePriceElementValue + totalCasePriceElementValue;
    calculateTextElementValueById('sub-total', currentSubTotalValue);

    // calculate tax
    const taxAmountByFloat = currentSubTotalValue * 0.1;
    const taxAmountByInt = parseInt(taxAmountByFloat);
    calculateTextElementValueById('tax-amount', taxAmountByInt);

    // calculate final total
    const finalAmount = currentSubTotalValue + taxAmountByInt;
    calculateTextElementValueById('final-total', finalAmount);
}