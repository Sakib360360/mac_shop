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


    totalPrice.value = totalPriceAmount
    
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

        totalPrice.value = totalPriceAmount
    
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

        totalPrice.value = totalPriceAmount
    
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

        totalPrice.value = totalPriceAmount
    
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

        totalPrice.value = totalPriceAmount
    
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

        totalPrice.value = totalPriceAmount
        
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

        totalPrice.value = totalPriceAmount
    
})


// -------------------adding the price 
const memoryCost = document.getElementById('mPriceField').innerText
const memoryCostAmount = parseFloat(memoryCost)

const storagePrice = document.getElementById('sPriceField').innerText
const storagePriceaAmount = parseFloat(storagePrice)

const deliveryPrice = document.getElementById('deliveryPriceField').innerText
const deliveryPriceAmount = parseFloat(deliveryPrice)

const totalPriceAmount = memoryCostAmount + storagePriceaAmount + deliveryPriceAmount











