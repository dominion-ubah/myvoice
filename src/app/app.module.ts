import { MaterializeDirective } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyVoiceRouting } from './myvoice.routing';


import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { SingleMediaPlayerComponent } from './single-media-player/single-media-player.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RantComponent } from './main/rant/rant.component';
import { HomeComponent } from './main/home/home.component';
import { ComplaintComponent } from './main/complaint/complaint.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaterializeDirective,
    SingleMediaPlayerComponent,
    MainComponent,
    RantComponent,
    HomeComponent,
    ComplaintComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyVoiceRouting,

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
