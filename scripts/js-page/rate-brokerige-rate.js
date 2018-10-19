
$(document).ready(function() {

    sDetect();

    startBlock();

});

function startBlock() {

    var winX = document.documentElement.clientHeight;

    $('.start-block').css('height', winX + 'px');

    var phonemask = '+7(999)999-99-99';
    $('input[type=tel]').mask(phonemask, {
        completed: function () {
            $(this).parent().removeClass('error');
        }
    });

}

$(document).on('click', '.go-rate', function() {
    var ratePos = $('#g-price').offset().top - 200;
    $('html, body').animate({ scrollTop : ratePos+'px' }, 1000);
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
