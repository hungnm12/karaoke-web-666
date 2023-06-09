import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LibraryComponent } from './components/library/library.component';
import { UserComponent } from './components/user/user.component';
import { SingpageComponent } from './components/singpage/singpage.component';

import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RecordbuttonComponent } from './components/recordbutton/recordbutton.component';
import { DisplaysongsComponent } from './components/displaysongs/displaysongs.component';
import { UploadSongComponent } from './upload-song/upload-song.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'user', component: UserComponent},
  {path: 'singpage/:id', component: SingpageComponent},
 
  {path: 'aboutus', component: AboutusComponent},
  {path: 'recordbutton', component: RecordbuttonComponent},
  {path: 'displaysong', component: DisplaysongsComponent},
  {path: 'upload-song', component: UploadSongComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
