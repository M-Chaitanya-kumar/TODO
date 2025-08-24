package com.example.TODO.Model;

import java.util.*;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/tasks")
public class TasksGetController {

   private final TasksUtility TUtility;

   public TasksGetController(TasksUtility TUtility)
   {
      this.TUtility = TUtility;
   }

   @GetMapping
   public List<Task> GetTasks() 
   {
      return TUtility.getTasks();
   }

}
