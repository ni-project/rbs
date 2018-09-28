<?

$content_name = $_GET['name'];
$bar_style = 'default';
$bar_logo = $path.'/images/top-bar/logo.png';
if ( $content_name == 'brokerige' ) {
    $bar_style = 'not-bar';
    $bar_logo = $path.'/images/top-bar/logo-white.png';
}

?>

<!-- TOP BAR -->
<div class="full-width top-bar-container <? echo $bar_style; ?>">
    <a href="/" title="RealEstate Business School" class="tb-logo">
        <img src="<? echo $bar_logo; ?>" alt="" draggable="false">
    </a>
    <div class="right-container">
        <div class="tb-item">
            <a href="https://www.ispring.ru/login.html">Войти</a>
        </div>
    </div>
</div>
<!--/TOP BAR/-->
