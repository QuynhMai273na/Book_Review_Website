/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchContent = document.getElementById('search-result'),
      searchClose = document.getElementById('search-close')
      
/* Search show */
/* Validate if constant exist*/
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* Search hidden */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginContent = document.getElementById('login-content'),
      loginchClose = document.getElementById('login-close')
      
/* Login show */
/* Validate if constant exist*/
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/* Login hidden */
if(loginchClose){
    loginchClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}


/*=============== ADD SHADOW HEADER ===============*/
// const shadowHeader = () =>{
//     const header = document.getElementById('header')
//     // Add a class if the bottom offset is greater than 50 of the viewport
//     this.scrollY >= 5 ? header.classList.add('shadow-header') 
//                        : header.classList.remove('shadow-header')
// }
// window.addEventListener('scroll', shadowHeader)
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    // Add a class if the bottom offset is greater than 50 of the viewport
    window.scrollY >= 50 ? header.classList.add('shadow-header') 
                        : header.classList.remove('shadow-header');
  };
  window.addEventListener('scroll', shadowHeader);
/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
  })
/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper('.popular_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
  })

/*=============== RECOMMEND SWIPER ===============*/
let swiperRecommend = new Swiper('.recommend_swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

    breakpoints: {
        1150: {
            slidesPerView: 4,
        }
    }
  })

/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/