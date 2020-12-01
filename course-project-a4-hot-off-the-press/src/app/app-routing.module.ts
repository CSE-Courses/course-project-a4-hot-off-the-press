
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'
//import { AdminComponent } from './admin/admin.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { IndividualProductsComponent } from './components/individual-products/individual-products.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { UploadComponent } from './components/upload/upload.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReviewRatingComponent } from './components/review-rating/review-rating.component';


const routes: Routes = [
  { path: 'login',component: LoginComponent },
  { path: 'upload', component:UploadComponent },
  { path: 'create-account', component: UserCreationComponent},
  { path: 'user-settings', component: UserSettingsComponent},
  { path: 'history', component: OrderHistoryComponent },
  { path: 'cart', component: CartComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'details', component: IndividualProductsComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'review', component: ReviewRatingComponent },
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

 