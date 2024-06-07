document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() { stickyHeader() };

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
        header.style.backgroundColor = "rgba(35, 33, 33, 0.9)"; 
    } else {
        header.classList.remove("fixed");
        header.style.backgroundColor = "rgba(35, 33, 33,)"; 
    }
}

    window.onscroll = function() {
        stickyHeader();
    };
});
