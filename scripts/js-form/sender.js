$(document).ready(function ($) {

    function successMessage($msg) {
        $(".popup-sender").removeClass("popup-visible");
        $msg.addClass("visible");
    }

    $('.form-callback').ajaxForm({
        success: function (html, status, xhr, myForm) {
            var data = $.parseJSON(html);
            $(".item-form").each(function() { $(this).removeClass("error"); });
            if (data.res && data.res == 'errors') {
                for (i in data.errors) {
                    if ($('.' + i + ':visible').length) { $('.' + i + ':visible').parent().addClass('error'); }
                    if ($('label[rel=' + i + ']:visible').length) { $('label[rel=' + i + ']:visible').parent().addClass('error'); }
                    if ($('p[rel=' + i + ']:visible').length) { $('p[rel=' + i + ']:visible').parent().addClass('error'); }
                    else if ($('[name=' + i + ']:visible').length) { $('[name=' + i + ']:visible').parent().addClass('error'); }
                }
            } else if (data.res && data.res == 'ok') {
				yaCounter46882584.reachGoal('APPLICATION');
                successMessage($(".pop-message"));
                myForm.resetForm();
            }
        }
    });

    $('.f-fs-callback').ajaxForm({
        success: function (html, status, xhr, myForm) {
            var data = $.parseJSON(html);
            $(".pop-in-block").each(function() { $(this).removeClass("error"); });
            if (data.res && data.res == 'errors') {
                for (i in data.errors) {
                    if ($('.' + i + ':visible').length) { $('.' + i + ':visible').parent().addClass('error'); }
                    if ($('label[rel=' + i + ']:visible').length) { $('label[rel=' + i + ']:visible').parent().addClass('error'); }
                    if ($('p[rel=' + i + ']:visible').length) { $('p[rel=' + i + ']:visible').parent().addClass('error'); }
                    else if ($('[name=' + i + ']:visible').length) { $('[name=' + i + ']:visible').parent().addClass('error'); }
                }
            } else if (data.res && data.res == 'ok') {
				yaCounter46882584.reachGoal('FSFORM');
                successMessage($(".pop-message"));
                myForm.resetForm();
            }
        }
    });

    $(".view-pop-form").click(function() {
		var dataContent = $(this).data("content");
		$(".in-sender").val(dataContent);
		$(".popup-sender").addClass("popup-visible"); 
	});

    $(".pss-close").click(function() { $(".popup-sender").removeClass("popup-visible"); $(".pop-in-block").each(function() { $(this).removeClass("error"); }); });

    $(".pop-message-button").click(function() { $(".pop-message").removeClass("visible"); });

});