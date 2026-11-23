document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio của Nguyễn Ngọc Tuấn Khang đã tải thành công!");

    if (
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname.endsWith("/")
    ) {
        alert("Chào mừng bạn đến với Portfolio của Nguyễn Ngọc Tuấn Khang!");
    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {
                alert("Vui lòng nhập đầy đủ thông tin!");
                return;
            }

            const formMessage = document.getElementById("formMessage");

            formMessage.textContent =
                "Cảm ơn " + name +
                "! Lời nhắn của bạn đã được ghi nhận.";

            alert("Gửi lời nhắn thành công!");

            contactForm.reset();

        });

    }

});