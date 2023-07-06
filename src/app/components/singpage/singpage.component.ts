import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/song.service';
@Component({
  selector: 'app-singpage',
  templateUrl: './singpage.component.html',
  styleUrls: ['./singpage.component.css']
})
export class SingpageComponent implements OnInit {
  selectedSong: any;
  songs: any[];

  constructor(private route: ActivatedRoute, private songService: SongService) {
    this.songs = this.songService.songs;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const songId = params['id'];
      // Find the selected song using the songId
      this.selectedSong = this.songs.find(song => song.id === songId);
    });
  }
}