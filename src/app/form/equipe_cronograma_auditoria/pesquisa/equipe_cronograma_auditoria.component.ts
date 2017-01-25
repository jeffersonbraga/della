import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Equipe_cronograma_auditoria } from '../../../modelo/Equipe_cronograma_auditoria'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'equipe_cronograma_auditoria-selector',   templateUrl: 'equipe_cronograma_auditoria.component.html' })  export class Equipe_cronograma_auditoriaComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Equipe_cronograma_auditoria[] = [];     equipe_cronograma_auditoriaAux : Equipe_cronograma_auditoria;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.equipe_cronograma_auditoriaAux = new Equipe_cronograma_auditoria(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.equipe_cronograma_auditoria.Equipe_cronograma_auditoria';         dataAux.objetoJson = this.equipe_cronograma_auditoriaAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Equipe_cronograma_auditoria. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }