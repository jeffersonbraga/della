import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Acao_corretiva_formulario } from '../../../modelo/Acao_corretiva_formulario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'acao_corretiva_formulario-dados-edit',   templateUrl: 'acao_corretiva_formulario_dadosEdit.component.html' }) export class Acao_corretiva_formularioDadosEditComponent implements OnInit {    acao_corretiva_formulario: Acao_corretiva_formulario;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.acao_corretiva_formulario.Acao_corretiva_formulario";                 let id = +params['id'];         this.acao_corretiva_formulario = new Acao_corretiva_formulario();         this.acao_corretiva_formulario.cd_acao_corretiva_formulario = id;         o.objetoJson = this.acao_corretiva_formulario;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a acao_corretiva_formulario. ';       }      this.acao_corretiva_formulario = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }