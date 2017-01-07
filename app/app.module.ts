import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CustomerDataService } from './services/customer-data.service';

import { AppComponent }  from './app.component';
import { MenuBarComponent } from './menu-bar.component';
import { AddCustomerComponent } from './add-customer.component';
import { ListCustomerComponent } from './list-customer.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(CustomerDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AddCustomerComponent,
    ListCustomerComponent,
    MenuBarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
