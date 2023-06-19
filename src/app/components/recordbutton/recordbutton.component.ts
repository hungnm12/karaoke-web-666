import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecordingService } from './recording.service';

import 'webrtc-adapter';
@Component({
  selector: 'app-recordbutton',
  templateUrl: './recordbutton.component.html',
  styleUrls: ['./recordbutton.component.css']
})
export class RecordbuttonComponent {

  // private mediaStream: MediaStream;
  // private recordRTC: RecordRTC;
  // private audioBlob: Blob;
  // public recording = false;

  // public onRecord() {
  //   if (this.recording) {
  //     this.stopRecording();
  //     this.recording = false;
  //   } else {
  //     this.startRecording();
  //     this.recording = true;
  //   }
  // }

  // public onPlay() {
  //   const audioUrl = URL.createObjectURL(this.audioBlob);
  //   const audioElement = new Audio(audioUrl);
  //   audioElement.play();
  // }

  // private startRecording() {
  //   navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  //     this.mediaStream = stream;
  //     this.recordRTC = RecordRTC(stream, {
  //       type: 'audio',
  //     });
  //     this.recordRTC.startRecording();
  //   });
  // }

  // private stopRecording() {
  //   this.recordRTC.stopRecording(() => {
  //     this.audioBlob = this.recordRTC.getBlob();
  //     this.mediaStream.getTracks().forEach((track) => track.stop());
  //   });
  // }


  constructor(private http: HttpClient) { }

  private mediaRecorder: any;
  private recordedChunks: any[] = [];
  
  onRecordButtonClick() {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        this.mediaRecorder = new MediaRecorder(stream);
  
        this.mediaRecorder.addEventListener('dataavailable', (event: any) => {
          this.recordedChunks.push(event.data);
        });
  
        this.mediaRecorder.addEventListener('stop', () => {
          const blob = new Blob(this.recordedChunks, { type: 'audio/wav' });
  
          const formData = new FormData();
          formData.append('file', blob, 'recorded_audio.wav');
          formData.append('fileDir','save_records'); // Replace 'your-file-directory' with the desired file directory
  
          this.http.post<any>('/createRecording', formData).subscribe(
            (response) => {
              console.log('Recording created successfully. ID: ' + response);
              // Handle success, e.g., display a success message
            },
            (error) => {
              console.error('Failed to create recording:', error);
              // Handle error, e.g., display an error message
            }
          );
        });
  
        this.mediaRecorder.start();
      })
      .catch((error) => {
        console.error('Failed to access user media:', error);
        // Handle error, e.g., display an error message
      });
  }
  
  onStopButtonClick() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
  } 
}
 
  
  
  
  
  
  
