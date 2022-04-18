$(document).ready(function () {
    $(window).on("scroll touchmove", function () {
        if ($(document).scrollTop() >= $("#cookies").position().top) {
            $('.cookies-img').addClass('reveal')
        } else {
            $('.cookies-img').removeClass('reveal')
        }
    });
});