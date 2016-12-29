import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'add-customer',
  template: `<div id="areaA"></div>`
})

export class  AddCustomerComponent implements OnInit, OnDestroy
{
  private form: webix.ui.form;
  private name_text: webix.ui.text;
  private phone_text: webix.ui.text;
  private address_text: webix.ui.text;
  private add_button: webix.ui.button;

  constructor()
  {
    this.name_text = <webix.ui.text> webix.ui({
      view:"text", placeholder:"Enter Name", label:"Name"
    });

    this.phone_text = <webix.ui.text> webix.ui({
      view:"text", placeholder:"Enter Phone Number", label:"Phone"
    });

    this.address_text = <webix.ui.text> webix.ui({
      view:"text", placeholder:"Enter Address", label:"Address"
    });

    this.add_button = <webix.ui.button> webix.ui({
      view:"button", value: "Add", align:"center"
    });

    this.form = <webix.ui.form> webix.ui({
      view: "form",
      container: "areaA",
      elements: [this.name_text, this.phone_text, this.address_text, this.add_button]
    });
  }

  ngOnInit()
  {
    this.form.resize();
  }

  ngOnDestroy()
  {
    this.name_text.destructor();
    this.phone_text.destructor();
    this.address_text.destructor();
    this.add_button.destructor();
    this.form.destructor();
  }
}
