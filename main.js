/****************
* SLIDER
****************/

// Referenze
var indietro = $('.prev');
var avanti = $('.next');
var btn = $('.nav i');

// Navigazione con il mouse
avanti.click(function() {
    slider('up');
});
indietro.click(function() {
    slider('down');
})

// Navigazione con la tastiera
$(document).keydown(function(e) {
    if (e.keyCode === 39) {
        slider('up');
    } else if (e.keyCode === 37) {
        slider('down');
    }
})

// Bonus
btn.click(function() {
    if ($(this).hasClass('one')) {
        $('.images').find('.active').removeClass('active');
        $('.images img.one').addClass('active');
        $('.nav').find('.active').removeClass('active');
        $('.nav i.one').addClass('active');
    } else if ($(this).hasClass('two')) {
        $('.images').find('.active').removeClass('active');
        $('.images img.two').addClass('active');
        $('.nav').find('.active').removeClass('active');
        $('.nav i.two').addClass('active');
    } else if ($(this).hasClass('three')) {
        $('.images').find('.active').removeClass('active');
        $('.images img.three').addClass('active');
        $('.nav').find('.active').removeClass('active');
        $('.nav i.three').addClass('active');
    } else if ($(this).hasClass('four')) {
        $('.images').find('.active').removeClass('active');
        $('.images img.four').addClass('active');
        $('.nav').find('.active').removeClass('active');
        $('.nav i.four').addClass('active');
    }
})

/****************
* FUNCTION
****************/
function slider(direction) {
    var active = $('.images img.active');
    var circle = $('.nav i.active');
    
    // Reset
    active.removeClass('active');
    circle.removeClass('active');

    // Avanti 
    if (direction === 'up') {
        if (active.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            active.next().addClass('active');
            circle.next().addClass('active');
        }
    }
    // Indietro
    else if (direction === 'down') {
        if (active.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            active.prev().addClass('active');
            circle.prev().addClass('active');
        }
    }
}