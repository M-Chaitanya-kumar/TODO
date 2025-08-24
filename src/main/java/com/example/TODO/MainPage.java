package com.example.TODO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class MainPage {
    @RequestMapping("/")
    public String BasePage()
    {
        System.out.println("Printing hello world program");
        return "./HTML/index.html";
    }
    
    @RequestMapping("/alltasks")
    public String AllTasksPage() {
        
        return "./HTML/allTasks.html";
    }
    
    @RequestMapping("/allcompletedtasks")
    public String AllCompletedTasksPage() {

        return "./HTML/allCompletedTasks.html";
    }
    
}
