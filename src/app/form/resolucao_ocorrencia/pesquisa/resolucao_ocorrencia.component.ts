import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Resolucao_ocorrencia } from '../../../modelo/Resolucao_ocorrencia'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'resolucao_ocorrencia-selector',   templateUrl: 'resolucao_ocorrencia.component.html' })  export class Resolucao_ocorrenciaComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Resolucao_ocorrencia[] = [];     resolucao_ocorrenciaAux : Resolucao_ocorrencia;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.resolucao_ocorrenciaAux = new Resolucao_ocorrencia(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.resolucao_ocorrencia.Resolucao_ocorrencia';         dataAux.objetoJson = this.resolucao_ocorrenciaAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Resolucao_ocorrencia. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }