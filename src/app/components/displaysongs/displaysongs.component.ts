import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-displaysongs',
  templateUrl: './displaysongs.component.html',
  styleUrls: ['./displaysongs.component.css']
})
export class DisplaysongsComponent {
  songs: any[];

  constructor(private router: Router, private songService: SongService) {
    this.songs = this.songService.songs;
  }

  selectSong(song: any): void {
    this.router.navigate(['/singpage', song.id]);
  }
}