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


  constructor(private recordingService: RecordingService) {}

  createRecording() {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = '.wav'; // Modify the accepted file type as per your requirement

    inputElement.addEventListener('change', (event: any) => {
      const file = event.target.files[0];
      this.recordingService.createRecording(file).subscribe(
        () => {
          console.log('Recording created successfully!');
          // Handle success, such as displaying a success message or refreshing the recording list
        },
        (error) => {
          console.error('Error creating recording:', error);
          // Handle error, such as displaying an error message
        }
      );
    });

    inputElement.click();
  }

  playRecording() {
    const id = prompt('Enter recording ID:');
    if (id) {
      this.recordingService.playRecording(id).subscribe(
        (response: Blob) => {
          const url = URL.createObjectURL(response);
          const link = document.createElement('a');
          link.href = url;
          link.download = `recording_${id}.mp3`; // Modify the filename as per your requirement
          link.click();
          URL.revokeObjectURL(url);
        },
        (error) => {
          console.error('Error playing recording:', error);
          // Handle error, such as displaying an error message
        }
      );
    }
  }

}
