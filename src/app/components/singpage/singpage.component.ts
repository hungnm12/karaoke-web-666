import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-singpage',
  templateUrl: './singpage.component.html',
  styleUrls: ['./singpage.component.css']
})
export class SingpageComponent implements OnInit {

  selectedSong: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const songId = params.get('id');
      if (songId) {
        this.selectedSong = this.getSongById(songId);
      }
    });
  }

  getSongById(id: string): any {
    // Implement your logic to retrieve the selected song based on the ID
    return {
      id: '1',
      title: 'Song 1',
      artist: 'Artist 1',
      duration: '3:30',
      imageUrl: 'path/to/song1-image.jpg',
      videoUrl: 'path/to/song1-video.mp4',
    };
  }

}
