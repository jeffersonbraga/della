import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'categoria_ocorrencia-dados',   templateUrl: 'categoria_ocorrencia_dados.component.html' }) export class Categoria_ocorrenciaDadosComponent implements OnInit {       displayMode: Categoria_ocorrenciaDadosDisplayModeEnum;     displayModeEnum = Categoria_ocorrenciaDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Categoria_ocorrenciaDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Categoria_ocorrenciaDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Categoria_ocorrenciaDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Categoria_ocorrenciaDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }