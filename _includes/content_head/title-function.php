<?

function setTitle($name) {

    switch ($name) {

        case 'legal':
            $title = 'Право';
            break;
        case 'price':
            $title = 'Прайс';
            if ( isset($_GET['thankyou']) ) { $title = 'Спасибо'; }
            if ( $_GET['name'] == 'brokerige' ) { $title = 'PRO Бизнес на аренде: ОНЛАЙН-курс по брокериджу коммерческой недвижимости'; }
            if ( $_GET['name'] == 'brokerigerate' ) { $title = 'PRO Бизнес на аренде: ОНЛАЙН-курс по брокериджу коммерческой недвижимости'; }
            break;
        default:
            $title = 'RBS';
    }

    return $title;

}
