import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'registro_treinamento-dados',   templateUrl: 'registro_treinamento_dados.component.html' }) export class Registro_treinamentoDadosComponent implements OnInit {       displayMode: Registro_treinamentoDadosDisplayModeEnum;     displayModeEnum = Registro_treinamentoDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Registro_treinamentoDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Registro_treinamentoDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Registro_treinamentoDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Registro_treinamentoDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }