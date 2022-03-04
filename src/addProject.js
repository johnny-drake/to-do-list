
const addProject = () => {
    const projectInfo = document.getElementById("projectInfo");
    const projectList = document.getElementById("projectList");
    const contentProject = document.getElementById("contentProject");

    document.getElementById("addProject").addEventListener("click", () => {
        projectInfo.style.display = "flex"; 
        contentProject.innerHTML = "";
        contentWeek.innerHTML = "";
        contentToday.innerHTML = ""; 
    })

    document.getElementById("projectSubmit").addEventListener("click", (event) => {
        event.preventDefault();
        contentToday.innerHTML = "";
    
        const newProject = document.createElement("div");
            newProject.setAttribute("id", "newProject");
            document.getElementById("projectList").appendChild(newProject);

            const deleteProject = document.createElement("button");
                deleteProject.setAttribute("id", "deleteProject");
                deleteProject.innerHTML = "Delete";
                document.getElementById("newProject").appendChild(deleteProject);

            const editProject = document.createElement("button");
                editProject.setAttribute("id", "editProject");
                editProject.innerHTML = "Edit";
                document.getElementById("newProject").appendChild(editProject);

            const newProjectName = document.createElement("input");
                newProjectName.setAttribute("type", "text");
                newProjectName.readOnly = true;
                newProjectName.setAttribute("id", "newProjectName");
                newProjectName.value = projectName.value;
                document.getElementById("newProject").appendChild(newProjectName);
            
        const newInfo = document.createElement('form');
            newInfo.setAttribute("id", "newInfo");
            newInfo.setAttribute("method", "post");
            newInfo.setAttribute("action", "submit.php");
            contentProject.appendChild(newInfo);
                
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
            contentProject.appendChild(todayTitles);
        
            const thisDay = document.createElement('div');
                thisDay.setAttribute("id", "thisDay");
                thisDay.innerHTML = projectName.value;
                document.getElementById('todayTitles').appendChild(thisDay);
        
            const dueDate = document.createElement('div');
                dueDate.setAttribute("id", "dueDate");
                const dueDateText = document.createTextNode("Due Date");
                dueDate.appendChild(dueDateText);
                document.getElementById('todayTitles').appendChild(dueDate);
                
    document.getElementById('addTask').addEventListener('click', function(event) {
                        event.preventDefault();
                    
        const domTask = document.createElement("input");
            domTask.setAttribute("id", "domTask");
            domTask.readOnly = true;
            domTask.value = taskName.value;
            document.getElementById("todayTitles").appendChild(domTask);
                    
        const domDate = document.createElement("input");
            domDate.setAttribute("type", "date");
            domDate.setAttribute("id", "domDate");
            document.getElementById("todayTitles").appendChild(domDate);
                    
        const domEdit = document.createElement("button");
            domEdit.setAttribute("id", "domEdit");
            domEdit.innerHTML = "Edit";
            document.getElementById("todayTitles").appendChild(domEdit);
                    
        const domDelete = document.createElement("button");
            domDelete.setAttribute("id", "domDelete");
            domDelete.innerHTML = "Delete";
            document.getElementById("todayTitles").appendChild(domDelete);
                    
            domEdit.addEventListener("click", () => {
                if (domEdit.innerHTML == "Edit") {
                    domTask.readOnly = false;
                    domEdit.innerHTML = "Save"
                    domTask.style.background = "aquamarine";
                } else if (domEdit.innerHTML == "Save") {
                    domTask.readOnly = true;
                    domEdit.innerHTML = "Edit"
                    domTask.style.background = "rgb(160, 160, 231)";
                }
            })
                            
            domDelete.addEventListener("click", () => {
                todayTitles.removeChild(domTask);
                todayTitles.removeChild(domDate);
                todayTitles.removeChild(domEdit);
                todayTitles.removeChild(domDelete);
            })
                    
    taskName.value = '';                   
    console.log("submit button");
                        
})
                           
        deleteProject.addEventListener("click", () => {
            editProject.remove();
            newProjectName.remove();
            deleteProject.remove();
            newInfo.remove();
            todayTitles.remove();
        })

        editProject.addEventListener("click", () => {
            if (editProject.innerHTML == "Edit") {
                newProjectName.readOnly = false;
                editProject.innerHTML = "Save"
                newProjectName.style.background = "white";
            } else if (editProject.innerHTML == "Save") {
                newProjectName.readOnly = true;
                editProject.innerHTML = "Edit";
                newProjectName.style.background = "burlywood";
                thisDay.innerHTML = newProjectName.value;
            }
        })

        projectList.addEventListener("mouseenter", () => {
            deleteProject.style.zIndex = "1";
            editProject.style.zIndex = "1";
        })

        projectList.addEventListener("mouseleave", () => {
            deleteProject.style.zIndex = "-1";
            editProject.style.zIndex = "-1";
        })

        const contentProject0 = document.getElementById("contentProject").firstChild;
        const contentProject1 = document.getElementById("contentProject").lastChild;

        newProjectName.addEventListener("click", () => {
            projectInfo.style.display = "none"; 
            const contentWeek0 = document.getElementById("contentProject").firstChild;
            const contentWeek1 = document.getElementById("contentProject").lastChild;
            const contentToday0 = document.getElementById("contentToday").firstChild;
            const contentToday1 = document.getElementById("contentToday").lastChild;
            contentProject.innerHTML = "";
            contentWeek.innerHTML = "";
            contentToday.innerHTML = "";
            contentProject.appendChild(contentProject0);
            contentProject.appendChild(contentProject1);
        })
    
    projectName.value ='';
    projectInfo.style.display = "none";

})
}  

export {addProject};