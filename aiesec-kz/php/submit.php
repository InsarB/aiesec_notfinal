<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Проверяем корректность данных
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Некорректный email.";
        exit;
    }

    // Подготовка письма
    $to = "moldir.tulenbayeva@aiesec.net";
    $subject = "Новое сообщение от $name";
    $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";
    $headers = "From: $email";

    // Отправка письма
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo "Сообщение отправлено успешно.";
    } else {
        http_response_code(500);
        echo "Не удалось отправить сообщение.";
    }
} else {
    http_response_code(405);
    echo "Метод не разрешён.";
}
