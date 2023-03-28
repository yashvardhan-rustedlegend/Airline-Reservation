import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  constructor(private restService : RestService , private router: Router) {}

  
  SigupStatus! : string;
  username! : string;
  password! : string;
  name! : string;
  contact! : number;

  SignupObj = {
    name     : this.name,
    contact  : this.contact,
    username : this.username,
    password : this.password
    
  }
  signUp(){
    this.restService.signUp(this.SignupObj).subscribe({
      next : (data : string) => this.SigupStatus= data,
      error : (err) => console.log(err)
    })
    if(this.SigupStatus === "true"){
      console.log(this.SigupStatus);
      this.router.navigate(['book/']);
    }
    else{
      console.log("Re-Enter Full Data")
    }
    
  }
  
}
