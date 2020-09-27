
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'
//import { AdminComponent } from './admin/admin.component';
import { Component } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component: AppComponent
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})


/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/

export class AppRoutingComponent {}

 