import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Song1 {
  id: string;
  title: string;
  artist: string;
  duration: string;
  imageUrl: string;
  videoUrl: string;
  genre: string;
}

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiURL = 'http://localhost:8002';
  songs: Song1[] = [
    {
      id: '1',
      title: 'Thang tu la loi noi doi cua em',
      artist: 'Ha Anh Tune',
      duration: '5:00',
      imageUrl: '../../../assets/imgs/Áp_phích_phim_Tháng_Tư_là_lời_nói_dối_của_em.jpg',
      videoUrl: '../../../assets/imgs/videohome3.mp4',
      genre: 'Ballad'
    },
    {
      id: '2',
      title: 'Flower',
      artist: 'Huan Hoa Tu',
      duration: '4:15',
      imageUrl: '../../../assets/imgs/imgtest.png',
      videoUrl: '../../../assets/imgs/flower666.mp4',
      genre: 'Pop'
    },
    // Add more songs as needed
  ];

  constructor(private http: HttpClient) { }
  uploadSong(formData: FormData): Observable<Song1> {
    const uploadURL = `${this.apiURL}/songs/upload`;
    return this.http.post<Song1>(uploadURL, formData);
  }

  getAllSongs(): Observable<Song1[]> {
    const songsURL = `${this.apiURL}/songs`;
    return this.http.get<Song1[]>(songsURL);
  }
}