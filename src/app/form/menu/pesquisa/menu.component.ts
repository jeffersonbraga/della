import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Menu } from '../../../modelo/Menu'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'menu-selector',   templateUrl: 'menu.component.html' })  export class MenuComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Menu[] = [];     menuAux : Menu;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.menuAux = new Menu(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.menu.Menu';         dataAux.objetoJson = this.menuAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Menu. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }