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
  recordingS : RecordingService;
  
  getMediaStream() {
    return this._mediaStream.asObservable();
  }

  getBlob() {
    return this._blob.asObservable();
  }
  constructor(private http: HttpClient,recordingService :RecordingService) { 
    this.recordingS = recordingService;
  }
//   startRecording() {
// this.handleRecording();
//   }
async startRecording()  {
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
  // uploadFile(file: File): Observable<any>  {
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('fileDir','save_records')
  //  return this.http.post("http://localhost:8002/api/recordings/createRecording",formData);
  //   console.log("done")
  //   // return this.http.post("http://localhost:8002/api/videos/post", formData).toPromise();
  // }
   createRecording(): Promise<any>{
    const formData =new FormData();
    formData.append('file', this.recordRTC.getBlob());
    // formData.append('fileDir', 'save_records');
    // const headers = new HttpHeaders({
    //   'Accept': 'application/json'
    // });

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

  async downloadRecording() {
  // await this.createRecording(this.recordRTC.getBlob());
    // this.createRecording(this.recordRTC.getBlob())
    RecordRTC.invokeSaveAsDialog(this.recordRTC.getBlob(), `${Date.now()}.wav`);
    
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
 
  
  
  
  
  
  
