import { Component, Input, OnInit } from '@angular/core'; import { Router } from '@angular/router'; import { Ideia_reuniao_pic } from '../../../modelo/Ideia_reuniao_pic'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual';  import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'ideia_reuniao_pic-selector',   templateUrl: 'ideia_reuniao_pic.component.html' })  export class Ideia_reuniao_picComponent implements OnInit { 	 	errorMessage : string = '';      @Input() listaDados : Ideia_reuniao_pic[] = [];     ideia_reuniao_picAux : Ideia_reuniao_pic;     constructor(        private dataService: PesquisaService,        private router: Router) { }      ngOnInit() {         this.ideia_reuniao_picAux = new Ideia_reuniao_pic(); let dataAux : ObjetoVirtual = new ObjetoVirtual();         dataAux.classeJava  = 'br.com.primum.modelo.ideia_reuniao_pic.Ideia_reuniao_pic';         dataAux.objetoJson = this.ideia_reuniao_picAux;          this.dataService.efetuarPesquisa(dataAux)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);     }  	onEfetuarPesquisa(result : any) { 		if (!result) { 			this.errorMessage = 'Houve um erro a pesquisa de Ideia_reuniao_pic. ';             this.router.navigate(['/home']); 		}          this.listaDados = result; 	} }