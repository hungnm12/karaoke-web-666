import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient) { }

  uploadVideo(fileEntry: File){
    const formData = new FormData()
          formData.append('file', fileEntry, fileEntry.name)
    //http post call
    
    
    
    return this.httpClient.post("http://localhost:8080/api/video/ng ", formData);
  }
}
