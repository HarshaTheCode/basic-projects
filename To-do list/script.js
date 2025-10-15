console.log("script is working buddy ")

const addbtn = document.getElementById("add-btn");
var tasksArray = [];
const savedList = localStorage.getItem("myList");
const tasklist = document.getElementById("todo-list");
var id = Date.now();

function renderTasks() {
    // Clear existing tasks in the DOM
    document.getElementById("todo-list").innerHTML = "";

    // Render each task
    tasksArray.forEach((task) => {
        createTaskElement(task);
    });
}


addbtn.addEventListener("click", function (e) {
    var newtodo = document.getElementById("todo-input").value
    if (newtodo == "") {
        window.alert("Write a to do first  ")
    } else {
        const newelement = document.createElement("input");
        newelement.type = 'checkbox';
        newelement.id = 'myCheckbox-' + id;
        const deletebtn = document.createElement("button");
        deletebtn.textContent = "delete";

        const label = document.createElement('label');
        label.htmlFor = 'newelement.id'; // Link the label to the checkbox via the 'id'
        label.textContent = newtodo;

        document.getElementById("todo-list").appendChild(newelement)
        document.getElementById("todo-list").appendChild(label);
        document.getElementById("todo-list").appendChild(deletebtn);

        newelement.addEventListener("click", async function (e) {

            if (this.checked) {
                label.className = "checked";
                console.log("checked");
                edit(this.checked);
            } else {
                label.className = "value";
                console.log("unchecked");
                edit();
            }

        });

        edit();

        function edit(e) {

            const newtodo1 = {
                id: id,
                text: newtodo,
                complete: e ? true : false
            };
            tasksArray.push(newtodo1);

            savetask();
        }

        deletebtn.addEventListener("click", async function (e) {

            document.getElementById("todo-list").removeChild(newelement);
            document.getElementById("todo-list").removeChild(label);
            document.getElementById("todo-list").removeChild(deletebtn);
            console.log("deleted");
        });

    }

});

window.onload = (e) => {

    console.log("page is fully loaded buddy ");

    const savedList = localStorage.getItem("myList");
    if (savedList) {
        tasksArray = JSON.parse(savedList);
    } else {
        localStorage.setItem('myList', []);

    }
};

function savetask() {

    localStorage.setItem("myList", JSON.stringify(tasksArray));

    console.log(tasksArray);

}


