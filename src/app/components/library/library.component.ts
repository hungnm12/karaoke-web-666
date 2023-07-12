import { Component, OnInit } from '@angular/core';
import { SongService, Song } from 'src/app/song.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  songs: Song[] = [];
  genre: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.genre = this.route.snapshot.paramMap.get('genre');
    if (this.genre) {
      this.songService.getSongsByGenre(this.genre)
        .subscribe(songs => this.songs = songs);
    } else {
      this.songService.getAllSongs()
        .subscribe(songs => this.songs = songs);
    }
  }
  
}