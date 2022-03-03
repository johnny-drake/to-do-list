
const projectPageLoad = document.getElementsById("newProjectName").addEventListener("click", () => {
        
    const newInfo = document.createElement('form');
        newInfo.setAttribute("id", "newInfo");
        newInfo.setAttribute("method", "post");
        newInfo.setAttribute("action", "submit.php");
        document.getElementById('contentProject').appendChild(newInfo);

        const taskName = document.createElement('INPUT');
            taskName.setAttribute("type", "text");
            taskName.setAttribute("id", "taskName");
            taskName.setAttribute("placeholder", "Add Task....")
            document.getElementById('newInfo').appendChild(taskName);

        const addTask = document.createElement('input');
            addTask.setAttribute("id", "addTask");
            addTask.setAttribute("type", "submit");
            addTask.setAttribute("value", "+");
            addTask.setAttribute("onsubmit", "return-false");
            document.getElementById('newInfo').appendChild(addTask);
        
    const todayTitles = document.createElement('div');
        todayTitles.setAttribute("id", "todayTitles");
        document.getElementById('contentProject').appendChild(todayTitles);

        const thisDay = document.createElement('div');
            thisDay.setAttribute("id", "thisDay");
            const thisDayText = document.createTextNode("Today");
            thisDay.appendChild(thisDayText);
            document.getElementById('todayTitles').appendChild(thisDay);

        const dueDate = document.createElement('div');
            dueDate.setAttribute("id", "dueDate");
            const dueDateText = document.createTextNode("Due Date");
            dueDate.appendChild(dueDateText);
            document.getElementById('todayTitles').appendChild(dueDate);            
                   
});

export {projectPageLoad};
