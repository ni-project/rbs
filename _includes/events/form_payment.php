<?php

date_default_timezone_set('Europe/Moscow');

$name = getParam('name');
$email = getParam('email');
$phone = getParam('phone');
$elem = getParam('visitor_uid');//amoCRM

if (isset($name) && empty($name)) $errors['name'] = 'Не указаны инициалы';
if (isset ($email) && empty($email)) $errors['email'] = 'Не указан адрес электронной почты';
if (isset ($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Адрес электронной почты указан неверно';
if (isset($phone) && empty($phone)) $errors['phone'] = 'Не указан контактный телефон';
if (isset($phone) && !empty($phone) && !validatePhone($phone)) $errors['phone'] = 'Недопустимый формат телефона';

if (!empty($errors)) {
    echo json_encode(array('res'=>'errors', 'errors'=>$errors));
    exit();
}

$body = date('d.m.Y')." | ".date('H:i')."<br><br>";

$body .= "С сайта ".$_SERVER['SERVER_NAME']." отправлена форма - SCORE."."<br><br>";

$body .= "<b>Место отправления формы: при нажатии на кнопку -Выписать счет-</b><br><br>";

$body .= "ФИО: ".$name."<br><br>";

$body .= "Email: ".$email."<br><br>";

$body .= "Телефон: ".$phone."<br><br>";

$header = "Content-type: text/html; charset=\"utf-8\"\r\n";
$header .= "From: sale@rbs-24.ru\r\n";

$email_address = "sale@rbs-24.ru";

$subject = $_SERVER['SERVER_NAME'] . " заявка на выписку счета";

$a = mail($email_address, $subject, $body, $header);

require_once('sendpay.php'); //amoCRM
echo json_encode(array('res'=>$a?'ok':'errors', array('')));

function getParam($name, $def = ''){return isset($_POST[$name]) ? $_POST[$name] : $def;}

function validatePhone($n){return preg_match('/^\+\d\(\d\d\d\)\d\d\d\-\d\d\-\d\d$/', $n);};
