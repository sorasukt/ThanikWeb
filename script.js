document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const totalQuestions = 5; // จำนวนคำถามทั้งหมด
        const formData = new FormData(quizForm);
        const answers = Array.from(formData.keys());

        if (answers.length < totalQuestions) {
            showPopup("กรุณาตอบทุกคำถามก่อนส่งแบบฟอร์ม!");
            return;
        }

        let scores = [0, 0, 0, 0, 0];
        for (let [key, value] of formData.entries()) {
            scores[parseInt(value) - 1]++;
        }

        const maxScoreIndex = scores.indexOf(Math.max(...scores));
        const resultText = getResultText(maxScoreIndex);

        showPopup(resultText);
    });

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

    function showPopup(message) {
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

        document.body.appendChild(popupContainer);
    }
});