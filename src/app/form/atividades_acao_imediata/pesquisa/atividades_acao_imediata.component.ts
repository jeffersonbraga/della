import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Atividades_acao_imediata } from '../../../modelo/Atividades_acao_imediata'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'atividades_acao_imediata-selector',   templateUrl: 'atividades_acao_imediata.component.html' })  export class Atividades_acao_imediataComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Atividades_acao_imediata[] = [];     atividades_acao_imediataAux : Atividades_acao_imediata;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.atividades_acao_imediataAux = new Atividades_acao_imediata(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.atividades_acao_imediata.Atividades_acao_imediata';         dataAux.objetoJson = this.atividades_acao_imediataAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Atividades_acao_imediata. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }