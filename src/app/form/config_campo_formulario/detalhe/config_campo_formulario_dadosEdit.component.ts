import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Config_campo_formulario } from '../../../modelo/Config_campo_formulario'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'config_campo_formulario-dados-edit',   templateUrl: 'config_campo_formulario_dadosEdit.component.html' }) export class Config_campo_formularioDadosEditComponent implements OnInit {    config_campo_formulario: Config_campo_formulario;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.config_campo_formulario.Config_campo_formulario";                 let id = +params['id'];         this.config_campo_formulario = new Config_campo_formulario();         this.config_campo_formulario.cd_config_campo_formulario = id;         o.objetoJson = this.config_campo_formulario;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a config_campo_formulario. ';       }      this.config_campo_formulario = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }