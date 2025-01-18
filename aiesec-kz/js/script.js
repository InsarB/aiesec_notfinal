// js/script.js

// ������� ��� ����������� ������������ �����������
function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.querySelector("p").textContent = message;
    notification.style.display = "block";

    // �������������� �������� ����� 5 ������
    setTimeout(() => {
        closeNotification();
    }, 5000);
}

// ������� ��� �������� �����������
function closeNotification() {
    const notification = document.getElementById("notification");
    notification.style.display = "none";
}

// ���������� �������� �����
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // ������������� ����������� ���������

    // �������� ������ �����
    const formData = new FormData(this);

    // ���������� ������ ����� AJAX
    fetch("php/submit.php", {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                showNotification("���� ��������� ���������� �������!");
                this.reset(); // ���������� �����
            } else {
                showNotification("��������� ������. ���������� �����.");
            }
        })
        .catch(() => {
            showNotification("��������� ������ ����. ���������� �����.");
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
