import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseComponent } from './choose/choose.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginPageComponent
  },
  {
    path:'signup',
    component: SignUpPageComponent
  },
  {
    path:'choose',
    component: ChooseComponent
  },
  {
    path:'details',
    component: CustomerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
