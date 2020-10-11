package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class RegistrationController {

    @GetMapping("/Registration")
    private String home() {
        return "Registration";
    }


}
