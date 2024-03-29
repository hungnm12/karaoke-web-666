import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecordingService } from './recording.service';
import * as RecordRTC from 'recordrtc';
import 'webrtc-adapter';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subject, catchError } from 'rxjs';
@Component({
  selector: 'app-recordbutton',
  templateUrl: './recordbutton.component.html',
  styleUrls: ['./recordbutton.component.css']
})
export class RecordbuttonComponent {

  scores:String='';
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

  recordUrl:String='';

  recordingService: RecordingService;
  getMediaStream() {
    return this._mediaStream.asObservable();
  }

  getBlob() {
    return this._blob.asObservable();
  }
  constructor(private http: HttpClient,private domSanitizer:DomSanitizer,recordingService: RecordingService) { 
    this.recordingService = recordingService;
  }
//   startRecording() {
// this.handleRecording();
//   }

onRecordClick() {
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  
  // Check if a file has been selected
  if (fileInput.files && fileInput.files.length > 0) {
    // Get the selected file from the file input element
    const file = fileInput.files[0];
    // Specify the file directory path
    const fileDir = './save_records';
    // Call the createRecording method of the Angular service
    this.recordingService.createRecording(file, fileDir).subscribe(
      response => {
        console.log('Recording created successfully. ID: ' + response);
      },
      error => {
        console.log('Failed to create recording: ' + error);
      }
    );
  } 
}
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
  uploadFile(file: File): Observable<any>  {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileDir','save_records')
   return this.http.post("http://localhost:8002/api/recordings/createRecording",formData);
    console.log("done")
    // return this.http.post("http://localhost:8002/api/videos/post", formData).toPromise();
  }
   createRecording(): Promise<any>{
    const formData =new FormData();
    formData.append('file', this.recordRTC.getBlob());
    this.downloadRecording()
    return this.http.post<any>(`http://localhost:8002/api/videos/post`,formData ).toPromise();
  }
   getRecording(id?: String ): Promise<any>{
    return this.http.post("http://localhost:8002/api/recordings/getRecording",'64abc8492e2b4074dc9e8be8', { responseType: 'text' 
}).toPromise()
  //  await res.forEach(element => {
  //     var x = JSON.parse(element);
  //     this.recordUrl=x['recordUrl']
  //   });
    
  }

  downloadRecording() {
    this.uploadFile(this.recordRTC.getBlob())
    RecordRTC.invokeSaveAsDialog(this.recordRTC.getBlob(), `${Date.now()}.wav`);
    
  }
  score() {
    this.scores = Math.floor(Math.random() * 101).toString();
  }
  clearRecording() {
    this.blob = null;
    this.recorder = null;
    this.mediaStream = null;
  }
  async handleRecording() {
   this.autio= navigator.mediaDevices.getUserMedia({audio:true})
   
    this._mediaStream.next(this.mediaStream);
    this.recorder = new RecordRTC(this.autio, { type: 'video' });
    this.recorder.startRecording();
  }

  private mediaRecorder: any;
  private recordedChunks: any[] = [];

}
 
  
  
  
  
  
  
