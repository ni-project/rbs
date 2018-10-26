
<style>
    .top-bar-container { display: none; }
</style>

<div class="full-width payment-bar">
    <a href="/" title="RealEstate Business School" class="p-logo">
        <img src="<? echo $path.'/images/top-bar/logo.png'; ?>" alt="" draggable="false">
    </a>
    <div class="link-back">
        <a href="<? echo $path.'/price/brokerige'; ?>">Вернуться назад</a>
    </div>
    <div class="clearfix"></div>
</div>

<div class="full-width payment-content">

    <div class="max-width max-content">

        <div class="full-width content-cell">

            <div class="full-width rate-title">
                Оплата доступа по тарифу «СТАНДАРТ»
            </div>

            <div class="full-width rate-kurs-name">
                <img src="<? echo $path; ?>/images/payment/sam.png" alt="" draggable="false">
                Курс «PRO Бизнес на аренде»
            </div>

            <div class="full-width rate-srok">
                Сроки проведения: 4 ноября - 30 декабря
            </div>

            <div class="full-width rate-sum">
                <div class="full-width rate-sum-zamorozka">
                    Цена заморожена
                </div>
                Сумма к оплате: 17 000 ₽
            </div>

            <div class="full-width old-price">
                Старая цена : <span>27 000</span> рублей
            </div>

            <div class="full-width payment-btns">

                <div class="pay-button transit-300">Сейчас онлайн</div>

                <div class="pay-button pay-form-score transit-300">Выписать счет</div>

                <div class="pay-button-zamor transit-300">Заморозить цену</div>

            </div>

            <div class="full-width oplata-text">
                Выбрав способ оплаты вы подтверждаете, что ознакомились с условиями <a href="<? echo $path; ?>/legal/1">договора оказания информационно-консультационных услуг</a>
            </div>

        </div>

        <div class="cell-decoration">
            <img src="<? echo $path; ?>/images/payment/payment_img.png" alt="" draggable="false">
        </div>

    </div>

</div>

<div class="full-width snow-block">
    <div class="max-width snow-max">
        <img src="<? echo $path; ?>/images/payment/snow.png" alt="" draggable="false" class="snow-posit-1">
        <img src="<? echo $path; ?>/images/payment/snow.png" alt="" draggable="false" class="snow-posit-2">
        <img src="<? echo $path; ?>/images/payment/snow.png" alt="" draggable="false" class="snow-posit-3">
        <img src="<? echo $path; ?>/images/payment/snow.png" alt="" draggable="false" class="snow-posit-4">
        <img src="<? echo $path; ?>/images/payment/snow.png" alt="" draggable="false" class="snow-posit-5">
    </div>
</div>

<!-- -->

<div class="full-wh pay-form-container transit-600">

    <div class="pay-form-block">
        <div class="pay-form-cell">

            <div class="pay-form-win">

                <img src="<? echo $path; ?>/images/payment/pop-close.png" alt="" draggable="false" class="pay-pop-close">

                <div class="full-width pay-form-title">
                    Оставьте свои контактные данные для выставления счёта
                </div>

                <form class="pop-form-payment" action="<? echo $path; ?>/_includes/events/form_payment.php" method="post">
                    <div class="full-width pay-form-content">
                        <div class="full-width pay-form-item">
                            <input type="text" name="name" placeholder="ФИО" class="full-width pay-in-form">
                        </div>
                        <div class="full-width pay-form-item">
                            <input type="email" name="email" placeholder="Email" class="full-width pay-in-form">
                        </div>
                        <div class="full-width pay-form-item">
                            <input type="tel" name="phone" placeholder="Телефон" class="full-width pay-in-form">
                        </div>
                    </div>

                    <div class="full-width">
                        <button class="pay-pop-button transit-300">Отправить</button>
                    </div>
                </form>

            </div>

        </div>
    </div>

</div>

<div class="ajax-wait transit-300">
    <img src="<? echo $path; ?>/images/preloader.png" alt="" draggable="false">
</div>

<!-- JS PAGE -->

    <!-- js-form -->
    <script src="<? echo $path; ?>/scripts/js-form/jquery.form.min.js"></script>
    <script src="<? echo $path; ?>/scripts/js-form/jquery.maskedinput.js"></script>
    <!--/js-form/-->
<script src="<? echo $path; ?>/scripts/js-page/payment.js"></script>

<!--  amoCRM -->
<script type="text/javascript" id="amo_pixel_identifier_js" async="async" src="https://piper.amocrm.com/pixel/js/identifier/pixel_identifier.js"></script>
<script type="text/javascript">
window.AMOPIXEL_IDENTIFIER_PARAMS = window.AMOPIXEL_IDENTIFIER_PARAMS || {};
window.AMOPIXEL_IDENTIFIER_PARAMS.onload = function (pixel_identifier) {
    var visitor_uid = pixel_identifier.getVisitorUid(); /* Получаем visitor_uid */
    if (visitor_uid) {
        $(document).ready(function(){
            /* Записываем 'visitor_uid' во все формы */
            $('form').each(function(){
                var $elem = $(this).find('input[name=visitor_uid]');
                /* если элемента нет, то добавим в форму скрытое поле */
                if ($elem.length == 0) {
                    $(this).append('<input type="hidden" name="visitor_uid" value="">');
                    $elem = $(this).find('input[name=visitor_uid]');
                }
                /* установим в скрытом поле значение визитера */
                $elem.val(visitor_uid);
            });
        });
    }
};
</script>
