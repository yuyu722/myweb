import { NgModule } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCustomerComponent } from './add-customer.component';

const routes: Routes = [
  { path: 'customer/add', component: AddCustomerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
