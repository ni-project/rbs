
$(document).ready(function() {

    sDetect();

    startBlock();

});

function startBlock() {

    var winX = document.documentElement.clientHeight;

    $('.start-block').css('height', winX + 'px');

}

$(document).on('click', '.go-rate', function() {
    var ratePos = $('#g-price').offset().top - 200;
    $('html, body').animate({ scrollTop : ratePos+'px' }, 1000);
});









function sDetect() {
    $('#sDetect').html(document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight);
}

$(window).resize(function(){

    sDetect();

    /**/

    startBlock();

});
