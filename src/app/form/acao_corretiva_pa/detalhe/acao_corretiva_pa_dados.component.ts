import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'acao_corretiva_pa-dados',   templateUrl: 'acao_corretiva_pa_dados.component.html' }) export class Acao_corretiva_paDadosComponent implements OnInit {       displayMode: Acao_corretiva_paDadosDisplayModeEnum;     displayModeEnum = Acao_corretiva_paDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Acao_corretiva_paDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Acao_corretiva_paDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Acao_corretiva_paDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Acao_corretiva_paDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }