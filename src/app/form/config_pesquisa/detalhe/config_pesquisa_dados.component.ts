import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'config_pesquisa-dados',   templateUrl: 'config_pesquisa_dados.component.html' }) export class Config_pesquisaDadosComponent implements OnInit {       displayMode: Config_pesquisaDadosDisplayModeEnum;     displayModeEnum = Config_pesquisaDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Config_pesquisaDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Config_pesquisaDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Config_pesquisaDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Config_pesquisaDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }