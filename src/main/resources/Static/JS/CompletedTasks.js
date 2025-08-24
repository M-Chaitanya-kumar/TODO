import { getAllTasks, ModifyTask, DeleteTask } from "./Data/APIMethods.js";

async function init()
{
   await displayAllCompletedTasks();
}

async function displayAllCompletedTasks()
{
   const tasks = await getAllTasks(); // From API

   console.log(tasks);

   for (const task of tasks)
   {
      displayOnlyTaskTitlesOnlyCompleted(task, "display-all-completed-tasks")
   }
}

function displayOnlyTaskTitlesOnlyCompleted(_task, _idName)
{
   if (_task.status == 'Completed')
   {
      const tr = document.createElement('tr');
      tr.id = `row - ${_task.id}`;
      
      const tbody = document.getElementById(_idName);
      tbody.appendChild(tr); 
   
      createColumn(_task.title, `col-${_task.id}-${_task.title}`, tr.id);
      
      createColumn('✅', `col-${_task.id}-completed`, tr.id)
   }
}

function createColumn(text, col_Id, row_Id)
{
    const td = document.createElement('td');
    td.id = col_Id;
    if (td.id == `col-${col_Id}-completed`)
    {
      td.style.fontSize = '30px';
    }
    td.textContent = text;
    document.getElementById(row_Id).appendChild(td);
}

await init();