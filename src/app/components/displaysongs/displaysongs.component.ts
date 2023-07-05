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
      title: 'Song 1',
      artist: 'Artist 1',
      duration: '3:30',
      imageUrl: 'path/to/song1-image.jpg',
      videoUrl: 'path/to/song1-video.mp4',
    },
    {
      id: '2',
      title: 'Song 2',
      artist: 'Artist 2',
      duration: '4:15',
      imageUrl: 'path/to/song2-image.jpg',
      videoUrl: 'path/to/song2-video.mp4',
    },
    {
      id: '3',
      title: 'Song 3',
      artist: 'Artist 3',
      duration: '2:50',
      imageUrl: 'path/to/song3-image.jpg',
      videoUrl: 'path/to/song3-video.mp4',
    },
    // Add more songs as needed
  ];
  
  
  selectedSong: any; // Variable to store the selected song

  constructor(private router: Router) {}

  selectSong(song: any): void {
    this.router.navigate(['/song', song.id]);
  }
}