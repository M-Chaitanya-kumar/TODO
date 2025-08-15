import { getAllTasks } from "./Data/GetAPIData.js";

function displayOnlyTaskTitles(_task, _idName)
{
    const tr = document.createElement('tr');
    tr.id = `row - ${_task.id}`;
    
    const tbody = document.getElementById(_idName);
    tbody.appendChild(tr); 

    createColumn(_task.title, `col-${_task.id}-${_task.title}`, tr.id);
    
    if (_task.status == 'pending')
    {
        createColumn('⌛', `col-${_task.id}-${_task.title}`, tr.id);
    }
}

function createColumn(text, col_Id, row_Id)
{
    const td = document.createElement('td');
    td.id = col_Id;
    td.textContent = text;
    document.getElementById(row_Id).appendChild(td);
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
    
async function init()
{
    await showAllTasks();
}
    
await init();