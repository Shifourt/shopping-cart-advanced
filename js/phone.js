document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updateNumberCase('phone-number-field', true);

    const totalPhonePriceElement = document.getElementById('phone-total');
    updateTotalPrice(newPhoneNumber, totalPhonePriceElement, 1219);

    calculateSubTotal();
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updateNumberCase('phone-number-field', false);

    const totalPhonePriceElement = document.getElementById('phone-total');
    updateTotalPrice(newPhoneNumber, totalPhonePriceElement, 1219);

    calculateSubTotal();
})