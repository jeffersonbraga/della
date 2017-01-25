import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'plano_acao_auditoria-dados',   templateUrl: 'plano_acao_auditoria_dados.component.html' }) export class Plano_acao_auditoriaDadosComponent implements OnInit {       displayMode: Plano_acao_auditoriaDadosDisplayModeEnum;     displayModeEnum = Plano_acao_auditoriaDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Plano_acao_auditoriaDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Plano_acao_auditoriaDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Plano_acao_auditoriaDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Plano_acao_auditoriaDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }