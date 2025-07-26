package com.example.TODO;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BasicHelloWorld {
    @RequestMapping("/")
    public String index()
    {
        System.out.println("Printing hello world program");
        return "index.html";
    }
}
