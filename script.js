const form = document.getElementById('quizForm');
const resultText = document.getElementById('resultText');
const errorPopup = document.getElementById('errorPopup');

// ตรวจสอบว่ามีคำถามที่ยังไม่ได้ตอบ
form.addEventListener('submit', function (e) {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้าเมื่อส่งแบบฟอร์ม

    const radioButtons = form.querySelectorAll('input[type="radio"]:checked');
    
    if (radioButtons.length === 5) {  // ตรวจสอบว่าผู้ใช้เลือกทุกคำถาม
        // แสดงผลลัพธ์
        resultText.textContent = 'ขอบคุณที่ตอบคำถามทั้งหมด! คุณเหมาะสมกับคณะที่คุณเลือกจากคำถามเหล่านี้!';
    } else {
        // แสดงป็อปอัพให้กรุณาตอบทุกคำถาม
        errorPopup.style.display = 'block';
    }
});

// ปิดป็อปอัพ
function closePopup() {
    errorPopup.style.display = 'none';
}