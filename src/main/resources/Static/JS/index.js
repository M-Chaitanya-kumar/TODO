//Main Logic
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
});

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

function addTaskToList(_task, _idName)
{
    const TaskList = document.getElementById(_idName);
    const li = document.createElement('li');
    li.id = `list-${_task.id}`;

    //Input tag
    const CheckboxInput = CreateCheckboxInputTag();

    //Span tag
    const TitleSpan = CreateTitleSpanTag(_task);

    //Button tag
    const deleteBtn = CreateDeleteButtonTag(_task);

    li.appendChild(CheckboxInput);
    li.appendChild(TitleSpan);
    li.appendChild(deleteBtn);

    TaskList.appendChild(li);
}   

function CreateCheckboxInputTag()
{
    const CheckboxInput = document.createElement('input');

    CheckboxInput.type          = 'checkbox';
    CheckboxInput.className     = 'task-checkbox'

    return CheckboxInput;
}

function CreateTitleSpanTag(_task)
{
    const TitleSpan = document.createElement('span');

    TitleSpan.textContent   = _task.title;
    TitleSpan.className     = 'task-title';

    return TitleSpan;
}

function CreateDeleteButtonTag(_task)
{
    const deleteBtn = document.createElement('button');

    deleteBtn.id                = `delete-Btn-${_task.id}`;
    deleteBtn.className         = 'delete-btn';
    deleteBtn.textContent       = '❌';

    deleteBtn.addEventListener("click", () => handleClick(_task));

    return deleteBtn;
}

function handleClick(_task)
{
    alert("Clicked -"+ _task.id);
}