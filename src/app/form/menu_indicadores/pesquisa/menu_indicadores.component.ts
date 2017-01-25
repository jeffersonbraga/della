import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Menu_indicadores } from '../../../modelo/Menu_indicadores'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'menu_indicadores-selector',   templateUrl: 'menu_indicadores.component.html' })  export class Menu_indicadoresComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Menu_indicadores[] = [];     menu_indicadoresAux : Menu_indicadores;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.menu_indicadoresAux = new Menu_indicadores(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.menu_indicadores.Menu_indicadores';         dataAux.objetoJson = this.menu_indicadoresAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Menu_indicadores. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }