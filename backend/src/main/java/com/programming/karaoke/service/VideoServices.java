package com.programming.karaoke.service;

import com.programming.karaoke.model.Video;
import com.programming.karaoke.repository.VideoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@Service
//VideoServices chứa logic tải video
public class VideoServices {
private final S3Service s3Service;
private final VideoRepository videoRepository;
public void uploadVideo(MultipartFile multipartFile){
//    Upload file to aws s3
   String videoUrl= s3Service.uploadFile(multipartFile);
   //Sau khi upload video lên aws , set url cho video ,rồi lưu vào database
   var video = new Video();
   video.setUrl(videoUrl);

   videoRepository.save(video);


}
}
