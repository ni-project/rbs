
$(document).ready(function() {

    sDetect();

    startBlock();

});

function startBlock() {

    var winX = document.documentElement.clientWidth;
    var winY = document.documentElement.clientHeight;

    if ( winX > 750 ) { $('.start-block').css('height', winY + 'px'); } else { $('.start-block').css('height', 'auto'); }


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
