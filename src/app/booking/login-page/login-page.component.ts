import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private restService : RestService, private router: Router) {}

  loginStatus! : string;
  username! : string;
  password! : string;

  loginObj = {
    username : this.username,
    password : this.password
  }
  logins(){

    this.restService.login(this.loginObj).subscribe({
      next : (data : string) => this.loginStatus = data,
      error : (err) => console.log(err)
    })
    if(this.loginStatus === "true"){
      console.log(this.loginStatus);
      this.router.navigate(['choose']);
    }
    else{
      console.log("Re-Enter Full Data")
    }
  }

}
