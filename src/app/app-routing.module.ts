import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookingModule } from './booking/booking.module';
import { LoginPageComponent } from './booking/login-page/login-page.component';
import { SignUpPageComponent } from './booking/sign-up-page/sign-up-page.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
  pathMatch: 'full'
},
{path: 'contact', component: ContactComponent},
{path: 'about', component: AboutComponent},
{
  path: 'book',
  loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
