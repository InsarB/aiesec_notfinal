// js/script.js

// Функция для отображения всплывающего уведомления
function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.querySelector("p").textContent = message;
    notification.style.display = "block";

    // Автоматическое закрытие через 5 секунд
    setTimeout(() => {
        closeNotification();
    }, 5000);
}

// Функция для закрытия уведомления
function closeNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "none";
}

// Обработчик отправки формы
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Предотвращаем стандартное поведение

    // Собираем данные формы
    const formData = new FormData(this);

    // Отправляем данные через AJAX
    fetch("php/submit.php", {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                showNotification("Ваше сообщение отправлено успешно!");
                this.reset(); // Сбрасываем форму
            } else {
                showNotification("Произошла ошибка. Попробуйте снова.");
            }
        })
        .catch(() => {
            showNotification("Произошла ошибка сети. Попробуйте снова.");
        });
});
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + dots.length) % dots.length;
    updateDots();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateDots();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateDots();
    });
});
