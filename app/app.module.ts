import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { MenuBarComponent } from './menu-bar.component';
import { AddCustomerComponent } from './add-customer.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AddCustomerComponent,
    MenuBarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
