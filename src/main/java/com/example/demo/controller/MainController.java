package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class MainControler {

    @GetMapping("/")
    public String home() {
        return "home.html";
    }

    @GetMapping("/map")
    public String show() {
        return "heremap.html";
    }

    @GetMapping("/here")
    public String showhere() {
        return "All.html";
    }

    @GetMapping("/table")
    public String showtable() {
        return "table.html";
    }


}
