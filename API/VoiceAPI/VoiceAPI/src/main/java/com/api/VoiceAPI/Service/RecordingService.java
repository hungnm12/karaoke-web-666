package com.api.VoiceAPI.Service;

import com.api.VoiceAPI.Repository.RecordingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Service
public class RecordingService {

  @Autowired
  private RecordingRepository recordingRepository;

  private MediaRecorder mediaRecorder;
  private ByteArrayOutputStream byteArrayOutputStream;

  public void startRecording() throws IOException {
    if (mediaRecorder != null) {
      throw new IllegalAccessError("Recording already in process");
    }

    mediaRecorder = new MediaRecorder();

    ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    mediaRecorder.setOutputFile(outputStream.getFD());

    mediaRecorder.setAudioSource(MediaRecorder.AudioSource.DEFAULT);
    mediaRecorder.setOutputFormat(MediaRecorder.OutputFormat.MPEG_4);
    mediaRecorder.setAudioEncoder(MediaRecorder.AudioEncoder.AAC);

    mediaRecorder.prepare();
    mediaRecorder.start();
  }


}

