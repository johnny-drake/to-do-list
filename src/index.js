import './style.css';
import {todayPageLoad} from './homePage';
import {weekPageLoad} from './weekPage';
import {addTask} from './addTask';
import {addProject} from './addProject';

weekPageLoad();
addTask();
todayPageLoad();
addTask();

const content = document.getElementById("content");

const contentWeek = document.getElementById("contentWeek");
const contentWeek0 = document.getElementById("contentWeek").firstChild;
const contentWeek1 = document.getElementById("contentWeek").lastChild;
contentWeek.innerHTML = "";

const contentToday = document.getElementById("contentToday");
const contentToday0 = document.getElementById("contentToday").firstChild;
const contentToday1 = document.getElementById("contentToday").lastChild;

const changeToWeek = document.getElementById("week").addEventListener("click", () => {
    const contentToday0 = document.getElementById("contentToday").firstChild;
    const contentToday1 = document.getElementById("contentToday").lastChild;
    contentToday.innerHTML = "";
    contentWeek.appendChild(contentWeek0);
    contentWeek.appendChild(contentWeek1);
    console.log("weekPressed");
})

const changeToToday = document.getElementById("today").addEventListener("click", () => {
    const contentWeek0 = document.getElementById("contentWeek").firstChild;
    const contentWeek1 = document.getElementById("contentWeek").lastChild;
    contentWeek.innerHTML = "";
    contentToday.appendChild(contentToday0);
    contentToday.appendChild(contentToday1);
    console.log("todayPressed");
})

addProject();






























// function clearWeek() {
//     const clearWeek = document.getElementById("contentWeek");
//     clearWeek.style.display = "none";
//     clearWeek.style.zIndex = "-1";
// }

// function weekLoad() {
//     const weekLoad = document.getElementById("contentWeek");
//     weekLoad.style.display = "flex";
//     weekLoad.style.zIndex = "1";
// }

// function clearToday() {
//     const clearToday = document.getElementById("contentToday");
//     clearToday.style.display = "none";
//     clearToday.style.zIndex = "-1";
// }

// function todayLoad() {
//     const todayLoad = document.getElementById("contentToday");
//     todayLoad.style.display = "flex";
//     todayLoad.style.zIndex = "1";
// }

// weekPageLoad();
// clearWeek();

//      const loadToday = document.getElementById("today").addEventListener("click", () => {
//         clearWeek();
//         todayLoad();
//         console.log("clickedToday");
//     })
    
//     const loadWeek = document.getElementById("week").addEventListener("click", () => {
//         clearToday();
//         weekLoad();
//         console.log("clickedWeek");

//     })
