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

async function ModifyTask(task, status) 
{
   try
   {
      const taskResponse = await fetch(`http://localhost:8080/tasks/${task.id}`,
         {
            method : "PUT",
            headers:
            {
               'Content-Type' : "application/JSON"
            },
            body: JSON.stringify({status})
         }
      );
   
      if (! taskResponse.ok)
      {
         alert('❌Status update failed');   
      }

      return await taskResponse.json();
   }
   catch(error)
   {
      alert("Status update failed");
   }
}

async function DeleteTask(task)
{
   try
   {
      const response = await fetch(`http://localhost:8080/tasks/${task.id}`,
         {
            method: "DELETE"
         }
      )

      if(! response.ok)
      {
        alert("Cannot delete task");
      }

      return true;
   }
   catch(error)
   {
      alert("Error in Deleting task");
   }
}

export {ModifyTask, getAllTasks, DeleteTask};
