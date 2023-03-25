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

buttontwo.addEventListener('click', ()=>{
    if(!navbar.classList.contains('active')){
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')
    }
})








// blurring the bg when nav opens

const toggleblur=()=>{
    const blur = document.getElementById('blur')
    blur.classList.toggle('blurbg')
}

