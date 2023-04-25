package com.api.VoiceAPI.Controller;


import com.api.VoiceAPI.Entity.Recording;
import com.api.VoiceAPI.Repository.RecordingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Optional;

import static org.aspectj.weaver.tools.cache.SimpleCacheFactory.path;

@RestController

@RequestMapping("/recordings")
public class VoiceRecordController {

  @Autowired
  private RecordingRepository recordingRepository;

  @PostMapping
  public ResponseEntity<?> createRecording(@RequestParam("file") MultipartFile file, @Value("${fileDir}") String fileDir) {
    try {
      AudioInputStream audioInputStream = AudioSystem.getAudioInputStream(file.getInputStream());
      AudioFormat format = audioInputStream.getFormat();
      long duration = (long) (audioInputStream.getFrameLength() / format.getFrameRate() * 1000);
      String name = file.getOriginalFilename();
      String filePath = fileDir + "/" + name;
      Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
      Recording recording = new Recording();
      recording.setName(name);
      recording.setFormat(String.valueOf(format));
      recording.setFilePath(filePath);
      recording.setDuration(duration);
      recordingRepository.save(recording);
      return ResponseEntity.ok().build();
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @GetMapping("/{id}/play")
  public ResponseEntity<byte[]> playRecording(@PathVariable("id") Long id) {
    Optional<Recording> optionalRecording = recordingRepository.findById(id);
    if (optionalRecording.isPresent()) {
      Recording recording = optionalRecording.get();
      try {
        Path filePath = Paths.get(getClass().getResource("/recordings" + recording.getName()).toURI());
        byte[] bytes = Files.readAllBytes(filePath);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        headers.setContentDisposition(ContentDisposition.builder("attachment").filename(recording.getName()).build());
        return new ResponseEntity<>(bytes, headers, HttpStatus.OK);
      } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

      }
    else {
      return ResponseEntity.notFound().build();
    }
  }
}
