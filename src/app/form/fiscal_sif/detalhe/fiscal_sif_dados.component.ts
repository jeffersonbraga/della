import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'fiscal_sif-dados',   templateUrl: 'fiscal_sif_dados.component.html' }) export class Fiscal_sifDadosComponent implements OnInit {       displayMode: Fiscal_sifDadosDisplayModeEnum;     displayModeEnum = Fiscal_sifDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = Fiscal_sifDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = Fiscal_sifDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = Fiscal_sifDadosDisplayModeEnum.Edit;           break;       }     }  }  enum Fiscal_sifDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }