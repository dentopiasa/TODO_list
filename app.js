const allTasks = document.querySelector(".allTasks");
const today = document.querySelector(".today");
const nextSeven = document.querySelector(".next-seven");
const important = document.querySelector(".important");

const btnArray = {allTasks, today, nextSeven, important};
console.log(btnArray);

btnArray.forEach(e) {
    console.log(e.target);
});

/*allTasks.addEventListener("click", ()=> {
    allTasks.classList.add("selection-bg");
})*/