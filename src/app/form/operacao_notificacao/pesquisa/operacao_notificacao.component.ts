import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Operacao_notificacao } from '../../../modelo/Operacao_notificacao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'operacao_notificacao-selector',   templateUrl: 'operacao_notificacao.component.html' })  export class Operacao_notificacaoComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Operacao_notificacao[] = [];     operacao_notificacaoAux : Operacao_notificacao;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.operacao_notificacaoAux = new Operacao_notificacao(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.operacao_notificacao.Operacao_notificacao';         dataAux.objetoJson = this.operacao_notificacaoAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Operacao_notificacao. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }