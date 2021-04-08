/****************
* SLIDER
****************/

// Referenze
var indietro = $('.prev');
var avanti = $('.next');

// Navigazione con il mouse
avanti.click(function() {
    slider('up');
});
indietro.click(function() {
    slider('down');
})

// Navigazione con la tastiera
$(document).keydown(function(e) {
    console.log(e);
    console.log(e.keyCode);

    if (e.keyCode === 39) {
        slider('up');
    } else if (e.keyCode === 37) {
        slider('down');
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