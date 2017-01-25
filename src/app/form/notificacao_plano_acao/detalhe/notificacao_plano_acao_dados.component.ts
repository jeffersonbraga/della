import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'notificacao_plano_acao-dados',   templateUrl: 'notificacao_plano_acao_dados.component.html' }) export class Notificacao_plano_acaoDadosComponent implements OnInit {       displayMode: Notificacao_plano_acaoDadosDisplayModeEnum;     displayModeEnum = Notificacao_plano_acaoDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Notificacao_plano_acaoDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Notificacao_plano_acaoDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Notificacao_plano_acaoDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Notificacao_plano_acaoDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }