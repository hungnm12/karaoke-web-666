package com.SpringVoiceRecord.VoiceRecord.Service;

import com.SpringVoiceRecord.VoiceRecord.DTO.UserDTO;
import com.SpringVoiceRecord.VoiceRecord.DTO.UserSaveDTO;
import com.SpringVoiceRecord.VoiceRecord.DTO.UserUpdateDTO;
import com.SpringVoiceRecord.VoiceRecord.VoiceRepo.UserRepo;
import com.SpringVoiceRecord.VoiceRecord.entity.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class UserServiceIMPL implements UserService {

    @Autowired
    private UserRepo userRepo;
    @Override
    public String addUser(UserSaveDTO userSaveDTO) {

       User user = new User(
                userSaveDTO.getName(),
                userSaveDTO.getUsername(),
                userSaveDTO.getPassword(),
                userSaveDTO.getEmail(),
                userSaveDTO.getTel()

       );
        userRepo.save(user);
        return user.getName();
    }

    @Override
    public List<UserDTO> getAllUser() {
        List<User> getUsers = userRepo.findAll();
        List<UserDTO> userDTOList = new ArrayList<>();
        for (User a:getUsers) {
            UserDTO userDTO = new UserDTO(
                    a.getUserid(),
                    a.getName(),
                    a.getUsername(),
                    a.getPassword(),
                    a.getEmail(),
                    a.getTel()
            );
            userDTOList.add(userDTO);
        }
        return userDTOList;
    }

    @Override
    public String updateUsers(UserUpdateDTO userUpdateDTO) {

            if (userRepo.existsById(userUpdateDTO.getUserid())) {
                User user = userRepo.getById(userUpdateDTO.getUserid());


                user.setName(userUpdateDTO.getName());
                user.setUsername(userUpdateDTO.getUsername());
                user.setPassword(userUpdateDTO.getPassword());
                user.setEmail(userUpdateDTO.getEmail());
                user.setTel(userUpdateDTO.getTel());
                userRepo.save(user);
            }
            else {
                System.out.println("User ID does not exists");
            }
            return null;
    }

    @Override
    public boolean deleteUser(int id) {
        if (userRepo.existsById(id)) {
                userRepo.deleteById(id);
        }
        else {
            System.out.println("user cannot be found");
        }
        return true;
    }
}
