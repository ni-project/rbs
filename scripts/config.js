
$(document).ready(function() {

    sDetect();

    var phonemask = '+7(999)999-99-99';
    $('input[type=tel]').mask(phonemask, {
        completed: function () {
            $(this).parent().removeClass('error');
        }
    });

    vPpreloaderComplete();

    startBlockSize();

    /* ВРЕМЕННАЯ ЗАГЛУШКА ЛОГОТИПОМ */
    $('.tt-preloader-container').addClass('start');
    setTimeout(function() {
        $('.pr-block').css('margin-left', '-80px');
        $('.l-name').addClass('start');
    }, 3200);
    setTimeout(function() {
        $('.l-context').addClass('start');
    }, 4000);
    setTimeout(function() {
        $('.l-dot').addClass('anim');
    }, 4800);
    /*/ВРЕМЕННАЯ ЗАГЛУШКА ЛОГОТИПОМ/*/
});

function vPpreloaderComplete() {
    $('.v-preloader-container').addClass('v-start');
    setTimeout(function() { $('.v-preloader-container').addClass('complete'); }, 1500);
}

function startBlockSize() {
    $('.start-container').css('height', document.documentElement.clientHeight + 'px');
}

function facSetCol() {
    var winX = document.documentElement.clientWidth, setCol = 6;
    if ( winX < 1050 ) { setCol = 5; }
    return setCol;
}

$('.slider-review').flexslider({
    randomize: false,
    animation: "slide",
    slideshow: false,
    animationSpeed: 800,
    slideshowSpeed: 8000,
    animationLoop: true,
    controlNav: true,
    directionNav: true,
    minItems: 1,
    maxItems: 1,
    start: function (slider) {
        $('body').removeClass('loading');
        flexsliderReview = slider;
    }
});

$('.fac-slider').flexslider({
    randomize: false,
    animation: "slide",
    slideshow: true,
    animationSpeed: 800,
    slideshowSpeed: 8000,
    animationLoop: true,
    controlNav: false,
    directionNav: true,
    itemWidth: 180,
    minItems: facSetCol(),
    maxItems: facSetCol(),
    start: function (slider) {
        $('body').removeClass('loading');
        flexsliderFac = slider;
    }
});

$('.choose-fac-slider').flexslider({
    randomize: false,
    animation: "slide",
    slideshow: true,
    animationSpeed: 800,
    slideshowSpeed: 8000,
    animationLoop: true,
    controlNav: false,
    directionNav: true,
    itemWidth: 200,
    minItems: facSetCol(),
    maxItems: facSetCol(),
    start: function (slider) {
        $('body').removeClass('loading');
        flexsliderChFac = slider;
    }
});

$(document).on('click', '.btn-learn', function() {

    $('.btn-learn').each(function() {
        $(this).removeClass('choose');
    });

    $('.learn-block').each(function() {
        $(this).removeClass('choose');
    });

    $('.'+$(this).data('learn-block')).addClass('choose');

    $(this).addClass('choose');

});





function sDetect() {
    $('#sDetect').html(document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight);
}

$(window).scroll(function(){

    var lrnMediaBlockTop = document.getElementById("learn-media-container").getBoundingClientRect().top;

    var lmcItem1 = document.getElementById("lmc-item-1").getBoundingClientRect().top - (Math.round(document.documentElement.clientHeight / 3));
    var lmcItem2 = document.getElementById("lmc-item-2").getBoundingClientRect().top - (Math.round(document.documentElement.clientHeight / 3));
    var lmcItem3 = document.getElementById("lmc-item-3").getBoundingClientRect().top - (Math.round(document.documentElement.clientHeight / 3));
    var lmcItem4 = document.getElementById("lmc-item-4").getBoundingClientRect().top - (Math.round(document.documentElement.clientHeight / 3));
    var lmcItem5 = document.getElementById("lmc-item-5").getBoundingClientRect().top - (Math.round(document.documentElement.clientHeight / 3));
    var lmcItem6 = document.getElementById("lmc-item-6").getBoundingClientRect().top - (Math.round(document.documentElement.clientHeight / 3));
    var lmcItem7 = document.getElementById("lmc-item-7").getBoundingClientRect().top - (Math.round(document.documentElement.clientHeight / 3));

    $('.item-cell-1-left').css('left', -lmcItem1 + 'px'); $('.item-cell-1-right').css('left', lmcItem1 + 'px');
    $('.item-cell-2-left').css('left', -lmcItem2 + 'px'); $('.item-cell-2-right').css('left', lmcItem2 + 'px');
    $('.item-cell-3-left').css('left', -lmcItem3 + 'px'); $('.item-cell-3-right').css('left', lmcItem3 + 'px');
    $('.item-cell-4-left').css('left', -lmcItem4 + 'px'); $('.item-cell-4-right').css('left', lmcItem4 + 'px');
    $('.item-cell-5-left').css('left', -lmcItem5 + 'px'); $('.item-cell-5-right').css('left', lmcItem5 + 'px');
    $('.item-cell-6-left').css('left', -lmcItem6 + 'px'); $('.item-cell-6-right').css('left', lmcItem6 + 'px');
    $('.item-cell-7-left').css('left', -lmcItem7 + 'px'); $('.item-cell-7-right').css('left', lmcItem7 + 'px');

    /**/

    if ( $('.item-cell-1-left').position().left > 0 ) { $('.item-cell-1-left').css('left', '0'); $('.lmc-round-1').addClass('view');
    } else { if ( $('.lmc-round-1').hasClass('view') ) { $('.lmc-round-1').removeClass('view'); }
    }
    if ( $('.item-cell-1-right').position().left < 0 ) { $('.item-cell-1-right').css('left', '0'); }

    /**/

    if ( $('.item-cell-2-left').position().left > 0 ) { $('.item-cell-2-left').css('left', '0'); $('.lmc-round-2').addClass('view');
    } else { if ( $('.lmc-round-2').hasClass('view') ) { $('.lmc-round-2').removeClass('view'); }
    }
    if ( $('.item-cell-2-right').position().left < 0 ) { $('.item-cell-2-right').css('left', '0'); }

    /**/

    if ( $('.item-cell-3-left').position().left > 0 ) { $('.item-cell-3-left').css('left', '0'); $('.lmc-round-3').addClass('view');
    } else { if ( $('.lmc-round-3').hasClass('view') ) { $('.lmc-round-3').removeClass('view'); }
    }
    if ( $('.item-cell-3-right').position().left < 0 ) { $('.item-cell-3-right').css('left', '0'); }

    /**/

    if ( $('.item-cell-4-left').position().left > 0 ) { $('.item-cell-4-left').css('left', '0'); $('.lmc-round-4').addClass('view');
    } else { if ( $('.lmc-round-4').hasClass('view') ) { $('.lmc-round-4').removeClass('view'); }
    }
    if ( $('.item-cell-4-right').position().left < 0 ) { $('.item-cell-4-right').css('left', '0'); }

    /**/

    if ( $('.item-cell-5-left').position().left > 0 ) { $('.item-cell-5-left').css('left', '0'); $('.lmc-round-5').addClass('view');
    } else { if ( $('.lmc-round-5').hasClass('view') ) { $('.lmc-round-5').removeClass('view'); }
    }
    if ( $('.item-cell-5-right').position().left < 0 ) { $('.item-cell-5-right').css('left', '0'); }

    /**/

    if ( $('.item-cell-6-left').position().left > 0 ) { $('.item-cell-6-left').css('left', '0'); $('.lmc-round-6').addClass('view');
    } else { if ( $('.lmc-round-6').hasClass('view') ) { $('.lmc-round-6').removeClass('view'); }
    }
    if ( $('.item-cell-6-right').position().left < 0 ) { $('.item-cell-6-right').css('left', '0'); }

    /**/

    if ( $('.item-cell-7-left').position().left > 0 ) { $('.item-cell-7-left').css('left', '0'); $('.lmc-round-7').addClass('view');
    } else { if ( $('.lmc-round-7').hasClass('view') ) { $('.lmc-round-7').removeClass('view'); }
    }
    if ( $('.item-cell-7-right').position().left < 0 ) { $('.item-cell-7-right').css('left', '0'); }


    if ( $('.item-cell-2-left').position().left > 0 ) { $('.item-cell-2-left').css('left', '0'); $('.lmc-round-2').addClass('view'); } else { if ( $('.lmc-round-2').hasClass('view') ) { $('.lmc-round-2').addClass('hide'); } }
    if ( $('.item-cell-2-right').position().left < 0 ) { $('.item-cell-2-right').css('left', '0'); }

    if ( $('.item-cell-3-left').position().left > 0 ) { $('.item-cell-3-left').css('left', '0'); $('.lmc-round-3').addClass('view'); } else { if ( $('.lmc-round-3').hasClass('view') ) { $('.lmc-round-3').addClass('hide'); } }
    if ( $('.item-cell-3-right').position().left < 0 ) { $('.item-cell-3-right').css('left', '0'); }

    if ( $('.item-cell-4-left').position().left > 0 ) { $('.item-cell-4-left').css('left', '0'); $('.lmc-round-4').addClass('view'); } else { if ( $('.lmc-round-4').hasClass('view') ) { $('.lmc-round-4').addClass('hide'); } }
    if ( $('.item-cell-4-right').position().left < 0 ) { $('.item-cell-4-right').css('left', '0'); }

    if ( $('.item-cell-5-left').position().left > 0 ) { $('.item-cell-5-left').css('left', '0'); $('.lmc-round-5').addClass('view'); } else { if ( $('.lmc-round-5').hasClass('view') ) { $('.lmc-round-5').addClass('hide'); } }
    if ( $('.item-cell-5-right').position().left < 0 ) { $('.item-cell-5-right').css('left', '0'); }

    if ( $('.item-cell-6-left').position().left > 0 ) { $('.item-cell-6-left').css('left', '0'); $('.lmc-round-6').addClass('view'); } else { if ( $('.lmc-round-6').hasClass('view') ) { $('.lmc-round-6').addClass('hide'); } }
    if ( $('.item-cell-6-right').position().left < 0 ) { $('.item-cell-6-right').css('left', '0'); }

    if ( $('.item-cell-7-left').position().left > 0 ) { $('.item-cell-7-left').css('left', '0'); $('.lmc-round-7').addClass('view'); } else { if ( $('.lmc-round-7').hasClass('view') ) { $('.lmc-round-7').addClass('hide'); } }
    if ( $('.item-cell-7-right').position().left < 0 ) { $('.item-cell-7-right').css('left', '0'); }

    if ( lrnMediaBlockTop < 0 ) {
        $('.lmc-title').addClass('start');
        $('.lmc-title-hide').addClass('start');
    } else {
        if ( $('.lmc-title').hasClass('start') ) {
            $('.lmc-title').removeClass('start');
            $('.lmc-title-hide').removeClass('start');
        }
    }

    var popularBlockTop = Math.round(document.getElementById("container-popular-media").getBoundingClientRect().top - 128);

    if ( popularBlockTop < 0 ) {
        $('.lmc-title').addClass('end');
    } else {

        if ( $('.lmc-title').hasClass('end') ) {

            $('.lmc-title').removeClass('end');

        }

    }

    var scrTop = ($(window).scrollTop() - $('#learn-media-container').offset().top - 128) + (document.documentElement.clientHeight / 2);
    var lmcH = $('.lmc-vertical').height();
    $('.lmc-vertical').css('height', scrTop + 'px');
    if ( scrTop > 3140 ) { $('.lmc-vertical').css('height', '3140px'); }

});

$(window).resize(function(){

    sDetect();

    /**/

    startBlockSize();

    var gridSizeTopSlide = 1;
    flexsliderReview.vars.minItems = gridSizeTopSlide;
    flexsliderReview.vars.maxItems = gridSizeTopSlide;
    flexsliderReview.update();
    flexsliderReview.slides.width(flexsliderReview.computedW);
    if(flexsliderReview.last < flexsliderReview.slides.length - 1){
        flexsliderReview.flexAnimate(0);
    }

    var gridSizeFac = facSetCol();
    flexsliderFac.vars.minItems = gridSizeFac;
    flexsliderFac.vars.maxItems = gridSizeFac;
    flexsliderFac.update();
    flexsliderFac.slides.width(flexsliderFac.computedW);
    if(flexsliderFac.last < flexsliderFac.slides.length - 1){
        flexsliderFac.flexAnimate(0);
    }

    var gridSizeChFac = facSetCol();
    flexsliderChFac.vars.minItems = gridSizeChFac;
    flexsliderChFac.vars.maxItems = gridSizeChFac;
    flexsliderChFac.update();
    flexsliderChFac.slides.width(flexsliderChFac.computedW);
    if(flexsliderChFac.last < flexsliderChFac.slides.length - 1){
        flexsliderChFac.flexAnimate(0);
    }


});