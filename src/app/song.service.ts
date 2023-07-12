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
    songs: Song[] = [
      {
        id: '1',
        title: 'Thang tu la loi noi doi cua em',
        artist: 'Ha Anh Tune',
      
        imageUrl: '../../../assets/imgs/Áp_phích_phim_Tháng_Tư_là_lời_nói_dối_của_em.jpg',
        videoUrl: '../../../assets/imgs/videohome3.mp4',
        genre: 'Ballad'
      },
      {
        id: '2',
        title: 'Flower',
        artist: 'Huan Hoa Tu',
        
        imageUrl: '../../../assets/imgs/imgtest.png',
        videoUrl: '../../../assets/imgs/flower666.mp4',
        genre: 'Pop'
      },
      {
        id: '3',
        title: 'Thu Cuoi',
        artist: 'Hang Bing Bong,Mr A, Yanbi',
        
        imageUrl: '../../../assets/imgs/thucuoi.jpg',
        videoUrl: '../../../assets/imgs/videohome-thucuoi.mp4',
        genre: 'Pop'
      },
     
     
    ];

    constructor(private http: HttpClient, private authService: AuthService) { }
  
    getAllSongs(): Observable<Song[]> {
      return this.http.get<Song[]>(`${this.apiURL}/getAllSongs`);
    }

    // addSong(song: Song, imageFile: File, videoFile: File): Observable<Song> {
    //   const formData = new FormData();
    //   formData.append('title', song.title);
    //   formData.append('artist', song.artist);
    //   formData.append('genre', song.genre);
     
    //   formData.append('image', imageFile);
    //   formData.append('video', videoFile);
    //   return this.http.post<Song>(this.apiURL, formData);
    // }

    addSong(song: Song, imageFile: File, videoFile: File): Observable<Song> {
      const formData = new FormData();
      formData.append('title', song.title);
      formData.append('artist', song.artist);
      formData.append('genre', song.genre);
      
      formData.append('image', imageFile);
      formData.append('video', videoFile);
    
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + this.authService.getToken()
      });
    
      return this.http.post<Song>(this.apiURL, formData, { headers });
    }
    updateSong(id: string, image: File | null, video: File | null, song: Object): Observable<any> {
      const formData = new FormData();
      if (image) {
        formData.append('image', image);
      }
      if (video) {
        formData.append('video', video);
      }
      formData.append('song', JSON.stringify(song));
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      return this.http.put<any>(`${this.apiURL}/update/${id}`, formData, { headers });
    }

    deleteSong(id: string): Observable<any> {
      return this.http.delete<any>(`${this.apiURL}/delete/${id}`);
    }
    
    searchSongs(title: string, artist: string): Observable<Song[]> {
      const params = new HttpParams().set('title', title).set('artist', artist);
      return this.http.get<Song[]>(`${this.apiURL}/search`, { params });
    }
  }