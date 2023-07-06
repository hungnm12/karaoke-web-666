import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  fullName: string = '';
  emailAddress: string = '';
  password: string = '';
  telephoneNumber: string = '';

  token:String='';
  exist:String='';
  noticeIfUserExist:String='';
  constructor(private http: HttpClient,private cdr: ChangeDetectorRef, private router: Router) { } 
   async register() {
    
    const registerData = {
      emailAddress: this.emailAddress,
      password: this.password,
      telephoneNumber:this.telephoneNumber,
      fullName:this.fullName
    };

    try {
      let response =await this.http.post('http://localhost:8002/api/v1/auth/register', registerData,{responseType:"text"
      });
      
   await response.forEach(value=>{
     var x = JSON.parse(value);
     this.token=x['token'];

      });
      alert("Registers successfully!");
    } catch (error) {
      alert("The information incorrect or existing");
      console.log(error);
    }
    this.router.navigate(['singpage'])
}
}
