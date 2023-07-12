import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Song, SongService } from 'src/app/song.service';

@Component({
  selector: 'app-displaysongs',
  templateUrl: './displaysongs.component.html',
  styleUrls: ['./displaysongs.component.css'],
  
})

export class DisplaysongsComponent implements OnInit {
  @Input() songs: Song[] = [];

  constructor(private router: Router, private songService: SongService, ) {
    
  }


  ngOnInit(): void {
    this.getAllSongs();
  }

  getAllSongs(): void {
    this.songService.getAllSongs()
      .subscribe(songs => {
        this.songs = songs;
      });
  }

  selectSong(song: any): void {
    this.router.navigate(['/singpage', song.id]);
  }
}