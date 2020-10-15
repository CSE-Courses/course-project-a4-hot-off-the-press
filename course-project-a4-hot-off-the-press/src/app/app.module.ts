import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumCardComponent } from './components/landing-page/album-card/album-card.component';
import { AlbumListComponent } from './components/landing-page/album-list/album-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';



import { LoginComponent } from './components/login/login.component';
//import { AdminComponent } from './admin/admin.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UploadComponent } from './components/upload/upload.component';



@NgModule({
  declarations: [
    AppComponent,
    AlbumCardComponent,
    AlbumListComponent,
    LandingPageComponent,
    SiteHeaderComponent,
    LoginComponent,
    //AdminComponent,
    ProductListComponent,
    UploadComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
