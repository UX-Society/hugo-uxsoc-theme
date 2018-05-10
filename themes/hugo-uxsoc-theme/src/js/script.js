import 'bootstrap'

$(document).ready(function () {
    $(".trigger").on("click", function () {
        $(".trigger").each(function () {
            $(this).toggleClass("on")
        }), $(".menu").fadeToggle(200), $(this).hasClass("on") ? $("body").bind("mousewheel touchmove", function (e) {
            e.preventDefault()
        }) : $("body").unbind("mousewheel touchmove")
    })
})

var lastScrollTop = 0;
$(window).on("scroll", function () {
    var st = $(this).scrollTop();
    st > lastScrollTop ? $(".floating-nav").addClass("is-hidden") : $(window).scrollTop() > 200 ? $(".floating-nav").removeClass("is-hidden") : $(".floating-nav").addClass("is-hidden"), lastScrollTop = st, 0 == $(this).scrollTop() && $(".floating-nav").addClass("is-hidden")
})
