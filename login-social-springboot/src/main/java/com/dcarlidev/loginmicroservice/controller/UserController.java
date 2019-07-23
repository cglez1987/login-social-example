package com.dcarlidev.loginmicroservice.controller;


import com.dcarlidev.loginmicroservice.exception.ResourceNotFoundException;
import com.dcarlidev.loginmicroservice.model.User;
import com.dcarlidev.loginmicroservice.repository.UserRepository;
import com.dcarlidev.loginmicroservice.security.CurrentUser;
import com.dcarlidev.loginmicroservice.security.UserPrincipal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }
}
