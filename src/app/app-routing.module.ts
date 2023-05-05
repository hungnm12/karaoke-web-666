import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LibraryComponent } from './components/library/library.component';
import { UserComponent } from './components/user/user.component';
import { SingpageComponent } from './components/singpage/singpage.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'user', component: UserComponent},
  {path: 'singpage', component: SingpageComponent},
  {path: 'upload-video', component: UploadVideoComponent},
  {path: 'aboutus', component: AboutusComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
