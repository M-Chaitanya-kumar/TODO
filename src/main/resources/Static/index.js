function addTaskToList(task,idName)
{
    const li = document.createElement('li');
    li.id = `list-${task.id}`;
    li.textContent = task.title;
    document.getElementById(idName).appendChild(li);
    
    if (task.status === "pending")
    {
        const button = document.createElement('button');
        button.textContent = "Mark as complete";
        document.getElementById(li.id).appendChild(button);
    }
}

async function addTaskToBanckend(task)
{
    const response = await fetch("http://localhost:8080/tasks",
        {
            method: "POST",
            headers:
            {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(task)
        }
    );

    if (response.ok)
    {
        const result = await response.json();
        
        addTaskToList(result, 'task-list');
        
        document.getElementById('task-title').value = "";
    }
    else
    {
        alert("failed to add the task");
    }
}


document.getElementById("task-form").addEventListener("submit", 
    async function (e)
{
    e.preventDefault();

    const title = document.getElementById("task-title").value;

    const task =
    {
        title           : title,
        description     : "",
        status          : "pending"
    };

    try{
        await addTaskToBanckend(task);
    }
    catch(error)
    {
        console.log("Error connecting to backend",error);
        alert("Error in connecting to Backend");
    }
})

async function getAllTasks()
{
    const tasksResponse = await fetch("http://localhost:8080/tasks",
        {
            method : "GET",
            headers : 
            {
                'Content-type' : 'application/JSON'
            }
        }
    )

    try
    {
        if(tasksResponse.ok)
        {
            const data = tasksResponse.json();
            return data;
        }
    }
    catch(error)
    {
        alert("Error in getting all tasks");
    }
}

function createColumn(text, col_Id, row_Id)
{
    const td = document.createElement('td');
    td.id = col_Id;
    td.textContent = text;
    document.getElementById(row_Id).appendChild(td);
}

function displayOnlyTaskTitles(task, idName)
{
    const tr = document.createElement('tr');
    tr.id = `row - ${task.id}`;
    
    const tbody = document.getElementById(idName);
    tbody.appendChild(tr); 

    createColumn(task.title, `col-${task.id}-${task.title}`, tr.id);
    createColumn(task.status, `col-${task.id}-${task.title}`, tr.id);
    

}

async function showAllTasks()
{
    const tasks = await getAllTasks();

    console.log(tasks);

    for (const task of tasks)
    {
        displayOnlyTaskTitles(task, "display-All-tasks");
    }
}