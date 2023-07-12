import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email:String ='';
  password:String ='';
  token:String='';
  constructor(private http: HttpClient, private router: Router) { } 
  public async login(){
    
    const loginData = {
      emailAddress: this.email,
      password: this.password,
    };
    try {
      const res = await this.http.post('http://localhost:8002/api/v1/auth/authenticate',loginData,{responseType:"text"});
      await res.forEach(value=>{
        var y = JSON.parse(value);
        this.token= y['token'] as String;
      }
        );
       if(this.token!= null ||this.token!=''){
        alert("Login successfully!")
        // setTimeout(() =>{},2000)
        // this.router.navigate(['today']);
       }
    } catch (error) {
      alert("The information does not correct")
    }
  this.router.navigate([''])

  }
}
