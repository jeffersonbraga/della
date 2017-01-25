import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Usuario_setor } from '../../../modelo/Usuario_setor'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'usuario_setor-dados-details',   templateUrl: 'usuario_setor_dadosDetails.component.html' }) export class Usuario_setorDadosDetailsComponent implements OnInit {    usuario_setor: Usuario_setor;    private sub: Subscription;    private errorMessage: string;    constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.usuario_setor.Usuario_setor";                 let id = +params['id'];         this.usuario_setor = new Usuario_setor();         this.usuario_setor.cd_usuario_setor = id;         o.objetoJson = this.usuario_setor;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a usuario_setor. '; }      this.usuario_setor = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   } }