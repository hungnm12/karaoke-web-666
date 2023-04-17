package com.SpringVoiceRecord.VoiceRecord.Service;

import com.SpringVoiceRecord.VoiceRecord.DTO.UserDTO;
import com.SpringVoiceRecord.VoiceRecord.DTO.UserSaveDTO;
import com.SpringVoiceRecord.VoiceRecord.DTO.UserUpdateDTO;

import java.util.List;

public interface UserService {

    String addUser(UserSaveDTO userSaveDTO);

    List<UserDTO> getAllUser();

    String updateUsers(UserUpdateDTO userUpdateDTO);

    boolean deleteUser(int id);
}
