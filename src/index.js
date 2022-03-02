import './style.css';
import {todayPageLoad} from './homePage';
import {weekPageLoad} from './weekPage';
import {addTask} from './addTask';



function clearWeek() {
    const clearWeek = document.getElementById("contentWeek");
    clearWeek.style.display = "none";
}

function clearToday() {
    const clearToday = document.getElementById("contentToday");
    clearToday.style.display = "none";
}

todayPageLoad();


     const loadToday = document.getElementById("today").addEventListener("click", () => {
        todayPageLoad();
        addTask();
        console.log("clicked");
    })
    
    const loadWeek = document.getElementById("week").addEventListener("click", () => {
        clearToday();
        weekPageLoad();
        addTask();
        console.log("clickedWeek");

    })
