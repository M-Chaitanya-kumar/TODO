package com.example.TODO.Model;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/tasks")
public class TasksModifyController {
   
   TasksUtility TUtility;

   public TasksModifyController(TasksUtility TUtility)
   {
      this.TUtility = TUtility;
   }

   @PutMapping("/{id}")
   public Task UpdateStatus(@PathVariable int id, @RequestBody Task updatedTask) {
      
      Task task = TUtility.modifyTask(id, updatedTask.getStatus());

      return task;
   }

   @DeleteMapping("/{id}")
   public boolean DeleteTask(@PathVariable int id)
   {
      return TUtility.deleteTask(id);
   }

   
}
