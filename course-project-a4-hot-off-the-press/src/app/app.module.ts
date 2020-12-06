import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
//import { FormsModule } from '@angular/forms'

import { RouterModule } from "@angular/router";

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumCardComponent } from './components/landing-page/album-card/album-card.component';
import { AlbumListComponent } from './components/landing-page/album-list/album-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { LoginComponent } from './components/login/login.component';

//import { AdminComponent } from './admin/admin.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { UploadComponent } from './components/upload/upload.component';

import { IndividualProductsComponent } from './components/individual-products/individual-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecCharDirective } from './components/upload/directives/spec-char.directive';
import { QualitydirDirective } from './components/upload/directives/qualitydir.directive';
import { PriceAboveZeroDirective } from './components/upload/directives/price-above-zero.directive';
import { HeaderElemComponent } from './components/site-header/header-elem/header-elem.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
<<<<<<< HEAD
import { ProfilePageComponent } from './profile-page/profile-page.component';
=======
import { ProfileComponent } from './components/profile/profile.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDrawingModule } from '@agm/drawing';
import { ReviewRatingComponent } from './components/review-rating/review-rating.component';
<<<<<<< HEAD
>>>>>>> 351588e522e5b000e95a23b36bbda60571c9b8cd
=======
import { ShippingComponent } from './components/shipping/shipping.component';

>>>>>>> a2353fbf025580cc57848cff4e1dbadc8bc46ebe


@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent,
    AlbumListComponent,
    LandingPageComponent,
    SiteHeaderComponent,
    LoginComponent,
    ShippingComponent,

    //AdminComponent,
    //ProductListComponent,
    UserCreationComponent,
    UserSettingsComponent,
    OrderHistoryComponent,
    UploadComponent,
    SpecCharDirective,
    QualitydirDirective,
    PriceAboveZeroDirective,
    HeaderElemComponent,
    CartComponent,
    ContactComponent,
<<<<<<< HEAD
    ProfilePageComponent,
=======
    ProfileComponent,
    IndividualProductsComponent,
    ReviewRatingComponent,
>>>>>>> 351588e522e5b000e95a23b36bbda60571c9b8cd
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNTKr2a-OEpxRQ5dWi84W0lS7ydOtCcxc',
      libraries: ['drawing']
    }),
    AgmDrawingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
