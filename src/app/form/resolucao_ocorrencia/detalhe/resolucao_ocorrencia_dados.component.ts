import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'resolucao_ocorrencia-dados',   templateUrl: 'resolucao_ocorrencia_dados.component.html' }) export class Resolucao_ocorrenciaDadosComponent implements OnInit {       displayMode: Resolucao_ocorrenciaDadosDisplayModeEnum;     displayModeEnum = Resolucao_ocorrenciaDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Resolucao_ocorrenciaDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Resolucao_ocorrenciaDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Resolucao_ocorrenciaDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Resolucao_ocorrenciaDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }