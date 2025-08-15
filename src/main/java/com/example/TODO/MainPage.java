package com.example.TODO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


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
    
}
