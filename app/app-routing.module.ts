import { NgModule } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCustomerComponent } from './add-customer.component';
import { ListCustomerComponent } from './list-customer.component';

const routes: Routes = [
  { path: 'customer/add', component: AddCustomerComponent },
  { path: 'customer/list', component: ListCustomerComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
