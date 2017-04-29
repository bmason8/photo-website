$( document ).ready(function(){$(".button-collapse").sideNav();
})

// Delay the header text from showing on page load.
setTimeout(function() {
    $('.welcome-text').fadeOut('slow');
    $('.sub-welcome-text').fadeOut('slow');
}, 1700);

// calculate scroll position for changing header colour.
var offset = $('#nav-color-change').offset().top;
var navbar = $('nav');
var navTextColor = $('.nav-items-color');
var hamburgerIcon = $('.material-icons');

$(document).scroll(function() {
    position = $(this).scrollTop();
    if (position < offset) {
        navbar.css('background-color', 'rgba(0, 0, 0, 0)');
        navTextColor.css('color', 'white');
        hamburgerIcon.css('color', 'white');
    } 
    else {
        navbar.css('background-color', '#fff');
        navTextColor.css('color', 'black');
        hamburgerIcon.css('color', 'black');
    }
})

// calculate the scroll position for adding shake animation on footer image.

var offset2 = ($('.bounceTrigger').offset().top + -500);
var circleImage = $('.animateTest');

$(document).scroll(function() {
    position2 = $(this).scrollTop();
    if (position2 >= offset2) {
        circleImage.addClass('animated bounce');
    } 
    else {
        circleImage.removeClass('animated bounce');
    }
})


//$('.button-collapse').sideNav({
//      menuWidth: 180, // Default is 240
//    }
//  );




// disables right click on images.
//$('img').bind('contextmenu', function(e) {
//    return false;
//}); 