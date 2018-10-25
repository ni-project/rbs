<?

function setTitle($name) {

    switch ($name) {

        case 'legal':
            $title = 'Право';
            break;
        case 'price':
            $title = 'Прайс';
            if ( isset($_GET['thankyou']) ) { $title = 'Спасибо'; }
            if ( $_GET['name'] == 'brokerige' ) { $title = 'PRO Бизнес на аренде: ОНЛАНЙ-курс по брокериджу коммерческой недвижимости'; }
            break;
        default:
            $title = 'RBS';
    }

    return $title;

}
