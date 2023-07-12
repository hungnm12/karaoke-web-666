  import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  imageUrl: string ;
  videoUrl: string ;
  
}

  @Injectable({
    providedIn: 'root'
  })
  export class SongService {
    private apiURL = 'http://localhost:8002/api/songs';
  

    constructor(private http: HttpClient, private authService: AuthService) { }
  
    getAllSongs(): Observable<Song[]> {
      return this.http.get<Song[]>(`${this.apiURL}/getAllSongs`);
    }
  
    getSongById(id: string): Observable<Song> {
      return this.http.get<Song>(`${this.apiURL}/getSong/${id}`);
    }
  
    createSong(song: Song, imageFile: File, videoFile: File): Observable<Song> {
      const formData = new FormData();
      formData.append('title', song.title);
      formData.append('artist', song.artist);
      formData.append('genre', song.genre);
      formData.append('image', imageFile);
      formData.append('video', videoFile);
      return this.http.post<Song>(`${this.apiURL}/add`, formData);
    }
  
    updateSong(id: string, song: Song): Observable<Song> {
      return this.http.put<Song>(`${this.apiURL}/update/${id}`, song);
    }
  
    deleteSong(id: string): Observable<any> {
      return this.http.delete(`${this.apiURL}/delete/${id}`);
    }
    getSongsByGenre(genre: string): Observable<Song[]> {
      const url = `${this.apiURL}/?genre=${genre}`;
      return this.http.get<Song[]>(url);
    }
    searchSongs(query: string): Observable<Song[]> {
      const params = new HttpParams().set('q', query);
      return this.http.get<Song[]>(`${this.apiURL}/search`, { params });
  }
  }
  