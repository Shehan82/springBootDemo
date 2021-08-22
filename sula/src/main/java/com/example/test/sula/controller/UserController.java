package com.example.test.sula.controller;

import com.example.test.sula.model.UserModel;
import com.example.test.sula.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class UserController {



    @Autowired
    private UserRepository userRepo;

    @PostMapping("/saveUser")
    public int saveUser(@RequestBody UserModel user){
      UserModel usermodel =  userRepo.save(user);


      if(usermodel.getUserName() != null){
          return 1;
      }

      return 0;
    }

    @PostMapping("/deleteUser")
    public int deleteUser(){
       return 1;
    }


}
