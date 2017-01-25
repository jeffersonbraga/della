import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Fabricante } from '../../../modelo/Fabricante'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'fabricante-selector',   templateUrl: 'fabricante.component.html' })  export class FabricanteComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Fabricante[] = [];     fabricanteAux : Fabricante;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.fabricanteAux = new Fabricante(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.fabricante.Fabricante';         dataAux.objetoJson = this.fabricanteAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Fabricante. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }