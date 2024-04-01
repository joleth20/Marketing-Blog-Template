window.addEventListener('DOMContentLoaded', () => {
    const hamBurger = document.querySelector('.hamburger-container')
  
    hamBurger.addEventListener('click', () => {
       if(hamBurger.className.includes('bars')){
         hamBurger.classList.remove('bars')
         hamBurger.classList.add('close')
       }else{
        hamBurger.classList.remove('close')
        hamBurger.classList.add('bars')
       }
    })


})