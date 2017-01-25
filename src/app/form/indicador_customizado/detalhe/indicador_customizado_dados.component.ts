import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'indicador_customizado-dados',   templateUrl: 'indicador_customizado_dados.component.html' }) export class Indicador_customizadoDadosComponent implements OnInit {       displayMode: Indicador_customizadoDadosDisplayModeEnum;     displayModeEnum = Indicador_customizadoDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Indicador_customizadoDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Indicador_customizadoDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Indicador_customizadoDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Indicador_customizadoDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }