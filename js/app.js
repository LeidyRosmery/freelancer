var encabezado = document.getElementsByClassName("header");

var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        encabezado[0].style.height = "70px";
    } else {
        if (currentScroll <= 3) {
            encabezado[0].style.height = "100px";
        }
    }
    lastScrollTop = currentScroll;
}, false);

var productos = document.getElementsByClassName("img-product");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
productos[0].addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
});
productos[1].addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
});
productos[2].addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
});
productos[3].addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
});
productos[4].addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
});
productos[5].addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
});
var cerrar = document.getElementById("closeAll");
cerrar.onclick = function() {
    modal.style.display = "none";
}
