package com.k.newShop.controllers;

import com.k.newShop.dtos.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @GetMapping("/all-users")
    public List<User> users() {
        return Arrays.asList(
                new User("johnDoe", "John", "Doe", "john.doe@example.com", 28),
                new User("janeSmith", "Jane", "Smith", "jane.smith@example.com", 34),
                new User("mikeBrown", "Mike", "Brown", "mike.brown@example.com", 40),
                new User("lucyJones", "Lucy", "Jones", "lucy.jones@example.com", 25)
        );
    }
}
