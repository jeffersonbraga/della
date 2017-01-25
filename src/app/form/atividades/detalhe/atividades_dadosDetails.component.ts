import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Atividades } from '../../../modelo/Atividades'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'atividades-dados-details',   templateUrl: 'atividades_dadosDetails.component.html' }) export class AtividadesDadosDetailsComponent implements OnInit {    atividades: Atividades;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.atividades.Atividades";                 let id = +params['id'];         this.atividades = new Atividades();         this.atividades.cd_atividades = id;         o.objetoJson = this.atividades;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a atividades. '; }      this.atividades = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }