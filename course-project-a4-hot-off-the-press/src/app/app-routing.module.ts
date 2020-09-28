import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component';
//import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:'',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
