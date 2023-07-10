import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecordingService } from './recording.service';
import * as RecordRTC from 'recordrtc';
import 'webrtc-adapter';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subject } from 'rxjs';
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

  recordUrl:String='';

  
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
  uploadFile(file: File): Observable<any>  {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileDir','save_records')
   return this.http.post("http://localhost:8002/api/recordings/createRecording",formData);
    console.log("done")
    // return this.http.post("http://localhost:8002/api/videos/post", formData).toPromise();
  }
  async getRecording(id: String){
    let res =await this.http.post("http://localhost:8002/api/recordings/getRecording",id,{responseType:"text"
});
   await res.forEach(element => {
      var x = JSON.parse(element);
      this.recordUrl=x['recordUrl']
    });
    
  }

  downloadRecording() {
    this.uploadFile(this.recordRTC.getBlob())
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
 
  
  
  
  
  
  
