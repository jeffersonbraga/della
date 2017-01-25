import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Notificacao_grupo_usuario } from '../../../modelo/Notificacao_grupo_usuario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'notificacao_grupo_usuario-dados-details',   templateUrl: 'notificacao_grupo_usuario_dadosDetails.component.html' }) export class Notificacao_grupo_usuarioDadosDetailsComponent implements OnInit {    notificacao_grupo_usuario: Notificacao_grupo_usuario;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.notificacao_grupo_usuario.Notificacao_grupo_usuario";                 let id = +params['id'];         this.notificacao_grupo_usuario = new Notificacao_grupo_usuario();         this.notificacao_grupo_usuario.cd_notificacao_grupo_usuario = id;         o.objetoJson = this.notificacao_grupo_usuario;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a notificacao_grupo_usuario. '; }      this.notificacao_grupo_usuario = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }