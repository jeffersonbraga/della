import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Atv_exec_manutencao } from '../../../modelo/Atv_exec_manutencao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'atv_exec_manutencao-selector',   templateUrl: 'atv_exec_manutencao.component.html' })  export class Atv_exec_manutencaoComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Atv_exec_manutencao[] = [];     atv_exec_manutencaoAux : Atv_exec_manutencao;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.atv_exec_manutencaoAux = new Atv_exec_manutencao(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.atv_exec_manutencao.Atv_exec_manutencao';         dataAux.objetoJson = this.atv_exec_manutencaoAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Atv_exec_manutencao. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }