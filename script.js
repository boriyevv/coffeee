let burger = document.querySelector('.fa-bars')
let xbtn = document.querySelector('.fa-xmark')

burger.addEventListener('click', ()=>{
    burger.style.display = 'none'
    xbtn.style.display = 'inline-block'
})

xbtn.addEventListener('click', ()=>{
    xbtn.style.display = 'none'
    burger.style.display = 'inline-block'
})