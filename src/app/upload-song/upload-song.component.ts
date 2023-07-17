import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Song} from '../song.service';
import { Observable } from 'rxjs/internal/Observable';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-upload-song',
  templateUrl: './upload-song.component.html',
  styleUrls: ['./upload-song.component.css']
})

export class UploadSongComponent implements OnInit {

  song: Song = {
    id: '',
    title: '',
    artist: '',
    imageUrl: '',
    videoUrl: '',
    genre: '',
    beatUrl: '',
    lyric: ''
  };
  isEditing = false;
  imageFile: File | null = null;
  videoFile: File | null = null;
  beatFile: File  | null = null;
  lyricFile: File | null = null;
  successMessage = '';
  errorMessage = '';
  songs: Song[] = [];
  constructor( private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getAllSongs()
    .subscribe((songs) => {
      this.songs = songs;
    });
  
  }
  deleteSong(id: string): void {
    if (confirm('Are you sure you want to delete this song?')) {
      this.songService.deleteSong(id)
        .subscribe(() => {
          this.successMessage = 'Song deleted successfully';
          this.errorMessage = '';
          this.songs = this.songs.filter((song) => song.id !== id);
        }, (error) => {
          this.successMessage = '';
          this.errorMessage = 'Failed to delete song';
        });
    }
  }

  editSong(song: Song): void {
    this.isEditing = true;
    this.song = song;
  }

  onImageSelected(event: any): void {
    this.imageFile = event.target.files[0];
  }

  onVideoSelected(event: any): void {
    this.videoFile = event.target.files[0];
  }
  onBeatSelected(event: any) : void {
    this.beatFile = event.target.files[0];
  }
  onLyricSelected(event: any) : void {
    this.lyricFile  = event.target.files[0];
  }


  addSong(): void {
    this.songService.createSong(this.song, this.imageFile!, this.videoFile!, this.beatFile!, this.lyricFile!)
      .subscribe(() => {
        this.successMessage = 'Song added successfully';
        this.errorMessage = '';
        this.songService.getAllSongs()
        .subscribe((songs) => {
          this.songs = songs;
        });
      }, (error) => {
        this.successMessage = '';
        this.errorMessage = 'Failed to add song';
      });
  }


  cancelForm(): void {
    // Reset form data
    this.song = {
      id: '',
      title: '',
      artist: '',
      imageUrl: '',
      videoUrl: '',
      genre: '',
      beatUrl: '',
      lyric: ''
    };
    this.isEditing = false;
    this.imageFile = null;
    this.videoFile = null;
    this.successMessage = '';
    this.errorMessage = '';
  }
}
