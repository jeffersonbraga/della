import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'permissao_acesso-dados',   templateUrl: 'permissao_acesso_dados.component.html' }) export class Permissao_acessoDadosComponent implements OnInit {       displayMode: Permissao_acessoDadosDisplayModeEnum;     displayModeEnum = Permissao_acessoDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Permissao_acessoDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Permissao_acessoDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Permissao_acessoDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Permissao_acessoDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }