import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Song, SongService } from 'src/app/song.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  query: string = '';
  songs: Song[] = [];

  constructor(private authService: AuthService, private songService: SongService, private router: Router) { }

  ngOnInit(): void {
  }

  search(): void {
    if (this.query.trim()) {
      this.songService.searchSongs(this.query)
        .subscribe(songs => this.songs = songs);
    } else {
      this.songs = [];
    }
  }

  goToSong(song: Song): void {
    this.router.navigate(['/song', song.id]);
  }
}
