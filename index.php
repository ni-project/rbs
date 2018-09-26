<?

$path = 'http://'.$_SERVER['SERVER_NAME'];

$page = $_GET['page'];
$content_path = '_includes/content_page_body/';
$content_page = $_GET['name'];

?>

<!DOCTYPE html>
<html lang="ru">
<head>

    <? include '_includes/content_head/head.php'; ?>

</head>

<body>

<div id="sDetect" style="display: inline-block; /*display: none !important;*/ vertical-align: top; padding: 5px 10px; background: #990000; font-size: 11px; color: #ffffff; position: fixed; right: 0; bottom: 0; z-index: 3000;"></div>

<header>

    <? include '_includes/content_page_header_footer/header.php'; ?>

</header>

<section>


    <?

    if ( isset($page) ) {

        $ex_file = $content_path.$content_page.'.php';

        if ( file_exists($ex_file) ) {

            include $ex_file;

        } else {

            include $content_path.'404.php';

        }

    } else {

        include $content_path.'page-start.php';

    }

    ?>


</section>

<footer>

    <? include '_includes/content_page_header_footer/footer.php'; ?>

</footer>

<script src="<? echo $path; ?>/scripts/bootstrap/bootstrap.js"></script>


</body>
</html>