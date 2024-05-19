const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('showTitle');
        } else {
            entry.target.classList.remove('showTitle');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const projectsTitle = document.querySelectorAll('.hiddenTitle');
projectsTitle.forEach((el) => observer2.observe(el));


// const observer2 = new IntersectionObserver((entries) => {
//     entries.forEach((entry) =>{
//         if (entry.isIntersecting) {
//             entry.target.classList.add('showNavbar');
//         } else {
//             entry.target.classList.remove('showNavbar');
//         }
//     });
// })
const sideNav = document.getElementById('sideNav');
const hiddenNavbar = document.querySelectorAll('.hiddenNavbar');

window.addEventListener('scroll', function(event) {
    const scroll = this.scrollY;

    if (scroll > 225) {
        sideNav.classList.remove('hiddenNavbar');
        sideNav.classList.add('showNavbar');
    } else {
        sideNav.classList.add('hiddenNavbar');
        sideNav.classList.remove('showNavbar');
    }
})

const project1 = document.querySelector('#snapshot1');
const PA1 = document.getElementById('projectA1');
const project1Title = document.getElementById('title1');
const projectButtons = document.getElementById('projectButtons');

project1.addEventListener('mouseover', function(event) {
    project1Title.classList.remove('titleHidden');
    project1Title.classList.add('hoverProjectTitle');
    project1.classList.add('hoverProjectTitleExpand');
    projectButtons.classList.add('projectButtonsShow');
})

projectButtons.addEventListener('mouseover', function(event) {
    project1Title.classList.remove('titleHidden');
    project1Title.classList.add('hoverProjectTitle');
    project1.classList.add('hoverProjectTitleExpand');
    projectButtons.classList.add('projectButtonsShow');
})

project1.addEventListener('mouseout', function(event) {
    project1Title.classList.add('titleHidden');
    project1Title.classList.remove('hoverProjectTitle');
    project1.classList.remove('hoverProjectTitleExpand');
    projectButtons.classList.remove('projectButtonsShow');
})

// const contactForm = document.querySelector('.contact-form');
// const email = document.getElementById('message');
// const first = document.getElementById('firstName');
// const last = document.getElementById('lastName');
// const employerEmail = document.getElementById('userEmail');

// contactForm.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     console.log("submit clicked")

//     let formData = {
//         email: email.value,
//         employerEmail: employerEmail.value,
//         first: first.value,
//         last: last.value
//     }

//     let xhr = new XMLHttpRequest();

//     xhr.open('POST', '/');
//     xhr.setRequestHeader('content-type', 'application/json');
    
//     xhr.onload = function() {
//         console.log(xhr.responseText)

//         if(xhr.responseText == 'success') {
//             alert('Email sent');
//             email.value = '';
//             employerEmail.value = '';
//             first.value = '';
//             last.value = '';

//         } else {
//             alert('something went wrong')
//         }
//     }

//     xhr.send(JSON.stringify(formData))
// })

anime({
    targets: '#myName path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 300 },
    direction: 'alternate',
    loop: false
  });

  anime({
    targets: '#outer-ring polygon',
    points: [
        {value: '161 550 , 23 403 , 29 177 , 191 49 , 585 26 , 714 164 , 763 321 , 718 512 , 534 549 , 207 547'},
        {value: '117 549 , 46 385 , 58 183 , 148 25 , 609 28 , 727 112 , 729 316 , 717 559 , 526 576 , 201 571'},
        {value: '120 550 , 53 381 , 48 196 , 138 30 , 579 18 , 735 92 , 749 336 , 727 529 , 586 571 , 221 561'},
      {value: '131 553 , 67 373 , 27 239 , 107 39 , 426 9 , 738 59 , 766 354 , 733 467 , 582 568 , 257 550'},
      {value: '153 526 , 52 408 , 22 197 , 83 54 , 291 5 , 768 75 , 762 313 , 750 493 , 589 552 , 316 509'},
      {value: '143 516 , 42 398 , 32 197 , 73 44 , 341 7 , 758 79 , 772 393 , 740 500 , 559 562 , 320 539'},
      {value: '118 504 , 21 367 , 53 195 , 41 30 , 498 17 , 732 87 , 768 271 , 736 510 , 589 552 , 321 583'},
      {value: '161 550 , 23 403 , 29 177 , 191 49 , 585 26 , 714 164 , 763 321 , 718 512 , 534 549 , 207 547'},
    ],
    easing: 'easeOutQuad',
    duration: 3700,
    loop: true
  });


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 15,
    slidesPerView: 2,
    loop: true,
    freemode: true,
    speed: 1000,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//   const prev = document.querySelector('div.swiper-slide-next');

//   console.log(prev)
//   prev.onclick = () => {

//     if(prev.classList.contains('smallerPro')) {
//         prev.style = 'transform: scale(75%);'
//     }
//   }

// const active = document.querySelector('div.swiper-slide-active').children[0];

// console.log(active)

anime({
    targets: '#bubble-title',
    translateY: 50,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  });