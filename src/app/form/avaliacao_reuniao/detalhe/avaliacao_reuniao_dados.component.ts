import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'avaliacao_reuniao-dados',   templateUrl: 'avaliacao_reuniao_dados.component.html' }) export class Avaliacao_reuniaoDadosComponent implements OnInit {       displayMode: Avaliacao_reuniaoDadosDisplayModeEnum;     displayModeEnum = Avaliacao_reuniaoDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Avaliacao_reuniaoDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Avaliacao_reuniaoDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Avaliacao_reuniaoDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Avaliacao_reuniaoDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }