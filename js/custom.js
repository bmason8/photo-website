setTimeout(function() {
    $('.welcome-text').fadeOut('slow');
    $('.sub-welcome-text').fadeOut('slow');
}, 2000);

var offset = $('#nav-color-change').offset().top;
var navbar = $('nav');
var navTextColor = $('.nav-items-color')

$(document).scroll(function() {
    position = $(this).scrollTop();
    if (position < offset) {
        navbar.css('background-color', 'rgba(0, 0, 0, 0)');
        navTextColor.css('color', 'white');
    } 
    else {
        navbar.css('background-color', '#fff');
        navTextColor.css('color', 'black');
    }
})