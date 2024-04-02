window.addEventListener('DOMContentLoaded', () => {
    const hamBurger = document.querySelector('.hamburger-container')
    const menuContainer = document.querySelector('.menu-container')
    const loGos = document.querySelector('.logos')
  
    hamBurger.addEventListener('click', () => {
       if(hamBurger.className.includes('bars')){
         hamBurger.classList.remove('bars')
         hamBurger.classList.add('close')
        
         menuContainer.classList.remove('hide')
         menuContainer.classList.add('show')

         loGos.classList.remove('hide-icon')
         loGos.classList.add('show-icon')


         document.body.style.overflow = 'hidden'


       }else{
        hamBurger.classList.remove('close')
        hamBurger.classList.add('bars')
        
        menuContainer.classList.add('hide')
        menuContainer.classList.remove('show')

        loGos.classList.add('hide-icon')
        loGos.classList.remove('show-icon')

        document.body.style.overflow = 'auto'
       }
    })


    window.addEventListener('resize', () => {
   
      if(window.innerWidth > 360){
        if(menuContainer.className.includes('show')){
           menuContainer.classList.remove('show')
           menuContainer.classList.add('hide')
          
           hamBurger.classList.remove('close')
           hamBurger.classList.add('bars')

           loGos.classList.remove('show-icon')
           loGos.classList.add('hide-icon')

           document.body.style.overflow = 'auto'

        }
      }

    })


})