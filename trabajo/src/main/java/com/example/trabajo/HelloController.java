package com.example.trabajo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
    public class HelloController {
        @GetMapping("/hola")
        public String hola(){
            return "<strong>hola desconocido :))";
        }

    }

