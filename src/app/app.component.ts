import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'karaoke-practice-website';

  constructor(private dataService: DataService){}

  ngOnInit(): void{
    this.dataService.getUser().subscribe((data) => { console.log('AppComponent', data); }
    )
  }
}

