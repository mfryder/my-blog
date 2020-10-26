import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import { VideoGamesComponent } from './video-games/video-games.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gaming', component: VideoGamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
