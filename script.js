// nav button open and close
const buttontwo = document.querySelector(".navBtn")


buttontwo.addEventListener('click', ()=>{
    const isOpened = buttontwo.getAttribute('aria-expanded');
    if(isOpened === "false"){
        buttontwo.setAttribute('aria-expanded', 'true')
    }
    else{
        buttontwo.setAttribute('aria-expanded', 'false')
    }
})


// opening navbar
const navbar = document.querySelector(".navbar")
const main = document.querySelector('.main')

buttontwo.addEventListener('click', ()=>{
    if(!navbar.classList.contains('active')){
        navbar.classList.add('active')
        main.classList.add('blurbg')
    }else{
        navbar.classList.remove('active')
        main.classList.remove('blurbg')
    }
})








// blurring the bg when nav opens

// const toggleblur=()=>{
//     const blur = document.getElementById('blur')
//     blur.classList.toggle('blurbg')
// }

