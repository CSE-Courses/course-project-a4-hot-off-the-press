import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
//import { FormsModule } from '@angular/forms'

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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecCharDirective } from './components/upload/directives/spec-char.directive';
import { QualitydirDirective } from './components/upload/directives/qualitydir.directive';
import { PriceAboveZeroDirective } from './components/upload/directives/price-above-zero.directive';


@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent,
    AlbumListComponent,
    LandingPageComponent,
    SiteHeaderComponent,
    LoginComponent,

    //AdminComponent,
    //ProductListComponent,
    UserCreationComponent,
    UserSettingsComponent,
    OrderHistoryComponent,
    UploadComponent,
    SpecCharDirective,
    QualitydirDirective,
    PriceAboveZeroDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
