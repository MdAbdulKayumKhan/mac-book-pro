function addCustom(product){
    if(product == 'memory-cost-free'){
        const price = 0;
        return price;
    } else{
        const price = 180;
        return price;
    }
    
}

function addSum(){
    const memory = addCustom();
    const total = memory + 1299;
    // console.log(total);
    return total;
}


document.getElementById('memory-cost-free').addEventListener('click', function(){
    const memoryPrice =  addCustom('memory-cost-free');
    const memoryText = document.getElementById('memory-price');
    memoryText.innerText = memoryPrice;
    
});
document.getElementById('memory-cost-16GB-180').addEventListener('click', function(){
    const memoryPrice =  addCustom('memory-cost-16GB-180');
    const memoryText = document.getElementById('memory-price');
    memoryText.innerText = memoryPrice;
    const totalSum = addSum();
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalSum;
    document.getElementById('total-offer').innerText = totalSum;
});

document.getElementById('promo-button').addEventListener('click', function(){
    const promoInput = document.getElementById('promo-code');
    const promoCode = promoInput.value.toLowerCase();
    if(promoCode == 'stevekaku'){
        const subTotal = addSum();
        // console.log(discount);
        const discount = subTotal * 0.2;
        const totalBill = subTotal - discount; 
        document.getElementById('total-offer').innerText =totalBill;
        // console.log(totalBill);
    }
    // clear input stevekaku
    promoInput.value = '';
   

})