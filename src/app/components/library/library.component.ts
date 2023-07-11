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
    { name: 'Pop', songs: [] },
    { name: 'Rap', songs: [] },
    { name: 'Blue', songs: [] },
    { name: 'Ballad', songs: [] }
  ];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songs = this.songService.songs;
    this.filterSongsByGenre();
  }

  filterSongsByGenre(): void {
    this.genres.forEach(genre => {
      genre.songs = this.songs.filter(song => song.genre === genre.name);
    });
  }
}