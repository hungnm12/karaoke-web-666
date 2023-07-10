import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class RecordingService {
    private baseUrl = 'http://localhost:8002'; // Replace with your Java Spring Boot API URL
  
    constructor(private http: HttpClient) {}
  
    // Implement the methods to interact with the API endpoints
    // For example, createRecording and playRecording methods

    createRecording(file: File,fileDir: string): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        formData.append('fileDir', fileDir);
      
        return this.http.post<any>(`${this.baseUrl}/createRecording`, formData);
      }

      
  }