import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Permissao_padrao } from '../../../modelo/Permissao_padrao'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'permissao_padrao-dados-edit',   templateUrl: 'permissao_padrao_dadosEdit.component.html' }) export class Permissao_padraoDadosEditComponent implements OnInit {    permissao_padrao: Permissao_padrao;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.permissao_padrao.Permissao_padrao";                 let id = +params['id'];         this.permissao_padrao = new Permissao_padrao();         this.permissao_padrao.cd_permissao_padrao = id;         o.objetoJson = this.permissao_padrao;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a permissao_padrao. ';       }      this.permissao_padrao = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }