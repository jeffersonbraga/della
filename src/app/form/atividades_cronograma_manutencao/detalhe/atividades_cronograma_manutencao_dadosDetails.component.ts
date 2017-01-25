import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Atividades_cronograma_manutencao } from '../../../modelo/Atividades_cronograma_manutencao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'atividades_cronograma_manutencao-dados-details',   templateUrl: 'atividades_cronograma_manutencao_dadosDetails.component.html' }) export class Atividades_cronograma_manutencaoDadosDetailsComponent implements OnInit {    atividades_cronograma_manutencao: Atividades_cronograma_manutencao;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.atividades_cronograma_manutencao.Atividades_cronograma_manutencao";                 let id = +params['id'];         this.atividades_cronograma_manutencao = new Atividades_cronograma_manutencao();         this.atividades_cronograma_manutencao.cd_atividades_cronograma_manutencao = id;         o.objetoJson = this.atividades_cronograma_manutencao;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a atividades_cronograma_manutencao. '; }      this.atividades_cronograma_manutencao = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }