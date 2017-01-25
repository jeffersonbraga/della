import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'classificacao_helpdesk-dados',   templateUrl: 'classificacao_helpdesk_dados.component.html' }) export class Classificacao_helpdeskDadosComponent implements OnInit {       displayMode: Classificacao_helpdeskDadosDisplayModeEnum;     displayModeEnum = Classificacao_helpdeskDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Classificacao_helpdeskDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Classificacao_helpdeskDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Classificacao_helpdeskDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Classificacao_helpdeskDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }