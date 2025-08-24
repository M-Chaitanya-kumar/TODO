package com.example.TODO.Model;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasks")
public class TasksPostController {
   
   private final TasksUtility TUtility;

   public TasksPostController(TasksUtility TUtility)
   {
      this.TUtility = TUtility;
   }

   @PostMapping
   public Task addTask(@RequestBody Task task)
   {
      return TUtility.addTask(task);
   }

}
