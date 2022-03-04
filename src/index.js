import './style.css';
import {todayPageLoad} from './homePage';
import {weekPageLoad} from './weekPage';
import {addTask} from './addTask';
import {addProject} from './addProject';

weekPageLoad();
addTask();
todayPageLoad();
addTask();
addProject();

const content = document.getElementById("content");

const contentWeek = document.getElementById("contentWeek");
const contentWeek0 = document.getElementById("contentWeek").firstChild;
const contentWeek1 = document.getElementById("contentWeek").lastChild;
contentWeek.innerHTML = "";

const contentToday = document.getElementById("contentToday");
const contentToday0 = document.getElementById("contentToday").firstChild;
const contentToday1 = document.getElementById("contentToday").lastChild;

const contentProject = document.getElementById("contentProject");
const contentProject0 = document.getElementById("contentProject").firstChild;
const contentProject1 = document.getElementById("contentProject").lastChild;

const changeToWeek = document.getElementById("week").addEventListener("click", () => {
    projectInfo.style.display = "none"; 
    const contentToday0 = document.getElementById("contentToday").firstChild;
    const contentToday1 = document.getElementById("contentToday").lastChild;
    const contentProject0 = document.getElementById("contentProject").firstChild;
    const contentProject1 = document.getElementById("contentProject").lastChild;
    contentToday.innerHTML = "";
    contentProject.innerHTML = "";
    contentWeek.appendChild(contentWeek0);
    contentWeek.appendChild(contentWeek1);
    console.log("weekPressed");
})

const changeToToday = document.getElementById("today").addEventListener("click", () => {
    projectInfo.style.display = "none";
    localStorage.setItem("contentWeekStorage0", document.getElementById("contentWeek").firstChild);
    localStorage.setItem("contentWeekStorage1", document.getElementById("contentWeek").lastChild);
    localStorage.setItem("contentProjectStorage0", document.getElementById("contentProject").firstChild)
    localStorage.setItem("contentProjectStorage1", document.getElementById("contentProject").lastChild)
    const contentWeek0 = document.getElementById("contentWeek").firstChild;
    const contentWeek1 = document.getElementById("contentWeek").lastChild;
    const contentProject0 = document.getElementById("contentProject").firstChild;
    const contentProject1 = document.getElementById("contentProject").lastChild;
    contentWeek.innerHTML = "";
    contentProject.innerHTML = "";
    contentToday.appendChild(contentToday0);
    contentToday.appendChild(contentToday1);
    console.log("todayPressed");
})

















