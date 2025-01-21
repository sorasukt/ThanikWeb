// ดักจับการส่งฟอร์ม
const form = document.getElementById('quizForm');
const errorPopup = document.getElementById('errorPopup');
const resultText = document.getElementById('resultText');

// เมื่อกดส่งฟอร์ม
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    let allAnswered = true;

    // เช็คว่าทุกคำถามมีการตอบหรือไม่
    for (let i = 1; i <= 5; i++) {
        if (!formData.has(`q${i}`)) {
            allAnswered = false;
            break;
        }
    }

    if (allAnswered) {
        // ประมวลผลผลลัพธ์
        resultText.innerHTML = 'คุณได้เลือกครบทั้งหมดแล้ว! ผลลัพธ์จะปรากฏที่นี่';
    } else {
        // แสดง popup ข้อผิดพลาด
        errorPopup.style.display = 'block';
    }
});

// ฟังก์ชันปิด popup
function closePopup() {
    errorPopup.style.display = 'none';
}