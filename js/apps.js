//  define three function to check addEventListener of memory, storage, delievery 
// memory function
function memory(memoryItems){
    if(memoryItems == 8){
      const memoryPriceText = document.getElementById('memory-total');
      const memoryPrice = memoryPriceText.innerText = 0;
      return memoryPrice;
    } else if(memoryItems == 16) {
        const memoryPriceText = document.getElementById('memory-total');
        const memoryPrice = memoryPriceText.innerText = 180;
        return memoryPrice;
    }
    
}

//  storage function
function storage(ssdItems){
    if(ssdItems == 256){
        const ssdPricetext = document.getElementById('ssd-total');
       const ssdPrice = ssdPricetext.innerText = 0;
       return ssdPrice;
    }
    else if(ssdItems == 512){
        const ssdPriceText = document.getElementById('ssd-total');
        const ssdPrice = ssdPriceText.innerText = 100;
        return ssdPrice;
    }
    else if(ssdItems == 1){
        const ssdPriceText = document.getElementById('ssd-total');
        const ssdPrice = ssdPriceText.innerText = 180;
        return ssdPrice;
    }
    
}
//  delivery function
function delivery(deliveryCost){
    if(deliveryCost == 0){
        const deliverytext = document.getElementById('delivery-total');
        const deliveryPrice = deliverytext.innerText = 0;
        return deliveryPrice;
    } else if(deliveryCost == 20){
        const deliveryText = document.getElementById('delivery-total');
       const deliveryPrice = deliveryText.innerText = 20;
       return deliveryPrice;

    }
}



/* After getting return from the function (memory/storage/delievery) and then pass this value to addCalculation() for finding out the total sum */
function addCalculation( productId, x){
    //  debugger;
    const totalOfferText = document.getElementById('total-offer');
    const previousTotalText = document.getElementById('price-total');
    const previousTotal = parseInt(previousTotalText.innerText);
// globally taking innerText value 
        const memory = document.getElementById('memory-total').innerText;
        const memoryValue = parseInt(memory);
        const ssd = document.getElementById('ssd-total').innerText;
        const ssdValue = parseInt(ssd);
        const delivery = document.getElementById('delivery-total').innerText;
        const deliveryValue = parseInt(delivery);
// condition wise calculating and passing the value 
        if(productId == 'memory-free-cost'){
            const memory = x;
            const total = memory + ssdValue +  deliveryValue + 1299;
            previousTotalText.innerText = total;
            
            totalOfferText.innerText = total;
            return total;
        } 
        if(productId == 'memory-180-cost'){
            const memory = x;
            const total = memory + ssdValue +  deliveryValue + 1299;
            previousTotalText.innerText = total;
            
            totalOfferText.innerText = total;
            return total;
        } 
// this for ssd
        if(productId == 'ssd-free-cost'){
            const ssd = x;
            const total = memoryValue + ssd +  deliveryValue + 1299;
            previousTotalText.innerText = total;
            
            totalOfferText.innerText = total;
            return total;
        } 
        if(productId == 'ssd-100-cost'){
            const ssd = x;
            const total = memoryValue + ssd +  deliveryValue + 1299;
            previousTotalText.innerText = total;
            
            totalOfferText.innerText = total;
            return total;
        } 
        if(productId == 'ssd-1tb-cost'){
            const ssd = x;
            const total = memoryValue + ssd +  deliveryValue + 1299;
            previousTotalText.innerText = total;
            
            totalOfferText.innerText = total;
            return total;
        } 
// delievery cost
        if(productId == 'delivery-free-cost'){
            const delliveryFee = x;
            const total = memoryValue + ssdValue + delliveryFee + 1299;
            previousTotalText.innerText = total;
            
            totalOfferText.innerText = total;
            return total;
        } 
        if(productId == 'delivery-20-cost'){
            const delliveryFee = x;
            const total = memoryValue + ssdValue + delliveryFee + 1299;
            previousTotalText.innerText = total;
            
            totalOfferText.innerText = total;
            return total;
        } 

}


// memory buttons
document.getElementById('memory-free-cost').addEventListener('click', function(){
    const memory8GB = memory(8); 
    addCalculation('memory-free-cost', memory8GB); 
});
document.getElementById('memory-180-cost').addEventListener('click', function(){
    const memory16GB = memory(16);
    addCalculation('memory-180-cost', memory16GB); 
});

// SSD bottons 
 document.getElementById('ssd-free-cost').addEventListener('click', function(){
     const ssd256GB = storage(256);
     addCalculation('ssd-free-cost', ssd256GB);
 });
 document.getElementById('ssd-100-cost').addEventListener('click', function(){
     const ssd512BG = storage(512);
     addCalculation('ssd-100-cost', ssd512BG)
 });
 document.getElementById('ssd-1tb-cost').addEventListener('click', function(){
     const ssd1TB = storage(1);
     addCalculation('ssd-1tb-cost', ssd1TB);
 });

//  delivery buttons
document.getElementById('delivery-free-cost').addEventListener('click', function(){
    const deliveryFree = delivery(0);
    addCalculation('delivery-free-cost', deliveryFree);
});
document.getElementById('delivery-20-cost').addEventListener('click', function(){
    const deliveryCost20 = delivery(20);
    addCalculation('delivery-20-cost', deliveryCost20);
});

// promo code apply
document.getElementById('promo-button').addEventListener('click', function(){
   
    const promoInput = document.getElementById('promo-code');
    const promoCode = promoInput.value.toLowerCase();
    if(promoCode == 'stevekaku'){
         debugger;
        const amountText = document.getElementById('total-offer');
        const amount = parseInt(amountText.innerText);
        const offer = amount * 0.2;
        const finalAmount = amount - offer;
        amountText.innerText = finalAmount;
    }
    // clear input stevekaku
    promoInput.value = '';
   

});


