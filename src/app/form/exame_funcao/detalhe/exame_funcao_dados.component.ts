import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'exame_funcao-dados',   templateUrl: 'exame_funcao_dados.component.html' }) export class Exame_funcaoDadosComponent implements OnInit {       displayMode: Exame_funcaoDadosDisplayModeEnum;     displayModeEnum = Exame_funcaoDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Exame_funcaoDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Exame_funcaoDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Exame_funcaoDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Exame_funcaoDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }