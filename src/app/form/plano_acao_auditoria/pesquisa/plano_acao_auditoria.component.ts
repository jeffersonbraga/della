import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Plano_acao_auditoria } from '../../../modelo/Plano_acao_auditoria'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'plano_acao_auditoria-selector',   templateUrl: 'plano_acao_auditoria.component.html' })  export class Plano_acao_auditoriaComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Plano_acao_auditoria[] = [];     plano_acao_auditoriaAux : Plano_acao_auditoria;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.plano_acao_auditoriaAux = new Plano_acao_auditoria(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.plano_acao_auditoria.Plano_acao_auditoria';         dataAux.objetoJson = this.plano_acao_auditoriaAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Plano_acao_auditoria. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }