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


/*=============== HOME SWIPER ===============*/


/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/