const homeBtn = document.querySelectorAll("#home-btn");
const messageBox = document.getElementById("message-box");
const addProject = document.querySelector(".addProject");

const allTasks = document.querySelector(".allTasks");
const today = document.querySelector(".today");
const nextSeven = document.querySelector(".next-seven");
const important = document.querySelector(".important");

//Highlight Home Button and display on green box 
for (let i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener("click", function () {
      homeBtn.forEach(el=> el.classList.remove("selection-bg"))
      homeBtn[i].classList.add("selection-bg");
      messageBox.innerHTML = homeBtn[i].textContent;
    });
  }

addProject.addEventListener("click", ()=> {
  
})
