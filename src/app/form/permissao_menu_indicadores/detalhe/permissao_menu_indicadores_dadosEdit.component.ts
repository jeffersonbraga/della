import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Permissao_menu_indicadores } from '../../../modelo/Permissao_menu_indicadores'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'permissao_menu_indicadores-dados-edit',   templateUrl: 'permissao_menu_indicadores_dadosEdit.component.html' }) export class Permissao_menu_indicadoresDadosEditComponent implements OnInit {    permissao_menu_indicadores: Permissao_menu_indicadores;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.permissao_menu_indicadores.Permissao_menu_indicadores";                 let id = +params['id'];         this.permissao_menu_indicadores = new Permissao_menu_indicadores();         this.permissao_menu_indicadores.cd_permissao_menu_indicadores = id;         o.objetoJson = this.permissao_menu_indicadores;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a permissao_menu_indicadores. ';       }      this.permissao_menu_indicadores = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }