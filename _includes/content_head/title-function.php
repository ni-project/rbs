<?

function setTitle($name) {

    switch ($name) {

        case 'legal':
            $title = 'Право';
            break;
        case 'price':
            $title = 'Прайс';
            if ( isset($_GET['thankyou']) ) { $title = 'Спасибо'; }
            break;
        default:
            $title = 'RBS';
    }

    return $title;

}
