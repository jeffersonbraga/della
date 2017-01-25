import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Usuario_grupo_usuario } from '../../../modelo/Usuario_grupo_usuario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'usuario_grupo_usuario-selector',   templateUrl: 'usuario_grupo_usuario.component.html' })  export class Usuario_grupo_usuarioComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Usuario_grupo_usuario[] = [];     usuario_grupo_usuarioAux : Usuario_grupo_usuario;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.usuario_grupo_usuarioAux = new Usuario_grupo_usuario(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.usuario_grupo_usuario.Usuario_grupo_usuario';         dataAux.objetoJson = this.usuario_grupo_usuarioAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Usuario_grupo_usuario. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }