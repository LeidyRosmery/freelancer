

var encabezado=document.getElementsByClassName("header");

var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
encabezado[0].style.height= "70px";
    }
    else{
      if( currentScroll <= 3 ){
        encabezado[0].style.height= "100px";
      }
    }
    lastScrollTop = currentScroll;
}, false);
