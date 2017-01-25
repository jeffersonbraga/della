import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Processo_fluxo } from '../../../modelo/Processo_fluxo'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'processo_fluxo-selector',   templateUrl: 'processo_fluxo.component.html' })  export class Processo_fluxoComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Processo_fluxo[] = [];     processo_fluxoAux : Processo_fluxo;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.processo_fluxoAux = new Processo_fluxo(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.processo_fluxo.Processo_fluxo';         dataAux.objetoJson = this.processo_fluxoAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Processo_fluxo. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }