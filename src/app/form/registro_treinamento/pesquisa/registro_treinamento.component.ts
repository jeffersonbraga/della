import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Registro_treinamento } from '../../../modelo/Registro_treinamento'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'registro_treinamento-selector',   templateUrl: 'registro_treinamento.component.html' })  export class Registro_treinamentoComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Registro_treinamento[] = [];     registro_treinamentoAux : Registro_treinamento;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.registro_treinamentoAux = new Registro_treinamento(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.registro_treinamento.Registro_treinamento';         dataAux.objetoJson = this.registro_treinamentoAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Registro_treinamento. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }