import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { CustomerService } from './services/customer.service';
import { Customer } from "./models/customer";

@Component({
  moduleId: module.id,
  template: `<div id="areaB"></div>`,
  providers: [CustomerService]
})

export class ListCustomerComponent implements OnInit, OnDestroy
{
  customers: Customer[];
  private list: webix.ui.list;

  constructor(private customerService: CustomerService, root: ElementRef)
  {
    this.list = <webix.ui.list> webix.ui({
      view:"list",
      width:320,
      height:600,
      template:"#name#",
      data: customerService.getCustomers(),
      container: root.nativeElement
    });
  }

  ngOnInit()
  {
    this.list.resize();
  }

  ngOnDestroy()
  {
    this.list.destructor();
  }

  getCustomers(): void
  {
    this.customerService
      .getCustomers()
      .then(customers => this.customers = customers);
  }
}
