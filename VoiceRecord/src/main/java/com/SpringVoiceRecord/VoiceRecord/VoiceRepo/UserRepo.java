package com.SpringVoiceRecord.VoiceRecord.VoiceRepo;

import com.SpringVoiceRecord.VoiceRecord.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
}
