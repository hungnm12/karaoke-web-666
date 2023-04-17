package com.SpringVoiceRecord.VoiceRecord.VoiceController;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("api/v1/voicerecord")
public class VoiceController {


    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/record")
    public void record() {

    }

}
