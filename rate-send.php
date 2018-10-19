<?php

date_default_timezone_set('Asia/Yekaterinburg');

$name = getParam('p-name');
$phone = getParam('p-phone');
$email = getParam('p-email');

if (isset($name) && empty($name)) $errors['p-name'] = 'Не указан фио';
if (isset($phone) && empty($phone)) $errors['p-phone'] = 'Не указан контактный телефон';
if (isset($phone) && !empty($phone) && !validatePhone($phone)) $errors['p-phone'] = 'Недопустимый формат телефона';
if (isset ($email) && empty($email)) $errors['p-email'] = 'Не указан адрес электронной почты';
if (isset ($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['p-email'] = 'Адрес электронной почты указан неверно';

if (!empty($errors)) {
    echo json_encode(array('res'=>'errors', 'errors'=>$errors));
    exit();
}

$body = date('d.m.Y')." | ".date('H:i')."<br><br>";

$body .= "С сайта ".$_SERVER['SERVER_NAME']." отправлена форма."."<br><br>";

$body .= "<b>Место отправления формы: страница тарифов brokerigerate</b><br><br>";

$body .= "ФИО: ".$name."<br><br>";

$body .= "Email: ".$email."<br><br>";

$body .= "Телефон: ".$phone."<br><br>";

$header = "Content-type: text/html; charset=\"utf-8\"\r\n";
$header .= "From: sale@rbs-24.ru\r\n";

$email_address = "sale@rbs-24.ru";

$subject = $_SERVER['SERVER_NAME'] . " Заявка с тарифов";

$a = mail($email_address, $subject, $body, $header);

echo json_encode(array('res'=>$a?'ok':'errors', array('')));

function getParam($name, $def = ''){return isset($_POST[$name]) ? $_POST[$name] : $def;}

function validatePhone($n){return preg_match('/^\+\d\(\d\d\d\)\d\d\d\-\d\d\-\d\d$/', $n);};