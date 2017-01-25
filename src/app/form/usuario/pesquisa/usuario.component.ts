import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Usuario } from '../../../modelo/Usuario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'usuario-selector',   templateUrl: 'usuario.component.html' })  export class UsuarioComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Usuario[] = [];     usuarioAux : Usuario;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.usuarioAux = new Usuario(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.usuario.Usuario';         dataAux.objetoJson = this.usuarioAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Usuario. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }