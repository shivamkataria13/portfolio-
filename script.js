
ScrollOut({
    scrollingElement: ".main",

    threshold: .4
    
  });

  const reload=()=>{
    alert('thankyou for contacting! i\'ll get back to you shortly.')
    location.reload()
  }




// active nav
const sections = document.querySelectorAll('.sections')
const navLi= document.querySelectorAll('nav ul li')

window.addEventListener('scroll', ()=>{
    let currentSection = '';
    
    sections.forEach(section =>{
        const sectionTop = section.getBoundingClientRect();
        console.log(sectionTop)
    })
    
})





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
        
    }else{
        navbar.classList.remove('active')
    }
})


const navLinks = document.querySelectorAll('.links')
console.log(navLinks)
navLinks.forEach((navLink)=>{
    navLink.addEventListener('click', ()=>{
        navbar.classList.remove('active')
    })
})







// Opening Page button
const opBtn = document.querySelector('.opButton')
const header = document.querySelector('.header')
const openingPage = document.querySelector('.openingPage')
const footer = document.querySelector('footer')
const mainPage = document.querySelector('.main')


opBtn.addEventListener('click', ()=>{

    header.classList.remove('hidden')
    footer.classList.remove('hidden')

    mainPage.classList.remove('hidden')

    openingPage.classList.add('hidden')
    openingPage.classList.add('openingPageAnimation')

})








// projects horizontal scroll










