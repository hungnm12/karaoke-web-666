import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  isEdit: boolean = false;

  onEdit() {
    this.isEdit = true;
  }


  
  isSave: boolean = false;
  onSave(){
    this.isSave = true; 
  }

}
