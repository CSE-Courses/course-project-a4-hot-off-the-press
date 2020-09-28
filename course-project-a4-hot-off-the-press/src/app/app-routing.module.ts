
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'
//import { AdminComponent } from './admin/admin.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent },
  { path: 'settings', component:ProductListComponent },
  { path: '', component: LandingPageComponent },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

 