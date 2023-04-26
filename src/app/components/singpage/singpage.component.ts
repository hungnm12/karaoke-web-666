import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-singpage',
  templateUrl: './singpage.component.html',
  styleUrls: ['./singpage.component.css']
})
export class SingpageComponent {


  constructor(private http: HttpClient) {}

  record() {
    this.http.post('http://localhost:8080/recordings', {}).subscribe(Response => {
      console.log(Response);
    });
  }


  play(id: number) {
    this.http.get(`http://localhost:8080/recordings/${id}/play`, { responseType: 'blob' }).subscribe((response: Blob) => {
      const url = window.URL.createObjectURL(response);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = url;
      a.download = `recording-${id}.mp3`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
