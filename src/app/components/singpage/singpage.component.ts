import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Song, SongService } from 'src/app/song.service';
@Component({
  selector: 'app-singpage',
  templateUrl: './singpage.component.html',
  styleUrls: ['./singpage.component.css']
})
export class SingpageComponent implements OnInit {
  selectedSong: Song | undefined;
  isAudioPlaying = false;
  constructor(private route: ActivatedRoute, private songService: SongService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const songId = params['id'];
      // Call the SongService to get the selected song based on the ID
      this.songService.getAllSongs().subscribe((songs) => {
        this.selectedSong = songs.find(song => song.id === songId);
      });
    });
  }
  toggleAudioPlayback(audioPlayer: HTMLAudioElement): void {
    if (this.isAudioPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    this.isAudioPlaying = !this.isAudioPlaying;
  }
}

