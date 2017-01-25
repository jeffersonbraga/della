import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Categoria_ocorrencia } from '../../../modelo/Categoria_ocorrencia'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'categoria_ocorrencia-selector',   templateUrl: 'categoria_ocorrencia.component.html' })  export class Categoria_ocorrenciaComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Categoria_ocorrencia[] = [];     categoria_ocorrenciaAux : Categoria_ocorrencia;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.categoria_ocorrenciaAux = new Categoria_ocorrencia(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.categoria_ocorrencia.Categoria_ocorrencia';         dataAux.objetoJson = this.categoria_ocorrenciaAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Categoria_ocorrencia. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }