import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Song {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  videoUrl: string;
  genre: string;
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
    // Add more songs as needed
  ];

  constructor(private http: HttpClient) { }
 
  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.apiURL}/getAllSongs`);
  }

  addSong(image: File, video: File, song: Object): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('video', video);
    formData.append('song', JSON.stringify(song));
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post<any>(`${this.apiURL}/add`, formData, { headers });
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
  
}