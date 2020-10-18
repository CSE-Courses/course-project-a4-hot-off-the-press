
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'
//import { AdminComponent } from './admin/admin.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';

const routes: Routes = [
  { path: 'login',component: LoginComponent },
  { path: 'settings', component:UserSettingsComponent},
  { path: '', component: LandingPageComponent },
  { path: 'history', component: OrderHistoryComponent }
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

 