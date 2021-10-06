import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RndNumberComponent } from './rnd-number/rnd-number.component';

@NgModule({
  declarations: [
    AppComponent,
    RndNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
