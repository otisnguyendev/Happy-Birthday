const datetxt = "Ngày 6 Tháng 12";
const datatxtletter = "My love. You are a very special girl. I always silently thank you for coming into my life. Today, I wish you all the best, lots of health, and lots of joy. I always hope we will celebrate many more birthdays like this together. Happy birthday to you.💕";
const titleLetter = "Gửi em";

const date__of__birth = document.querySelector(".date__of__birth span");
const text__letter = document.querySelector(".text__letter h2");
const title__letter = document.querySelector(".title__letter");

const mailBox = document.querySelector('.mail');
const boxmail = document.querySelector('.boxMail');
const closeBtn = document.querySelector('.boxMail .fa-xmark');

date__of__birth.textContent = datetxt;
let iStar = document.createElement("i");
iStar.className = "fa-solid fa-star";
document.querySelector(".date__of__birth").prepend(iStar);
document.querySelector(".date__of__birth").appendChild(iStar.cloneNode(true));

function showLetter() {
    $(".box__letter").slideDown();
    $(".letter__border").slideDown();

    if (title__letter) {
        title__letter.textContent = "";
        for (let char of titleLetter) {
            title__letter.textContent += char;
            let heart = document.createElement("i");
            heart.className = "fa-solid fa-heart";
            title__letter.appendChild(heart);
        }
    }

    if (text__letter) {
        text__letter.textContent = datatxtletter;
    }

    document.querySelectorAll(".heart").forEach((item) => item.classList.add("animation"));
    document.querySelectorAll("#heart__letter, .love__img, #mewmew").forEach(el => el?.classList.add("animationOp"));
}

window.addEventListener('DOMContentLoaded', showLetter);

closeBtn.addEventListener('click', function () {
    if (text__letter) text__letter.textContent = "";
    if (title__letter) title__letter.textContent = "";
    $(".box__letter").slideUp();
    $(".letter__border").slideUp();

    document.querySelectorAll(".heart").forEach((item) => item.classList.remove("animation"));
    document.querySelectorAll("#heart__letter, .love__img, #mewmew").forEach(el => el?.classList.remove("animationOp"));
});

mailBox.onclick = function () {
    mailBox.classList.toggle('active');
    boxmail.classList.add('active');
}
