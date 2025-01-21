const form = document.getElementById('quizForm');
const resultText = document.getElementById('resultText');
const errorPopup = document.getElementById('errorPopup');

// ฟังก์ชันที่เช็คคำถามทั้งหมดถูกตอบหรือไม่
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