const homePageLoad = () => {

    const todayTitles = document.createElement('div');
        todayTitles.setAttribute("id", "todayTitles");
        document.getElementById('content').appendChild(todayTitles);

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

        const addTask = document.createElement('div');
                addTask.setAttribute("button", "addTask");
                const addTaskText = document.createTextNode ("+ Add Task");
                addTask.appendChild(addTaskText);
                document.getElementById('todayTitles').appendChild(addTask);
             
}

export {homePageLoad};