import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Song1 } from '../song.service';
import { Observable } from 'rxjs/internal/Observable';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-upload-song',
  templateUrl: './upload-song.component.html',
  styleUrls: ['./upload-song.component.css']
})

export class UploadSongComponent implements OnInit {
  // song: Song = {
  //   id: 0,
  //   title: '',
  //   artist: '',
  //   genre: '',
  //   songImage: '',
  //   songBeat: '',
  //   songVideo: '',
  //   lyric: ''
  // };
  // songImageFile!: File;
  // songBeatFile!: File;
  // songVideoFile!: File;
  // lyricFile!: File;

  // constructor(private songService: SongService) { }

  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('title', this.song.title);
  //   formData.append('artist', this.song.artist);
  //   formData.append('genre', this.song.genre);
  //   formData.append('songImage', this.songImageFile);
  //   formData.append('songBeat', this.songBeatFile);
  //   formData.append('songVideo', this.songVideoFile);
  //   formData.append('lyric', this.lyricFile);
  //   this.songService.createSong(formData).subscribe(
  //     (song: Song) => {
  //       console.log('Song created successfully:', song);
  //       // Navigate to the song details page or display a success message
  //     },
  //     (error) => {
  //       console.error('Error creating song:', error);
  //       // Display an error message
  //     }
  //   );
  // }
  // onSongImageSelected(event: any) {
  //   this.songImageFile = event.target.files[0];
  // }

  // onSongBeatSelected(event: any) {
  //   this.songBeatFile = event.target.files[0];
  // }

  // onSongVideoSelected(event: any) {
  //   this.songVideoFile = event.target.files[0];
  // }

  // onLyricSelected(event: any) {
  //   this.lyricFile = event.target.files[0];
  // }


  songForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    artist: ['', Validators.required],
    genre: ['', Validators.required],
    image: ['', Validators.required],
    video: ['', Validators.required]
  });
  imageFile: File | null = null;
  videoFile: File | null = null;

  constructor(private fb: FormBuilder, private songService: SongService) { }

  ngOnInit(): void {
  }

  onImageSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files![0];
    if (file != null) {
      this.imageFile = file;
      this.songForm.get('image')!.setValue(file.name);
    }
  }
  
  onVideoSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files![0];
    if (file != null) {
      this.videoFile = file;
      this.songForm.get('video')!.setValue(file.name);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.songForm.get('title')?.value ?? '');
    formData.append('artist', this.songForm.get('artist')?.value ?? '');
    formData.append('genre', this.songForm.get('genre')?.value ?? '');
    if (this.imageFile != null) {
      formData.append('image', this.imageFile);
    }
    if (this.videoFile != null) {
      formData.append('video', this.videoFile);
    }
    this.uploadSong(formData).subscribe(
      (song: Song1) => {
        console.log('Song uploaded:', song);
        this.songForm.reset();
        this.imageFile = null;
        this.videoFile = null;
      },
      (error) => {
        console.error('Error uploading song:', error);
      }
    );
  }

  uploadSong(formData: FormData): Observable<Song1> {
    return this.songService.uploadSong(formData);
  }
}
