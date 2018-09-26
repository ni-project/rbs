
$(document).ready(function() {

    sDetect();

    startBlock();

});

function startBlock() {

    var winX = document.documentElement.clientHeight;

    $('.start-block').css('height', winX + 'px');

}











function sDetect() {
    $('#sDetect').html(document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight);
}

$(window).resize(function(){

    sDetect();

    /**/

    startBlock();

});
