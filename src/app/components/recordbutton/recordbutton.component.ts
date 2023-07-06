import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecordingService } from './recording.service';
import * as RecordRTC from 'recordrtc';
import 'webrtc-adapter';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-recordbutton',
  templateUrl: './recordbutton.component.html',
  styleUrls: ['./recordbutton.component.css']
})
@Injectable()
export class RecordbuttonComponent {

  // private mediaStream: MediaStream;
  // private recordRTC: RecordRTC;
  // private audioBlob: Blob;
  // public recording = false;
  private mediaStream: any;
  private autio:any;
  private recorder: any;
  private blob: any;
  private _mediaStream = new Subject<any>();
  private _blob = new Subject<any>();
  recordRTC: any;
  stream: any;
  audioSource: any;
  recording = false;
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
  sanitize(url :string){
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  getMediaStream() {
    return this._mediaStream.asObservable();
  }

  getBlob() {
    return this._blob.asObservable();
  }
  constructor(private http: HttpClient,private domSanitizer:DomSanitizer) { }
//   startRecording() {
// this.handleRecording();
//   }
startRecording() {
  this.recording = true;
  const audioConstraints = {
    audio: true,
    video: false
  };
  navigator.mediaDevices.getUserMedia(audioConstraints).then((mediaStream) => {
    this.stream = mediaStream;
    this.recordRTC = new RecordRTC(mediaStream, {
      type: 'audio'
    });
    this.recordRTC.startRecording();
  }).catch((error) => {
    console.log(error);
  });
}
stopRecording() {
  this.recording = false;
  this.recordRTC.stopRecording(() => {
    this.stream.stop();
    const blob = this.recordRTC.getBlob();
    const audioURL = URL.createObjectURL(blob);
    this.audioSource = audioURL;
  });
}
  // stopRecording() {
  //   if (!this.recorder) {
  //     return;
  //   }
  //   this.recorder.stopRecording(() => {
  //     this.blob = this.recorder.getBlob();
  //     this._blob.next(URL.createObjectURL(this.blob));
  //     this.autio.stopRecording();
  //     this.recorder.destroy();
  //     this.autio = null;
  //     this.recorder = null;
  //   })
  // }
  saveAudio() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };
    xhr.open('POST', 'your-audio-saving-endpoint', true);
    const formData = new FormData();
    formData.append('audio', this.recordRTC.getBlob());
    xhr.send(formData);
  }
  downloadRecording() {
    RecordRTC.invokeSaveAsDialog(this.blob, `${Date.now()}.webm`);
  }

  clearRecording() {
    this.blob = null;
    this.recorder = null;
    this.mediaStream = null;
  }
  async handleRecording() {
    // @ts-ignore
    // this.mediaStream = await navigator.mediaDevices.getDisplayMedia({
    //   audio: true,
    //   video: true
    // });
   this.autio= navigator.mediaDevices.getUserMedia({audio:true})
   
    this._mediaStream.next(this.mediaStream);
    this.recorder = new RecordRTC(this.autio, { type: 'video' });
    this.recorder.startRecording();
  }

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
 
  
  
  
  
  
  
