import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ AppComponent],
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule, HttpModule ,
    CommonModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
