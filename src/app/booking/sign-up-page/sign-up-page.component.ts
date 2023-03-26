import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  public signupForm!:FormGroup;
  constructor(private http:HttpClient, private router:Router, private formbuilder:FormBuilder ){}
  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullname: [''],
      email: [''],
      password: [''],
      mobile: [''],
    }
    )
  }

  signUp(){
    this.http.post<any>("https://my-data-4hkn.onrender.com/signup", this.signupForm.value).subscribe( //signup credentials are stored for further login
    res => { // Post Method is used 
      alert("signup Sucessful");
      this.signupForm.reset();
      this.router.navigate(['/book/']);
    },
    err => {
      alert("something went wrong");
    }
  )
  }
}
