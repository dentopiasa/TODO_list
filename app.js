//Highlight Home Button and display on green box
const homeBtn = document.querySelectorAll("#home-btn");
const messageBox = document.getElementById("message-box"); 
var arr = Array.from(homeBtn);

function refresh() {
for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    arr.forEach(el=> el.classList.remove("selection-bg"))
    arr[i].classList.add("selection-bg");
    messageBox.innerHTML = arr[i].textContent;
  });
}
}
/*for (let i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener("click", function () {
      homeBtn.forEach(el=> el.classList.remove("selection-bg"))
      homeBtn[i].classList.add("selection-bg");
      messageBox.innerHTML = homeBtn[i].textContent;
    });
  }*/

//Add Project Main Menu
document.querySelector(".addProject").addEventListener("click", ()=> {
  document.querySelector(".project-input").style.display = "flex";
})
document.getElementById("cancelProjectBtn").addEventListener("click", ()=> {
  document.querySelector(".project-input").style.display = "none";
})

document.getElementById("addProjectBtn").addEventListener("click", ()=> {
  
    const projectName = document.getElementById("project-name");
    const newProject = document.createElement("div");
    const project = document.querySelector(".new-project");
    const node = document.createTextNode(projectName.value);

    newProject.setAttribute("id", "home-btn");
    newProject.appendChild(node);
    newProject.classList.add("btnStyle")
    project.appendChild(newProject);
    arr.push(newProject);
    console.log(arr);
    console.log(homeBtn);
    console.log(newProject)
})
refresh();
