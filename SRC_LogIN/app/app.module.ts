import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, FlexLayoutModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
