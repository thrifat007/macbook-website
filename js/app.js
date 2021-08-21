// Get the Add Elements
function getTotalValue(elementId){
    let productTotalElement = parseInt(document.getElementById(elementId).innerText);
    return productTotalElement;
}

// Calculating Total Price
function calculateTotal(){
    let totalPrice = getTotalValue('base-price') + getTotalValue('memory-price') + getTotalValue('storage-price') + getTotalValue('delivery-price');

    //console.log('total',totalPrice);

    document.getElementById('sub-total').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;

    return totalPrice;
}

// Input Coupon code
function coupons(){
    let promoCode = document.getElementById('promo-code').value;
    let promoCodeText = promoCode.toLowerCase();

    if(promoCodeText == 'stevekaku'){
        let newPrice = calculateTotal() * 0.2;
        let total = calculateTotal() - newPrice;

        document.getElementById('total').innerText = total.toFixed(2);

        document.getElementById('promo-code').value = '';
        console.log(total.toFixed(2));
    }
    else{
        let warningMsg = document.createElement("p");

        let msg = document.createTextNode("Wrong Coupon");
        warningMsg.appendChild(msg);
        let targetElement = document.getElementById('coupon');
        targetElement.appendChild(msg);
        targetElement.style.color = 'red';

        setTimeout(() => {
            document.getElementById('promo-code').value = '';
            targetElement.removeChild(msg);
            targetElement.style.color = 'black';
        }, 1000);
    }
}


// add promo code
document.getElementById('apply-btn').addEventListener('click', function(){
    coupons();
})



// memory price
document.getElementById('memory-options').addEventListener('click', function (event) {
    const memory = event.target.innerText;

    console.log(event);
    let priceWithMemory = 0;

    if(memory == '8GB Unified Memory'){
        priceWithMemory = 0;


    }
    else if(memory == '16GB Unified Memory'){
        priceWithMemory = 180;

    }

    const memoryPrice = document.getElementById('memory-price');
    memoryPrice.innerText = priceWithMemory;

    calculateTotal();

})


// storage pricing
document.getElementById('storage-options').addEventListener('click', function (event) {
    const storage = event.target.innerText;


    let priceWithStorage = 0;

    if(storage == '1TB SSD Storage'){
        priceWithStorage = 180;

    }
    else if(storage == '512GB SSD Storage'){
        priceWithStorage = 100;

    }
    else if(storage == '256GB SSD Storage'){
        priceWithStorage = 0;
    }

    const memoryPrice = document.getElementById('storage-price');
    memoryPrice.innerText = priceWithStorage;

    calculateTotal();

})

// delivery
document.getElementById('delivery-opitons').addEventListener('click', function(event){
    const delivery = event.target.innerText;

    let deliveryCharge = 0;

    if(delivery == 'Friday, Aug 25 FREE Prime Delivery'){
        deliveryCharge = 0;

    }
    else if(delivery == 'Friday, Aug 21 Delivery Charge $20'){
        deliveryCharge = 20;

    }

    const deliveryPrice = document.getElementById('delivery-price');
    deliveryPrice.innerText = deliveryCharge;

    calculateTotal();

})