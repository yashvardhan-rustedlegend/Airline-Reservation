import { Component ,OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private restService : RestService) {}

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
    console.log(this.loginStatus);
  }

}
