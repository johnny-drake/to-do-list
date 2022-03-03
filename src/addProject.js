
const addProject = () => {
    const projectInfo = document.getElementById("projectInfo");
    const projectList = document.getElementById("projectList");

    document.getElementById("addProject").addEventListener("click", () => {
        projectInfo.style.display = "flex";    
    })

    document.getElementById("projectSubmit").addEventListener("click", (event) => {
        event.preventDefault();
    
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

        deleteProject.addEventListener("click", () => {
            editProject.remove();
            newProjectName.remove();
            deleteProject.remove();
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

        projectName.value ='';
        projectInfo.style.display = "none";
    })
}

export {addProject};