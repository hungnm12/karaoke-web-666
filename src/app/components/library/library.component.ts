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
  pop:Song[]=[];
  rap:Song[] = [];
  ballad:Song[] = [];
  hiphop:Song[] = [];
  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) { }

  async ngOnInit(): Promise<void> {
  
    
    this.genre =await this.route.snapshot.paramMap.get('genre');
    if (this.genre) {
      this.songService.getSongsByGenre(this.genre)
        .subscribe(songs => this.songs = songs);
    } else {
      this.songService.getAllSongs()
        .subscribe(songs => this.songs = songs);
    }
   await this.getSongByGenre()
  }
  getSongByGenre(){
    for(let i = 0; i < this.songs.length; i)
    {
      if(this.songs[i].genre.toLowerCase()=="pop")
      {
        this.pop.push(this.songs[i])

      }
      else if(this.songs[i].genre.toLowerCase()=="rap")
      {
        this.rap.push(this.songs[i])
      }
      else if(this.songs[i].genre.toLowerCase()=="ballad")
      {
        this.ballad.push(this.songs[i])
      }
      else {
        this.hiphop.push(this.songs[i])
      }
    }
  }
}