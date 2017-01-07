import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'menu-bar',
  template: ``
})

export class MenuBarComponent implements OnInit, OnDestroy
{
  private menu: webix.ui.menu;

  constructor(private router: Router)
  {
    this.menu = <webix.ui.menu> webix.ui({
      view: "menu",
      data: [
        {
          id: "1",
          value:"Add",
          config: {
            on: {
              onItemClick:function(id: string) {
                router.navigate([id + '/add']);
              }
            }
          },
          submenu:[
            { id: "order", value: "Order" },
            { id: "shipment", value: "Shipment" },
            { id: "customer", value: "Customer", href: "" }
          ]
        },
        {
          id: "2",
          value:"Edit",
          config: {
            on: {
              onItemClick:function(id: string) {
                router.navigate([id + '/list']);
              }
            }
          },
          submenu: [
            { id: "order", value: "Order" },
            { id: "shipment", value: "Shipment" },
            { id: "customer", value: "Customer", href: "" }
          ]
        }
      ],
      type: {
        subsign: true,
        width: 100
      }
    });
  }

  ngOnInit()
  {
    this.menu.resize();
  }

  ngOnDestroy()
  {
    this.menu.destructor();
  }
}
