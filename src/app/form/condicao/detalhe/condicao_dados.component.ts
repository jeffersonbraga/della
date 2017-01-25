import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'condicao-dados',   templateUrl: 'condicao_dados.component.html' }) export class CondicaoDadosComponent implements OnInit {       displayMode: CondicaoDadosDisplayModeEnum;     displayModeEnum = CondicaoDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = CondicaoDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = CondicaoDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = CondicaoDadosDisplayModeEnum.Edit;           break;       }     }  }  enum CondicaoDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }