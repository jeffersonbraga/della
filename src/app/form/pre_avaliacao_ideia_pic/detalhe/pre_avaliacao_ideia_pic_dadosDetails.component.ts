import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Pre_avaliacao_ideia_pic } from '../../../modelo/Pre_avaliacao_ideia_pic'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'pre_avaliacao_ideia_pic-dados-details',   templateUrl: 'pre_avaliacao_ideia_pic_dadosDetails.component.html' }) export class Pre_avaliacao_ideia_picDadosDetailsComponent implements OnInit {    pre_avaliacao_ideia_pic: Pre_avaliacao_ideia_pic;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.pre_avaliacao_ideia_pic.Pre_avaliacao_ideia_pic";                 let id = +params['id'];         this.pre_avaliacao_ideia_pic = new Pre_avaliacao_ideia_pic();         this.pre_avaliacao_ideia_pic.cd_pre_avaliacao_ideia_pic = id;         o.objetoJson = this.pre_avaliacao_ideia_pic;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a pre_avaliacao_ideia_pic. '; }      this.pre_avaliacao_ideia_pic = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }