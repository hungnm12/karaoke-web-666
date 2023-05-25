// import { Component } from '@angular/core';
// import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
// import { VideoService } from 'src/app/services/video services/video.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// @Component({
//   selector: 'app-upload-video',
//   templateUrl: './upload-video.component.html',
//   styleUrls: ['./upload-video.component.css']
// })
// export class UploadVideoComponent {

//   public files: NgxFileDropEntry[] = [];
//   fileUploaded: boolean = false;
//   fileEntry: FileSystemFileEntry | undefined;


//   constructor(private videoService: VideoService){

//   }
//   public dropped(files: NgxFileDropEntry[]) {
//     this.files = files;
//     for (const droppedFile of files) {

//       // Is it a file?
//       if (droppedFile.fileEntry.isFile) {
//         this.fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
//         this.fileEntry.file((file: File) => {

//           // Here you can access the real file
//           console.log(droppedFile.relativePath, file);
//           this.fileUploaded = true;
          
//           // You could upload it like this:
//           const formData = new FormData()
//           formData.append('logo',file, rela)

//           // Headers
//           const headers = new HttpHeaders({
//             'security-token': 'mytoken'
//           })

//           this.http.post('https://8002/api/upload', formData, { headers: headers, responseType: 'blob' })
//           .subscribe(data => {
            
//           })
          

//         });
//       } else {
//         // It was a directory (empty directories are added, otherwise only files)
//         const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
//         console.log(droppedFile.relativePath, fileEntry);
//       }
//     }
//   }

//   public fileOver(event: any){
//     console.log(event);
//   }

//   public fileLeave(event: any){
//     console.log(event);
//   }
//   uploadVideo(){
//     if(this.fileEntry !== undefined){
//       // this.videoService.uploadVideo(this.fileEntry);

//       this.fileEntry.file(file => {
//         this.videoService.uploadVideo(file).subscribe(data =>{
//           console.log("Video uploaded successfully");
//         })
//       } )
     
//     }
//   }
// }