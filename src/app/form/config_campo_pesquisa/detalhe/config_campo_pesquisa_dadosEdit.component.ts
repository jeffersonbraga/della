import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Config_campo_pesquisa } from '../../../modelo/Config_campo_pesquisa'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'config_campo_pesquisa-dados-edit',   templateUrl: 'config_campo_pesquisa_dadosEdit.component.html' }) export class Config_campo_pesquisaDadosEditComponent implements OnInit {    config_campo_pesquisa: Config_campo_pesquisa;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.config_campo_pesquisa.Config_campo_pesquisa";                 let id = +params['id'];         this.config_campo_pesquisa = new Config_campo_pesquisa();         this.config_campo_pesquisa.cd_config_campo_pesquisa = id;         o.objetoJson = this.config_campo_pesquisa;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a config_campo_pesquisa. ';       }      this.config_campo_pesquisa = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }