import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Funcao_usuario } from '../../../modelo/Funcao_usuario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'funcao_usuario-dados-edit',   templateUrl: 'funcao_usuario_dadosEdit.component.html' }) export class Funcao_usuarioDadosEditComponent implements OnInit {    funcao_usuario: Funcao_usuario;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.funcao_usuario.Funcao_usuario";                 let id = +params['id'];         this.funcao_usuario = new Funcao_usuario();         this.funcao_usuario.cd_funcao_usuario = id;         o.objetoJson = this.funcao_usuario;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a funcao_usuario. ';       }      this.funcao_usuario = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }