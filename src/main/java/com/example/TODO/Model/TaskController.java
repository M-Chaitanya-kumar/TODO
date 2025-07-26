package com.example.TODO.Model;

import java.util.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")

public class TaskController {

    private List<Task>  tasks           = new ArrayList<>();
    private int         idCounter       = 0;

    @GetMapping
    public List<Task> getTasks()
    {
        return tasks;
    }

    @PostMapping
    public Task addTask(@RequestBody Task task)
    {
        idCounter += 1;

        task.setId(this.idCounter);

        if (task.getDescription() == null)
        {
            task.setDescription(""); 
        }

        if (task.getStatus() == null)
        {
            task.setStatus("pending");
        }

        tasks.add(task);

        return task;
    }
}
