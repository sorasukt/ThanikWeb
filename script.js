document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // เก็บคะแนนของแต่ละคำตอบ
        let scores = [0, 0, 0, 0, 0];

        // ดึงค่าคำตอบที่เลือกไว้
        const formData = new FormData(quizForm);
        for (let [key, value] of formData.entries()) {
            scores[parseInt(value) - 1]++;
        }

        // หา index ของคำตอบที่ได้คะแนนสูงสุด
        const maxScoreIndex = scores.indexOf(Math.max(...scores));
        const resultText = getResultText(maxScoreIndex);

        // แสดงผลลัพธ์ใน Pop-up
        showPopup(resultText);
    });

    // ฟังก์ชันคืนข้อความผลลัพธ์ตามคะแนนสูงสุด
    function getResultText(index) {
        const results = [
            "คุณเหมาะกับคณะที่เกี่ยวข้องกับวิศวกรรมศาสตร์หรือเทคโนโลยี!",
            "คุณเหมาะกับคณะที่เกี่ยวข้องกับการแพทย์หรือสุขภาพ!",
            "คุณเหมาะกับคณะที่เกี่ยวข้องกับบริหารธุรกิจหรือเศรษฐศาสตร์!",
            "คุณเหมาะกับคณะที่เกี่ยวข้องกับสังคมศาสตร์หรือมนุษยศาสตร์!",
            "คุณเหมาะกับคณะที่เกี่ยวข้องกับวิทยาศาสตร์ธรรมชาติหรือเกษตรศาสตร์!"
        ];
        return results[index];
    }

    // ฟังก์ชันแสดง Pop-up
    function showPopup(message) {
        // สร้างองค์ประกอบของ Pop-up
        const popupContainer = document.createElement("div");
        popupContainer.className = "popup-container";

        const popup = document.createElement("div");
        popup.className = "popup";

        const text = document.createElement("p");
        text.textContent = message;

        const closeButton = document.createElement("button");
        closeButton.textContent = "ปิด";
        closeButton.addEventListener("click", function () {
            popupContainer.remove();
        });

        popup.appendChild(text);
        popup.appendChild(closeButton);
        popupContainer.appendChild(popup);

        // เพิ่ม Pop-up ไปใน body
        document.body.appendChild(popupContainer);
    }
});