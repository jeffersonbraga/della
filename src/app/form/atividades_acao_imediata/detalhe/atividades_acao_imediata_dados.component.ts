import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'atividades_acao_imediata-dados',   templateUrl: 'atividades_acao_imediata_dados.component.html' }) export class Atividades_acao_imediataDadosComponent implements OnInit {       displayMode: Atividades_acao_imediataDadosDisplayModeEnum;     displayModeEnum = Atividades_acao_imediataDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Atividades_acao_imediataDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Atividades_acao_imediataDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Atividades_acao_imediataDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Atividades_acao_imediataDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }