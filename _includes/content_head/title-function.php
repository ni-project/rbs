<?

function setTitle($name) {

    switch ($name) {

        case 'legal':
            $title = 'Право';
            break;
        case 'price':
            $title = 'Прайс';
            break;
        default:
            $title = 'RBS';
    }

    return $title;

}
