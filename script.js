document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let totalAnswers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked'),
        document.querySelector('input[name="q4"]:checked'),
        document.querySelector('input[name="q5"]:checked')
    ];

    if (totalAnswers.some(answer => answer === null)) {
        alert("กรุณาตอบคำถามให้ครบทุกข้อก่อนดูผลลัพธ์");
        return;
    }

    // ใส่ logic คำนวณผลลัพธ์ที่นี่
    document.getElementById("resultText").innerHTML = "ผลลัพธ์ที่เหมาะสมกับคุณคือ: ตัวอย่างคำตอบ";
    document.getElementById("result").style.display = "block";
});