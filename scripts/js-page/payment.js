
$(document).ready(function() {

    var phonemask = '+7(999)999-99-99';
    $('input[type=tel]').mask(phonemask, {
        completed: function () {
            $(this).parent().removeClass('error');
        }
    });

    $('.pop-form-payment').ajaxForm({
        success: function (html, status, xhr, myForm) {
            var data = $.parseJSON(html);
            $(".pay-form-item").each(function() { $(this).removeClass("error"); });
            if (data.res && data.res == 'errors') {
                for (i in data.errors) {
                    if ($('.' + i + ':visible').length) { $('.' + i + ':visible').parent().addClass('error'); }
                    if ($('label[rel=' + i + ']:visible').length) { $('label[rel=' + i + ']:visible').parent().addClass('error'); }
                    if ($('p[rel=' + i + ']:visible').length) { $('p[rel=' + i + ']:visible').parent().addClass('error'); }
                    else if ($('[name=' + i + ']:visible').length) { $('[name=' + i + ']:visible').parent().addClass('error'); }
                }
            } else if (data.res && data.res == 'ok') {
                myForm.resetForm();

                $('.pay-form-container').removeClass('view');

                $('.ajax-wait').addClass('start');
                setTimeout(function() { window.location = "http://rbs-24.ru/price/payment/thankyou/score"; }, 2000);

            }
        }
    });

});

$(document).on('click', '.pay-form-score', function() {
    $('.pay-form-container').addClass('view');
});

$(document).on('click', '.pay-pop-close', function() {
    $('.pay-form-container').removeClass('view');
});
