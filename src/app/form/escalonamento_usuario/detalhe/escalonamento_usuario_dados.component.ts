import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'escalonamento_usuario-dados',   templateUrl: 'escalonamento_usuario_dados.component.html' }) export class Escalonamento_usuarioDadosComponent implements OnInit {       displayMode: Escalonamento_usuarioDadosDisplayModeEnum;     displayModeEnum = Escalonamento_usuarioDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Escalonamento_usuarioDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Escalonamento_usuarioDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Escalonamento_usuarioDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Escalonamento_usuarioDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }