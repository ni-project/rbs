
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
    var ratePosM = $('#g-price-m').offset().top - 40;
    var winX = document.documentElement.clientWidth;

    if ( winX < 1100 ) {

        $('html, body').animate({scrollTop: ratePosM + 'px'}, 1000);

    } else {
        $('html, body').animate({scrollTop: ratePos + 'px'}, 1000);
    }
});

$(document).on('click', '.t-go-learn-button', function() {

    var dName = $(this).data('rate');

    $('.data-rate-name').val(dName);

    $('.zap-container').addClass('view');

});
$(document).on('click', '.close-pop', function() { $('.zap-container').removeClass('view'); });

$('.pop-form').ajaxForm({
    success: function (html, status, xhr, myForm) {
        var data = $.parseJSON(html);
        $(".quest-form-item").each(function() { $(this).removeClass("error"); });
        if (data.res && data.res == 'errors') {
            for (i in data.errors) {

                if ($('[name=' + i + ']:visible').length) { $('[name=' + i + ']:visible').parent().addClass('error'); }

            }
        } else if (data.res && data.res == 'ok') {
            myForm.resetForm();

            /*yaCounter50236393.reachGoal('SEND_FORM_OK');*/
            $('.ajax-wait').addClass('start');
            $('.zap-container').removeClass('view');
            setTimeout(function() {
                $('.ajax-wait').removeClass('start');


            }, 2000);

        }
    }
});





function sDetect() {
    $('#sDetect').html(document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight);
}

$(window).resize(function(){

    sDetect();

    /**/

    startBlock();

});
