import { Component, OnInit } from '@angular/core';
import { SongService, Song } from 'src/app/song.service';

interface Genre {
  name: string;
  songs: Song[];
}
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  songs: Song[] = [];
  genres: Genre[] = [
    
    { name: 'Ballad', songs: [] },
    { name: 'Blue', songs: [] },
    { name: 'Pop', songs: [] },
    { name: 'Rap', songs: [] }
  ];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    
  }

  
}