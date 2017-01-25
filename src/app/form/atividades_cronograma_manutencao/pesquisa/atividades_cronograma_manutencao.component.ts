import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Atividades_cronograma_manutencao } from '../../../modelo/Atividades_cronograma_manutencao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'atividades_cronograma_manutencao-selector',   templateUrl: 'atividades_cronograma_manutencao.component.html' })  export class Atividades_cronograma_manutencaoComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Atividades_cronograma_manutencao[] = [];     atividades_cronograma_manutencaoAux : Atividades_cronograma_manutencao;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.atividades_cronograma_manutencaoAux = new Atividades_cronograma_manutencao(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.atividades_cronograma_manutencao.Atividades_cronograma_manutencao';         dataAux.objetoJson = this.atividades_cronograma_manutencaoAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Atividades_cronograma_manutencao. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }