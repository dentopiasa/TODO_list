const homeBtn = document.querySelectorAll("#home-btn")
const messageBox = document.getElementById("message-box")
const allTasks = document.querySelector(".allTasks");
const today = document.querySelector(".today");
const nextSeven = document.querySelector(".next-seven");
const important = document.querySelector(".important");

for (let i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener("click", function () {
      homeBtn.forEach(el=> el.classList.remove("selection-bg"))
      homeBtn[i].classList.add("selection-bg");
      messageBox.innerHTML = homeBtn[i].textContent;
    });
  }