import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'menu-bar',
  template: ``
})

export class MenuBarComponent implements OnInit, OnDestroy
{
  private menu: webix.ui.menu;
  private toolbar: webix.ui.toolbar;
  private ui: webix.ui.layout

  constructor(root: ElementRef)
  {
    this.menu = <webix.ui.menu> webix.ui({
      view: "menu",
      data: [
        { value:"Add", submenu:[ "Order", "Shipment", "Customer" ] },
        { value:"Edit", submenu: [ "Order", "Shipment", "Customer" ] }
      ],
      type: {
        subsign: true,
        width: 100
      }
    });

    this.toolbar = <webix.ui.toolbar> webix.ui({
      view: "toolbar",
      paddingY: 0,
      elements: [
        {},
        { view: "text" },
        { view: "button", label: "search", width:100 }
      ]
    });

    this.ui = <webix.ui.layout> webix.ui({
      container: root.nativeElement,
      rows:[
        { type:"clean", cols:[ this.menu, this.toolbar ] },
        { template:"Some content" }
      ]
    });
  }

  ngOnInit()
  {
    this.menu.resize();
    this.toolbar.resize();
    this.ui.resize();
  }

  ngOnDestroy()
  {
    this.menu.destructor();
  }
}
