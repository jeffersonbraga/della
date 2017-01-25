import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Grupo_usuario } from '../../../modelo/Grupo_usuario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'grupo_usuario-selector',   templateUrl: 'grupo_usuario.component.html' })  export class Grupo_usuarioComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Grupo_usuario[] = [];     grupo_usuarioAux : Grupo_usuario;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.grupo_usuarioAux = new Grupo_usuario(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.grupo_usuario.Grupo_usuario';         dataAux.objetoJson = this.grupo_usuarioAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Grupo_usuario. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }