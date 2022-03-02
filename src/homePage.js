const homePageLoad = () => {


    const newInfo = document.createElement('div');
        newInfo.setAttribute("id", "newInfo");
        document.getElementById('content').appendChild(newInfo);

        const taskName = document.createElement('INPUT');
            taskName.setAttribute("type", "text");
            taskName.setAttribute("id", "taskName");
            document.getElementById('newInfo').appendChild(taskName);

        const date = document.createElement('INPUT');
            date.setAttribute("type", "date");
            date.setAttribute("id", "date");
            document.getElementById('newInfo').appendChild(date);

        const addTask = document.createElement('button');
            addTask.setAttribute("id", "addTask");
            const addTaskText = document.createTextNode ("+");
            addTask.appendChild(addTaskText);
            document.getElementById('newInfo').appendChild(addTask);
        
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
        
        


        

}

export {homePageLoad};