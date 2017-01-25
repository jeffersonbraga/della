import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'conclusao_auditoria-dados',   templateUrl: 'conclusao_auditoria_dados.component.html' }) export class Conclusao_auditoriaDadosComponent implements OnInit {       displayMode: Conclusao_auditoriaDadosDisplayModeEnum;     displayModeEnum = Conclusao_auditoriaDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Conclusao_auditoriaDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Conclusao_auditoriaDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Conclusao_auditoriaDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Conclusao_auditoriaDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }