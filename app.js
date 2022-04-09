// document.getElementById('m8gb').addEventListener('click',function(){
//     if (this.classList.contains('active')){
//         this.classList.remove('active')
//     }
//     else {
//         this.classList.add('active')
//     }
// })

// ---toggle
function toggleColor(idName){
    document.getElementById(idName).addEventListener('click',function(){
        if (this.classList.contains('active')){
            this.classList.remove('active')
        }
        else {
            this.classList.add('active')
        }


        // ----get the ram amount
            const memory = document.getElementById('m8gb')
            if (memory.classList.contains('active')){
                console.log('m8gb selected')
            }
            else{
                console.log('none')
            }


        
    })
}

toggleColor('m8gb')
toggleColor('m16gb')
toggleColor('s256')
toggleColor('s512')
toggleColor('s1tb')
toggleColor('d25')
toggleColor('d21')


