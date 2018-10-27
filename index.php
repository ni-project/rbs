<?

$path = 'http://'.$_SERVER['SERVER_NAME'];

$page = $_GET['page'];
$content_path = '_includes/content_page_body/';
$content_page = $_GET['name'];
$thank_page = $_GET['thankyou'];

?>

<!DOCTYPE html>
<html lang="ru">
<head>

    <? include '_includes/content_head/head.php'; ?>

</head>

<body>

<!--
<div id="sDetect" style="display: inline-block; /*display: none !important;*/ vertical-align: top; padding: 5px 10px; background: #990000; font-size: 11px; color: #ffffff; position: fixed; right: 0; bottom: 0; z-index: 3000;"></div>
-->

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter50890856 = new Ya.Metrika2({
                    id:50890856,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/tag.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks2");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/50890856" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<header>

    <? include '_includes/content_page_header_footer/header.php'; ?>

</header>

<section>


    <?

    if ( isset($page) ) {

        if ( isset($thank_page) ) {

            $ex_thank = $content_path . $thank_page . '.php';

            if (file_exists($ex_thank)) {

                include $ex_thank;
                /*include $content_path . 'thank-' . $_GET['thankname'] . '.php';*/

            } else {

                include $content_path . '404.php';

            }

        } else {

            $ex_file = $content_path . $content_page . '.php';

            if (file_exists($ex_file)) {

                include $ex_file;

            } else {

                include $content_path . '404.php';

            }

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