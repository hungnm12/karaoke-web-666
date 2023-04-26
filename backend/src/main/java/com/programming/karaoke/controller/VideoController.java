package com.programming.karaoke.controller;


import com.programming.karaoke.service.VideoServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/videos/")
public class VideoController {
    private final VideoServices videoServices;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void uploadVideo(@RequestParam("file")MultipartFile file)
    {
        videoServices.uploadVideo(file);
    }
}
