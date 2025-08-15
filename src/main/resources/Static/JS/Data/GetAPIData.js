async function getAllTasks()
{
    const tasksResponse = await fetch("http://localhost:8080/tasks",
        {
            method : "GET",
            headers : 
            {
                'Content-Type' : 'application/JSON'
            }
        }
    )

    try
    {
        if(tasksResponse.ok)
        {
            const data = await tasksResponse.json();
            return data;
        }
    }
    catch(error)
    {
        alert("Error in getting all tasks");
    }
}

export {getAllTasks};