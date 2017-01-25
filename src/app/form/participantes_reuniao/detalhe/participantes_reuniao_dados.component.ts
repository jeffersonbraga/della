import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'participantes_reuniao-dados',   templateUrl: 'participantes_reuniao_dados.component.html' }) export class Participantes_reuniaoDadosComponent implements OnInit {       displayMode: Participantes_reuniaoDadosDisplayModeEnum;     displayModeEnum = Participantes_reuniaoDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Participantes_reuniaoDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Participantes_reuniaoDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Participantes_reuniaoDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Participantes_reuniaoDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }