//Highlight Home Button and display on green box
const homeBtn = document.querySelectorAll("#home-btn");
const messageBox = document.getElementById("message-box"); 
for (let i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener("click", function () {
      homeBtn.forEach(el=> el.classList.remove("selection-bg"))
      homeBtn[i].classList.add("selection-bg");
      messageBox.innerHTML = homeBtn[i].textContent;
    });
  }
//Add Project Main Menu
document.querySelector(".addProject").addEventListener("click", ()=> {
  document.querySelector(".project-input").style.display = "flex";
})
document.getElementById("cancelProjectBtn").addEventListener("click", ()=> {
  document.querySelector(".project-input").style.display = "none";
})

document.getElementById("addProjectBtn").addEventListener("click", ()=> {
  const projectName = document.getElementById("project-name");
  alert(projectName.value);
})
