import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Pic } from '../../../modelo/Pic'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'pic-dados-details',   templateUrl: 'pic_dadosDetails.component.html' }) export class PicDadosDetailsComponent implements OnInit {    pic: Pic;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.pic.Pic";                 let id = +params['id'];         this.pic = new Pic();         this.pic.cd_pic = id;         o.objetoJson = this.pic;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a pic. '; }      this.pic = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }