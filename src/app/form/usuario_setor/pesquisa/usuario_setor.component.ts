import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Usuario_setor } from '../../../modelo/Usuario_setor'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'usuario_setor-selector',   templateUrl: 'usuario_setor.component.html' })  export class Usuario_setorComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Usuario_setor[] = [];     usuario_setorAux : Usuario_setor;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.usuario_setorAux = new Usuario_setor(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.usuario_setor.Usuario_setor';         dataAux.objetoJson = this.usuario_setorAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Usuario_setor. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }