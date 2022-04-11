const m8gb = document.getElementById('m8gb')
const m16gb = document.getElementById('m16gb')
const s256 = document.getElementById('s256')
const s512 = document.getElementById('s512')
const s1tb = document.getElementById('s1tb')
const d25 = document.getElementById('d25')
const d21 = document.getElementById('d21')
const memoryPrice = document.getElementById('mPriceField')
const sdPrice = document.getElementById('sPriceField')
const deliveryPriceField = document.getElementById('deliveryPriceField')
const totalPrice = document.getElementById('totalPrice')
const subTotalPrice = document.getElementById('subTotalPrice')
const promoInput = document.getElementById('promoInput')
const applyBtn = document.getElementById('applyBtn')




m8gb.addEventListener('click',function(){
    // toggle-----------
    
    if (this.classList.contains("active")) {
    this.classList.remove("active");
    } else this.classList.add("active");
    

    if (m8gb.classList.contains('active')){
        memoryPrice.innerText = 199
    }
    else{
        memoryPrice.innerText = 0
    }

    if(m16gb.classList.contains('active')){
        m16gb.classList.remove('active')
    }

    addTotalPrice()
    subTotal()


    // document.getElementById('totalPrice').innerText = totalPriceAmount
    
})





m16gb.addEventListener('click',function(){
    if (this.classList.contains("active")) {
        this.classList.remove("active");
        } else this.classList.add("active");

        if (m16gb.classList.contains('active')){
            memoryPrice.innerText = 250
        }
        else{
            memoryPrice.innerText = 0
        }

        if(m8gb.classList.contains('active')){
            m8gb.classList.remove('active')
        }

        
        addTotalPrice()
        subTotal()
})


s256.addEventListener('click',function(){
    if (this.classList.contains("active")) {
        this.classList.remove("active");
        } else this.classList.add("active");

        if (s256.classList.contains('active')){
            sdPrice.innerText = 499
        }
        else{
            sdPrice.innerText = 0
        }

        if(s512.classList.contains('active')){
            s512.classList.remove('active')
        }else if (s1tb.classList.contains('active')){
            s1tb.classList.remove('active')
        }

        addTotalPrice()
        subTotal()
    
})


s512.addEventListener('click',function(){
    if (this.classList.contains("active")) {
        this.classList.remove("active");
        } else this.classList.add("active");

        if (s512.classList.contains('active')){
            sdPrice.innerText = 756
        }
        else{
            sdPrice.innerText = 0
        }

        if(s256.classList.contains('active')){
            s256.classList.remove('active')
        }else if (s1tb.classList.contains('active')){
            s1tb.classList.remove('active')
        }

        addTotalPrice()
        subTotal()
    
})


s1tb.addEventListener('click',function(){
    if (this.classList.contains("active")) {
        this.classList.remove("active");
        } else this.classList.add("active");

        if (s1tb.classList.contains('active')){
            sdPrice.innerText = 999
        }
        else{
            sdPrice.innerText = 0
        }

        if(s512.classList.contains('active')){
            s512.classList.remove('active')
        }else if (s256.classList.contains('active')){
            s256.classList.remove('active')
        }

        addTotalPrice()
        subTotal()
    
})


d25.addEventListener('click',function(){
    if (this.classList.contains("active")) {
        this.classList.remove("active");
        } else this.classList.add("active");

        if (d25.classList.contains('active')){
            deliveryPriceField.innerText = 0
        }
        else{
            sdPrice.innerText = 0
        }

        if(d21.classList.contains('active')){
            d21.classList.remove('active')
        }

        addTotalPrice()
        subTotal()
        
})

d21.addEventListener('click',function(){
    if (this.classList.contains("active")) {
        this.classList.remove("active");
        } else this.classList.add("active");

        if (d21.classList.contains('active')){
            deliveryPriceField.innerText = 20
        }
        else{
            deliveryPriceField.innerText = 0
        }

        if(d25.classList.contains('active')){
            d25.classList.remove('active')
        }

        addTotalPrice()
        subTotal()
    
})



// -------------------adding the price 
function addTotalPrice(){
    const memoryCost = document.getElementById('mPriceField').innerText
    const memoryCostAmount = parseInt(memoryCost)

    const storagePrice = document.getElementById('sPriceField').innerText
    const storagePriceAmount = parseInt(storagePrice)

    const deliveryPrice = document.getElementById('deliveryPriceField').innerText
    const deliveryPriceAmount = parseInt(deliveryPrice)

    const totalPriceAmount = 1299 + memoryCostAmount + storagePriceAmount + deliveryPriceAmount

    document.getElementById('totalPrice').innerText = totalPriceAmount
}

// -------------------adding the Sub total price 

function subTotal(){
    const totalPrice = document.getElementById('totalPrice').innerText
    
    if(document.getElementById('promoInput').value == 'saad'){
     subTotalPrice.innerText = totalPrice * .1   
    }else if(document.getElementById('promoInput').value == ''){
        subTotalPrice.innerText = totalPrice
    }
    else if(document.getElementById('promoInput').value != 'saad'){
        alert('Promo code is not currect. Please enter the correct promo code to get 10 % off the total price.')
    }
    
    else{
        subTotalPrice.innerText = totalPrice
    }
}


// promo code
// const getPromoValue = document.getElementById('promoInput').value


// apply the promo code
document.getElementById('promoInput').value
applyBtn.addEventListener('click',function(){
    subTotal()
})







