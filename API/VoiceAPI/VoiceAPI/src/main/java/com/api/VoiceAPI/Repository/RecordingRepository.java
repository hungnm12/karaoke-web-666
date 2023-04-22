package com.api.VoiceAPI.Repository;

import com.api.VoiceAPI.Entity.Recording;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordingRepository  extends JpaRepository<Recording,Long> {

}
