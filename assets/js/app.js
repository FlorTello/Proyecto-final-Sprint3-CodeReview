var lastScrollTop = 0;
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
     document.getElementById('nav-header').classList.add('nav-header');
     document.getElementById('nav-header').classList.add('cambiarlogo');
     document.getElementById('nav-header').classList.add('cambiarnav');
      document.getElementById('nav-header').classList.add('mostrarSign-up');

   } else if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("nav-header");
       document.getElementById('nav-header').classList.remove('cambiarlogo');
       document.getElementById('nav-header').classList.remove('cambiarnav');
       document.getElementById('nav-header').classList.remove('mostrarSign-up');

   }
   lastScrollTop = currentScroll;
}, false);
