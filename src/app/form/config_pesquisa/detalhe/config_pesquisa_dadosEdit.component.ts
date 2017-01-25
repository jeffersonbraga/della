import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router'; import { Subscription } from 'rxjs/Subscription';  import { Config_pesquisa } from '../../../modelo/Config_pesquisa'; import { ObjetoVirtual } from '../../../modelo/ObjetoVirtual'; import { PesquisaService } from '../../../core/services/pesquisa/pesquisa.service';  @Component({   moduleId: module.id,   selector: 'config_pesquisa-dados-edit',   templateUrl: 'config_pesquisa_dadosEdit.component.html' }) export class Config_pesquisaDadosEditComponent implements OnInit {    config_pesquisa: Config_pesquisa;    private sub: Subscription;    private errorMessage: string;     constructor(private router: Router,               private route: ActivatedRoute,               private pesquisaService: PesquisaService) { }    ngOnInit() {       this.sub = this.route.parent.params.subscribe(params => {         let o : ObjetoVirtual = new ObjetoVirtual();         o.classeJava = "br.com.primum.modelo.config_pesquisa.Config_pesquisa";                 let id = +params['id'];         this.config_pesquisa = new Config_pesquisa();         this.config_pesquisa.cd_config_pesquisa = id;         o.objetoJson = this.config_pesquisa;          this.pesquisaService.efetuarPesquisa(o)             .subscribe(             result => this.onEfetuarPesquisa(result),             error =>  this.errorMessage = <any>error);       });   }    onEfetuarPesquisa(result : any) {     if (!result) {       this.errorMessage = 'Houve um erro ao pesquisa a config_pesquisa. ';       }      this.config_pesquisa = result;   }    ngOnDestroy() {     this.sub.unsubscribe();   }     onSubmit() {         }     onCancel(event: Event) {     event.preventDefault();     this.router.navigate(['/']);   }  }