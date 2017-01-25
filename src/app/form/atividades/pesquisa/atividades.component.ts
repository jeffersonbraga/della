import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Atividades } from '../../../modelo/Atividades'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'atividades-selector',   templateUrl: 'atividades.component.html' })  export class AtividadesComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Atividades[] = [];     atividadesAux : Atividades;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.atividadesAux = new Atividades(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.atividades.Atividades';         dataAux.objetoJson = this.atividadesAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Atividades. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }