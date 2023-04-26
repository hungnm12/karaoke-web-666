import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

interface User {
  name: string;
  job: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  listUser: Array<User> = [];

  constructor(
    private apiService: ApiService
  ){}

  ngOnInit(): void {    
    this.apiService.getUsers('1').subscribe((res: User[]) => {
      this.listUser = res;
      console.log('kiem tra list:', this.listUser);
      
    });

  }

}
