import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
