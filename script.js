// 1. 
$(document).ready(function () {
    console.log("Let's get ready to party with jQuery!");
});

// 2.
$(document).ready(function() {
    $('article img').addClass('image-center');
});

// 3.
$(document).ready(function() {
    $('article p:last').remove();
});

// 4. 
$(document).ready(function() {
    let randomFontSize = Math.floor(Math.random() * 100);
    $('h1').css('font-size', randomFontSize + 'px');
});

// 5.
$(document).ready(function() {
    let newLi = $('<li>').text('New List Item');
    $('ol').append(newLi);
});

// 6.
$(document).ready(function() {
    $('aside').empty();

    let newPara = $('<p>').text('Sorry about that list, it was a bit silly');
    $('aside').append(newPara);
});

// 7. 
$('.form-control').on('keyup blur change', function () {
    let red = $('.form-control').eq(0).val();
    let blue = $('.form-control').eq(1).val();
    let green = $('.form-control').eq(2).val();
    $('body').css('background-color',
        'rgb(' + red + ',' + green + ',' + blue + ')');
});

// 8. 
$('img').on('click', function (img) {
    $(img.target).remove();
});