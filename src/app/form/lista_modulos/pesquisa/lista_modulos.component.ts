import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Lista_modulos } from '../../../modelo/Lista_modulos'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'lista_modulos-selector',   templateUrl: 'lista_modulos.component.html' })  export class Lista_modulosComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Lista_modulos[] = [];     lista_modulosAux : Lista_modulos;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.lista_modulosAux = new Lista_modulos(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.lista_modulos.Lista_modulos';         dataAux.objetoJson = this.lista_modulosAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Lista_modulos. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }