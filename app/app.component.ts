import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>Hello</h1>
    <menu-bar></menu-bar>
  `,
})
export class AppComponent implements OnInit
{
  ngOnInit(): void
  {
  }
}
