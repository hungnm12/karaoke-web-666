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
      title: 'That Girl',
      artist: 'XOXXX',
      duration: '4:15',
      imageUrl: '../../../assets/imgs/imgtest.png',
      videoUrl: '../../../assets/imgs/videohome1.mp4',
    },
    {
      id: '3',
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