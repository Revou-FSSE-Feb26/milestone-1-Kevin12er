let backTop = document.getElementById("btn-top");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backTop.style.display = "block";
    } else {
        backTop.style.display = "none";
    }
};


backTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});