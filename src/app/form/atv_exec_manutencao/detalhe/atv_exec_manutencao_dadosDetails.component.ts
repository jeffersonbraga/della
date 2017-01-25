import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Atv_exec_manutencao } from '../../../modelo/Atv_exec_manutencao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'atv_exec_manutencao-dados-details',   templateUrl: 'atv_exec_manutencao_dadosDetails.component.html' }) export class Atv_exec_manutencaoDadosDetailsComponent implements OnInit {    atv_exec_manutencao: Atv_exec_manutencao;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.atv_exec_manutencao.Atv_exec_manutencao";                 let id = +params['id'];         this.atv_exec_manutencao = new Atv_exec_manutencao();         this.atv_exec_manutencao.cd_atv_exec_manutencao = id;         o.objetoJson = this.atv_exec_manutencao;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a atv_exec_manutencao. '; }      this.atv_exec_manutencao = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }