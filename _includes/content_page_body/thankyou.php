<?

$thank_name = $_GET['thankname'];

if ( file_exists($content_path.'thank-'.$thank_name.'.php') ) {

    include $content_path.'thank-'.$thank_name.'.php';

} else {

    include $content_path . '404.php';

}
