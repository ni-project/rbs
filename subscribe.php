<?php

    date_default_timezone_set('Asia/Yekaterinburg');

    $phone = getParam('phone');
    $email = getParam('email');

    if (isset($phone) && empty($phone)) $errors['phone'] = 'Не указан контактный телефон';
    if (isset($phone) && !empty($phone) && !validatePhone($phone)) $errors['phone'] = 'Недопустимый формат телефона';
    if (isset ($email) && empty($email)) $errors['email'] = 'Не указан адрес электронной почты';
    if (isset ($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Адрес электронной почты указан неверно';

    if (!empty($errors)) {
        echo json_encode(array('res'=>'errors', 'errors'=>$errors));
        exit();
    }

    $body = date('d.m.Y')." | ".date('H:i')."<br><br>";

    $body .= "С сайта ".$_SERVER['SERVER_NAME']." была отправлена форма обратной связи."."<br><br>";
	
	$body .= "<b>Место отправления формы: блок Оставьте заявку (подвал сайта)</b><br><br>";

    $body .= "Телефон: ".$phone."<br><br>";

    $body .= "Email: ".$email."<br><br>";

    $body .= "IP адрес: ".$_SERVER['REMOTE_ADDR']."<br><br>";

    $header = "Content-type: text/html; charset=\"utf-8\"\r\n";
    $header .= "From: info@ukmost.com\r\n";

    $email_address = "novoselova@ukmost.com, bush@ukmost.com, erofeeva@ukmost.com, efremov@ukmost.com, marya.most2015@yandex.ru";
	/*$email_address = "mail@mail.ru";*/

    $subject = $_SERVER['SERVER_NAME'] . " 'Перезвоните мне'";

    $a = mail($email_address, $subject, $body, $header);

echo json_encode(array('res'=>$a?'ok':'errors', array('')));

function getParam($name, $def = ''){return isset($_POST[$name]) ? $_POST[$name] : $def;}

function validatePhone($n){return preg_match('/^\+\d\(\d\d\d\)\d\d\d\-\d\d\-\d\d$/', $n);};