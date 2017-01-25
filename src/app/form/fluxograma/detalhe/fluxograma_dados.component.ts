import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';  @Component({   moduleId: module.id,   selector: 'fluxograma-dados',   templateUrl: 'fluxograma_dados.component.html' }) export class FluxogramaDadosComponent implements OnInit {       displayMode: FluxogramaDadosDisplayModeEnum;     displayModeEnum = FluxogramaDadosDisplayModeEnum;       constructor(private router: Router) { }      ngOnInit() {       const path = this.router.url.split('/')[3];       switch (path) {         case 'details':           this.displayMode = FluxogramaDadosDisplayModeEnum.Details;           break;         case 'info':           this.displayMode = FluxogramaDadosDisplayModeEnum.Orders;           break;         case 'edit':           this.displayMode = FluxogramaDadosDisplayModeEnum.Edit;           break;       }     }  }  enum FluxogramaDadosDisplayModeEnum {   Details=0,   Orders=1,   Edit=2 }