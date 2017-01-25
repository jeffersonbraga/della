import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'acao_corretiva_helpdesk-dados',   templateUrl: 'acao_corretiva_helpdesk_dados.component.html' }) export class Acao_corretiva_helpdeskDadosComponent implements OnInit {       displayMode: Acao_corretiva_helpdeskDadosDisplayModeEnum;     displayModeEnum = Acao_corretiva_helpdeskDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Acao_corretiva_helpdeskDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Acao_corretiva_helpdeskDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Acao_corretiva_helpdeskDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Acao_corretiva_helpdeskDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }