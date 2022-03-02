
const addTask = () => {

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
        domTask.readOnly = false;
        if (domEdit.innerHTML == "Edit") {
            domEdit.innerHTML = "Save"
            domTask.style.background = "aquamarine";
        } else if (domEdit.innerHTML == "Save") {
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





}

export {addTask};