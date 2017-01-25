import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Programa_qualidade } from '../../../modelo/Programa_qualidade'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'programa_qualidade-selector',   templateUrl: 'programa_qualidade.component.html' })  export class Programa_qualidadeComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Programa_qualidade[] = [];     programa_qualidadeAux : Programa_qualidade;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.programa_qualidadeAux = new Programa_qualidade(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.programa_qualidade.Programa_qualidade';         dataAux.objetoJson = this.programa_qualidadeAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Programa_qualidade. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }