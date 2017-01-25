import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'acao_corretiva-dados',   templateUrl: 'acao_corretiva_dados.component.html' }) export class Acao_corretivaDadosComponent implements OnInit {       displayMode: Acao_corretivaDadosDisplayModeEnum;     displayModeEnum = Acao_corretivaDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Acao_corretivaDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Acao_corretivaDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Acao_corretivaDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Acao_corretivaDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }