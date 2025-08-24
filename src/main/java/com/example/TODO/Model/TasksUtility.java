package com.example.TODO.Model;

import java.util.*;

import org.springframework.stereotype.Service;

@Service
public class TasksUtility {
   
   private List<Task>   Tasks       = new ArrayList<>();
   private int          idCounter   = 0;

   public List<Task> getTasks()
   {
      return Tasks;
   }

   public Task addTask(Task task)
   {
      idCounter += 1;

      task.setId(idCounter);

      if (task.getDescription() == null) 
      {
         task.setDescription("null"); 
      }
      if (task.getStatus() == null)
      {
         task.setStatus("pending");
      }
      
      Tasks.add(task);

      return task;
   }

   public Task modifyTask(int id, String newStatus)
   {
      for (Task task : Tasks)
      {
         if(task.getId() == id)
         {
            task.setStatus(newStatus);

            return task;
         }
      }
      
      return null;
   }

   public boolean deleteTask(int id)
   {
      return Tasks.removeIf(Tasks -> Tasks.getId() == id);
   }
}
