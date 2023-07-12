import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  [x: string]: any;
  isEdit: boolean = false;
  constructor( private router: Router) { } 

  onEdit() {
    this.isEdit = true;
  }


  onLogOut() {
    this.router.navigate(['signin'])
    // this.location.reload()
  }
  isSave: boolean = false;
  onSave(){
    this.isSave = true; 
  }

}
