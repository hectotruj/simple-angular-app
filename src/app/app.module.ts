import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LeftPanelComponent} from './left-panel.component';
import { RightPanelComponent} from './right-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    RightPanelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
