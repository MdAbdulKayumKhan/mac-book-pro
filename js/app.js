function addCustom(product, price){
    const productInput = product + '-cost';
    // debugger;
    // console.log(productInput);
    
    // memory costing
    if(productInput == 'memory-free-cost'){
        let memoryTotal = document.getElementById('memory-total');
        memoryTotal.innerText = price;
       
    }
    else if(productInput == 'memory-180-cost'){
        let memoryTotal = document.getElementById('memory-total');
        memoryTotal.innerText = price;
        
    }
    // ssd costing
    else if(productInput == 'ssd-free-cost'){
        let memoryTotal = document.getElementById('ssd-total');
        memoryTotal.innerText = price;
        
    }
    else if(productInput == 'ssd-100-cost'){
        let memoryTotal = document.getElementById('ssd-total');
        memoryTotal.innerText = price;
        
    }
    else if(productInput == 'ssd-1tb-cost'){
        let memoryTotal = document.getElementById('ssd-total');
        memoryTotal.innerText = price;
        
    }

    // delivery costing 
    else if(productInput == 'delivery-free-cost'){
        let memoryTotal = document.getElementById('delivery-total');
        memoryTotal.innerText = price;
        
    }
    else if(productInput == 'delivery-20-cost'){
        let memoryTotal = document.getElementById('delivery-total');
        memoryTotal.innerText = price;
        
    }
    
    return price;
    
}

function addSum(x){
    // debugger;
    const totalOfferText = document.getElementById('total-offer');
    const previousTotalText = document.getElementById('price-total');
    const previousTotal = parseInt(previousTotalText.innerText);
    // console.log(typeof x);
    const total = x + previousTotal;
    previousTotalText.innerText = total;
    
    totalOfferText.innerText = total;
    return total;
}

// Memory click buttons 
document.getElementById('memory-free-cost').addEventListener('click', function(){
  
    const memoryPrice =  addCustom('memory-free', 0);
    if(memoryPrice == 0){
     const result = addSum(memoryPrice);
    }
});

document.getElementById('memory-180-cost').addEventListener('click', function(){
    const memoryPrice =  addCustom('memory-180', 180);
    
        const result = addSum(memoryPrice);

});

// SSD click buttons
document.getElementById('ssd-free-cost').addEventListener('click', function(){
    const memoryPrice =  addCustom('ssd-free', 0);
    
        const result = addSum(memoryPrice);
});
document.getElementById('ssd-100-cost').addEventListener('click', function(){
    const memoryPrice =  addCustom('ssd-100', 100);
    
        const result = addSum(memoryPrice);
});
document.getElementById('ssd-1tb-cost').addEventListener('click', function(){
    const memoryPrice =  addCustom('ssd-1tb', 180);
    
        const result = addSum(memoryPrice);
});

// delivery click buttons 
document.getElementById('delivery-free-cost').addEventListener('click', function(){
    const memoryPrice =  addCustom('delivery-free', 0);
    
        const result = addSum(memoryPrice);
});
document.getElementById('delivery-20-cost').addEventListener('click', function(){
    const memoryPrice =  addCustom('delivery-20', 20);
    
        const result = addSum(memoryPrice);
});

//  promo code apply
document.getElementById('promo-button').addEventListener('click', function(){
    // debugger;
    const promoInput = document.getElementById('promo-code');
    const promoCode = promoInput.value.toLowerCase();
    if(promoCode == 'stevekaku'){
        const subTotal = addSum(0);
        console.log(subTotal);
        const discount = subTotal * 0.2;
        const totalBill = subTotal - discount; 
        document.getElementById('total-offer').innerText =totalBill;
        // console.log(totalBill);
    }
    // clear input stevekaku
    promoInput.value = '';
   

})