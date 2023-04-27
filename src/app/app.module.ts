import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LibraryComponent } from './components/library/library.component';
import { ROUTES, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { SingpageComponent } from './components/singpage/singpage.component';
import { DisplaysongsComponent } from './components/displaysongs/displaysongs.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GernesComponent } from './components/gernes/gernes.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { FormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    LibraryComponent,
    UserComponent,
    HeaderComponent,
    SingpageComponent,
    DisplaysongsComponent,
    AboutusComponent,
    GernesComponent,
    UploadVideoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxFileDropModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
