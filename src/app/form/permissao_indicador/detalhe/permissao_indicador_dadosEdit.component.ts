import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Permissao_indicador } from '../../../modelo/Permissao_indicador'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'permissao_indicador-dados-edit',   templateUrl: 'permissao_indicador_dadosEdit.component.html' }) export class Permissao_indicadorDadosEditComponent implements OnInit {    permissao_indicador: Permissao_indicador;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.permissao_indicador.Permissao_indicador";                 let id = +params['id'];         this.permissao_indicador = new Permissao_indicador();         this.permissao_indicador.cd_permissao_indicador = id;         o.objetoJson = this.permissao_indicador;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a permissao_indicador. ';       }      this.permissao_indicador = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }