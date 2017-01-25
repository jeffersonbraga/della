import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Reuniao_pic } from '../../../modelo/Reuniao_pic'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'reuniao_pic-dados-details',   templateUrl: 'reuniao_pic_dadosDetails.component.html' }) export class Reuniao_picDadosDetailsComponent implements OnInit {    reuniao_pic: Reuniao_pic;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.reuniao_pic.Reuniao_pic";                 let id = +params['id'];         this.reuniao_pic = new Reuniao_pic();         this.reuniao_pic.cd_reuniao_pic = id;         o.objetoJson = this.reuniao_pic;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a reuniao_pic. '; }      this.reuniao_pic = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }