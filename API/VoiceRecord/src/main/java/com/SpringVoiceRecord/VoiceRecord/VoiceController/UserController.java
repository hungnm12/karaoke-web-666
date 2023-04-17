package com.SpringVoiceRecord.VoiceRecord.VoiceController;


import com.SpringVoiceRecord.VoiceRecord.DTO.UserDTO;
import com.SpringVoiceRecord.VoiceRecord.DTO.UserSaveDTO;
import com.SpringVoiceRecord.VoiceRecord.DTO.UserUpdateDTO;
import com.SpringVoiceRecord.VoiceRecord.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserSaveDTO userSaveDTO){

        String id = userService.addUser(userSaveDTO);
        return id;
    }

    @GetMapping(path = "/getAllUser")
    public List<UserDTO> getAllUser() {
        List<UserDTO>allUsers = userService.getAllUser();
        return  allUsers;
    }

    @GetMapping(path = "/update")
    public String updateUser(@RequestBody UserUpdateDTO userUpdateDTO) {
        String id = userService.updateUsers(userUpdateDTO);
        return id;

    }

    @DeleteMapping(path = "/deleteuser/{id}")
    public String deleteUser(@PathVariable(value = "id") int id) {
        boolean deleteUser = userService.deleteUser(id);
        return "deleted";
    }

}
