import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'plano_acao-dados',   templateUrl: 'plano_acao_dados.component.html' }) export class Plano_acaoDadosComponent implements OnInit {       displayMode: Plano_acaoDadosDisplayModeEnum;     displayModeEnum = Plano_acaoDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Plano_acaoDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Plano_acaoDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Plano_acaoDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Plano_acaoDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }