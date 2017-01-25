import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Notificacao_usuario } from '../../../modelo/Notificacao_usuario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'notificacao_usuario-dados-edit',   templateUrl: 'notificacao_usuario_dadosEdit.component.html' }) export class Notificacao_usuarioDadosEditComponent implements OnInit {    notificacao_usuario: Notificacao_usuario;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.notificacao_usuario.Notificacao_usuario";                 let id = +params['id'];         this.notificacao_usuario = new Notificacao_usuario();         this.notificacao_usuario.cd_notificacao_usuario = id;         o.objetoJson = this.notificacao_usuario;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a notificacao_usuario. ';       }      this.notificacao_usuario = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }