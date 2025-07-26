function addTaskToList(task)
{
    const li = document.createElement('li');
    li.textContent = task.title;
    document.getElementById('task-list').appendChild(li);
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
        
        addTaskToList(result);
        
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