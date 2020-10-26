import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BlogLeftSideNavComponent } from './blog-left-side-nav/blog-left-side-nav.component';
import { BlogMainToolBarComponent } from './blog-main-tool-bar/blog-main-tool-bar.component';
import { VideoGamesComponent } from './video-games/video-games.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoGamesComponent,
    BlogLeftSideNavComponent,
    BlogMainToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
