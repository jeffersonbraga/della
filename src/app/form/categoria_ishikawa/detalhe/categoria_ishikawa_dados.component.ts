import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'categoria_ishikawa-dados',   templateUrl: 'categoria_ishikawa_dados.component.html' }) export class Categoria_ishikawaDadosComponent implements OnInit {       displayMode: Categoria_ishikawaDadosDisplayModeEnum;     displayModeEnum = Categoria_ishikawaDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Categoria_ishikawaDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Categoria_ishikawaDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Categoria_ishikawaDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Categoria_ishikawaDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }