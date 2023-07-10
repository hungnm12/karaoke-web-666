import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../upload-song/upload-song.component';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private apiUrl = 'http://localhost:8002/api/songs';

  constructor(private http: HttpClient) { }

  createSong(formData: FormData): Observable<Song> {
    return this.http.post<Song>(`${this.apiUrl}/create`, formData);
  }

}