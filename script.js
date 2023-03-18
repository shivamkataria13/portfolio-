const buttontwo = document.querySelector(".button-two")


buttontwo.addEventListener('click', ()=>{
    const isOpened = buttontwo.getAttribute('aria-expanded');
    if(isOpened === "false"){
        buttontwo.setAttribute('aria-expanded', 'true')
    }
    else{
        buttontwo.setAttribute('aria-expanded', 'false')
    }
})



const navbar = document.querySelector(".navbar")

buttontwo.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
})
