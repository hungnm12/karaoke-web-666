import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaysongs',
  templateUrl: './displaysongs.component.html',
  styleUrls: ['./displaysongs.component.css']
})

export class DisplaysongsComponent {
  songs = [
    {
      id: '1', // Unique identifier for the song
      title: 'Gap Me Trong Mo',
      artist: 'Nothing',
      duration: '9p',
      imageUrl: '../../../assets/imgs/disc1.jpg',
      videoUrl: '../../../assets/imgs/videohome2.mp4',
    },
    {
      id: '2',
      title: 'Thu Cuối',
      artist: 'Mr T x Yanbi x Hằng Bingboong',
      duration: '5p',
      imageUrl: '../../../assets/imgs/thucuoi.jpg',
      videoUrl: '../../../assets/imgs/videohome-thucuoi.mp4',
    },
    {
      id: '3',
      title: 'Đào Nương',
      artist: 'Hoàng Vương',
      duration: '3p',
      imageUrl: '../../../assets/imgs/daonuong.png',
      videoUrl: '../../../assets/imgs/videohome-daonuong.mp4',
    },
    {
      id: '4', // Unique identifier for the song
      title: 'Gap Me Trong Mo',
      artist: 'Nothing',
      duration: '9p',
      imageUrl: '../../../assets/imgs/disc1.jpg',
      videoUrl: '../../../assets/imgs/videohome2.mp4',
    },
    {
      id: '5',
      title: 'That Girl',
      artist: 'XOXXX',
      duration: '4:15',
      imageUrl: '../../../assets/imgs/imgtest.png',
      videoUrl: '../../../assets/imgs/videohome1.mp4',
    },
    {
      id: '6',
      title: 'Roller Coaster',
      artist: 'NMIXX',
      duration: '2:50',
      imageUrl: '../../../assets/imgs/music_background.jpg',
      videoUrl: '../../../assets/imgs/videohome1.mp4',
    },
    {
      id: '7', // Unique identifier for the song
      title: 'Gap Me Trong Mo',
      artist: 'Nothing',
      duration: '9p',
      imageUrl: '../../../assets/imgs/disc1.jpg',
      videoUrl: '../../../assets/imgs/videohome2.mp4',
    },
    {
      id: '8',
      title: 'That Girl',
      artist: 'XOXXX',
      duration: '4:15',
      imageUrl: '../../../assets/imgs/imgtest.png',
      videoUrl: '../../../assets/imgs/videohome1.mp4',
    },
    {
      id: '9',
      title: 'Roller Coaster',
      artist: 'NMIXX',
      duration: '2:50',
      imageUrl: '../../../assets/imgs/music_background.jpg',
      videoUrl: '../../../assets/imgs/videohome1.mp4',
    },
    {
      id: '10', // Unique identifier for the song
      title: 'Gap Me Trong Mo',
      artist: 'Nothing',
      duration: '9p',
      imageUrl: '../../../assets/imgs/disc1.jpg',
      videoUrl: '../../../assets/imgs/videohome2.mp4',
    },
    {
      id: '11',
      title: 'That Girl',
      artist: 'XOXXX',
      duration: '4:15',
      imageUrl: '../../../assets/imgs/imgtest.png',
      videoUrl: '../../../assets/imgs/videohome1.mp4',
    },
    {
      id: '12',
      title: 'Roller Coaster',
      artist: 'NMIXX',
      duration: '2:50',
      imageUrl: '../../../assets/imgs/music_background.jpg',
      videoUrl: '../../../assets/imgs/videohome1.mp4',
    },
    // Add more songs as needed
  ];


  selectedSong: any; // Variable to store the selected song

  constructor(private router: Router) { }

  selectSong(song: any): void {
    this.router.navigate(['/song', song.id]);
  }
}