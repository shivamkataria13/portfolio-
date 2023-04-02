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





// blurring the bg when nav opens

// const toggleblur=()=>{
//     const blur = document.getElementById('blur')
//     blur.classList.toggle('blurbg')
// }






// sections scroll animation

// const sections = document.querySelectorAll('.sections')

// const observer = new IntersectionObserver(entries=>{
//     entries.forEach(entry=>{
//         entry.target.classList.add('show')
//         // entry.target.classList.add('animate__animated', entry.isIntersecting)
//         // entry.target.classList.add('animate__fadeIn', entry.isIntersecting)
//         // entry.target.classList.add('animate__delay-2s', entry.isIntersecting)
//     })
//     console.log(entries)
// },{
//     threshold:.9,
//     // rootMargin: '-20px',
//     root: document.querySelector('.main'),
// })


// sections.forEach(section=>{
//     observer.observe(section);
// })