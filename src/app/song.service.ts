import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs = [
    {
      id: '1',
      title: 'Thang tu la loi noi doi cua em',
      artist: 'Ha Anh Tune',
      duration: '5:00',
      imageUrl: '../../../assets/imgs/Áp_phích_phim_Tháng_Tư_là_lời_nói_dối_của_em.jpg',
      videoUrl: '../../../assets/imgs/videohome3.mp4',
    },
    {
      id: '2',
      title: 'Flower',
      artist: 'Huan Hoa Tu',
      duration: '4:15',
      imageUrl: '../../../assets/imgs/imgtest.png',
      videoUrl: '../../../assets/imgs/flower666.mp4',
    },
    // {
    //   id: '3',
    //   title: 'Roller Coaster',
    //   artist: 'NMIXX',
    //   duration: '2:50',
    //   imageUrl: '../../../assets/imgs/music_background.jpg',
    //   videoUrl: '../../../assets/imgs/videohome1.mp4',
    // }
    // Add more songs as needed
  ];

  constructor() { }
}
