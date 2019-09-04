var nav_offset_top = $('header').height() + 50;

function navbarFixed() {
    console.log(nav_offset_top)
    if ($('.header-area').length) {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('.header-area').addClass('navbar_fixed');
            } else {
                $('.header-area').removeClass('navbar_fixed');
            }
        });
    }
}
navbarFixed();
function scrollTop(){
    $("#project-link").click(function(){
        $('html,body').animate({
            scrollTop: $("#projects").offset().top

        },1000)
    });
}
scrollTop();


function showImages(imgs){
    var expandedImg = document.getElementById("projectPhoto");
    var imagetext = document.getElementById("imageText")
    expandedImg.src = imgs.src;
    imagetext.innerHTML = imgs.alt;
    expandedImg.parentElement.style = "block";

}
