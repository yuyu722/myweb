import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MenuBarComponent } from './menu-bar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    MenuBarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
