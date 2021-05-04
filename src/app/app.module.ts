import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgxElectronModule} from 'ngx-electron';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import {MatCardModule} from '@angular/material/card';
import { GalleryToolbarComponent } from './gallery-view/gallery-toolbar/gallery-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GalleryViewComponent,
    GalleryToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgxElectronModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
