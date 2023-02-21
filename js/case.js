document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateNumberCase('case-number-field', true)

    const totalCasePriceElement = document.getElementById('case-total');
    updateTotalPrice(newCaseNumber, totalCasePriceElement, 59);

    calculateSubTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateNumberCase('case-number-field', false);
    
    const totalCasePriceElement = document.getElementById('case-total');
    updateTotalPrice(newCaseNumber, totalCasePriceElement, 59);

    calculateSubTotal();
})