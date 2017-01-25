import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Indicador_customizado } from '../../../modelo/Indicador_customizado'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'indicador_customizado-dados-details',   templateUrl: 'indicador_customizado_dadosDetails.component.html' }) export class Indicador_customizadoDadosDetailsComponent implements OnInit {    indicador_customizado: Indicador_customizado;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.indicador_customizado.Indicador_customizado";                 let id = +params['id'];         this.indicador_customizado = new Indicador_customizado();         this.indicador_customizado.cd_indicador_customizado = id;         o.objetoJson = this.indicador_customizado;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a indicador_customizado. '; }      this.indicador_customizado = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }