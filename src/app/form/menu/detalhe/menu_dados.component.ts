import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'menu-dados',   templateUrl: 'menu_dados.component.html' }) export class MenuDadosComponent implements OnInit {       displayMode: MenuDadosDisplayModeEnum;     displayModeEnum = MenuDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = MenuDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = MenuDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = MenuDadosDisplayModeEnum.Edit;           break;       }     }  }  enum MenuDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }