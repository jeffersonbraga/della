import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'causa_efeito-dados',   templateUrl: 'causa_efeito_dados.component.html' }) export class Causa_efeitoDadosComponent implements OnInit {       displayMode: Causa_efeitoDadosDisplayModeEnum;     displayModeEnum = Causa_efeitoDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Causa_efeitoDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Causa_efeitoDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Causa_efeitoDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Causa_efeitoDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }