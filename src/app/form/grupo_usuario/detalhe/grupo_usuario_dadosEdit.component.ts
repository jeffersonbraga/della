import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Grupo_usuario } from '../../../modelo/Grupo_usuario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'grupo_usuario-dados-edit',   templateUrl: 'grupo_usuario_dadosEdit.component.html' }) export class Grupo_usuarioDadosEditComponent implements OnInit {    grupo_usuario: Grupo_usuario;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.grupo_usuario.Grupo_usuario";                 let id = +params['id'];         this.grupo_usuario = new Grupo_usuario();         this.grupo_usuario.cd_grupo_usuario = id;         o.objetoJson = this.grupo_usuario;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a grupo_usuario. ';       }      this.grupo_usuario = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }