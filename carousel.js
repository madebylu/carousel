$(function(){
    //expects a page element with a class of carousel which contains
    //elements with the slide class which have a fixed and identical height.
    function nextSlide() {
        $(".carousel .slide").eq(activeSlideIndex).css({"opacity": "0"});
        activeSlideIndex = (activeSlideIndex + 1) % numberOfSlides;
        $(".carousel .slide").eq(activeSlideIndex).css({"opacity": "1"});
    }

    var numberOfSlides = $(".carousel .slide").length;
    var activeSlideIndex = 0;
    var carouselHeight = $(".carousel .slide").eq(0).clientHeight;
    var carousel = setInterval(nextSlide, 5000);

    $(".carousel").height(carouselHeight);
    $(".carousel .slide").css({"height": "100%", "transition": "opacity 1000ms linear", "width": "100%"});
    $(".carousel .slide").first().siblings().css({"left": "0", "position": "absolute", "top": "0"});
    $(".carousel .slide").eq(0).siblings().css({"opacity": "0"});
});
