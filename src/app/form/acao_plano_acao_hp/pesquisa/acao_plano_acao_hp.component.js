"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Acao_plano_acao_hp_1 = require('../../../modelo/Acao_plano_acao_hp');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Acao_plano_acao_hpComponent = (function () {
    function Acao_plano_acao_hpComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Acao_plano_acao_hpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acao_plano_acao_hpAux = new Acao_plano_acao_hp_1.Acao_plano_acao_hp();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.acao_plano_acao_hp.Acao_plano_acao_hp';
        dataAux.objetoJson = this.acao_plano_acao_hpAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Acao_plano_acao_hpComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Acao_plano_acao_hp. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Acao_plano_acao_hpComponent.prototype, "listaDados", void 0);
    Acao_plano_acao_hpComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_plano_acao_hp-selector', templateUrl: 'acao_plano_acao_hp.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Acao_plano_acao_hpComponent);
    return Acao_plano_acao_hpComponent;
}());
exports.Acao_plano_acao_hpComponent = Acao_plano_acao_hpComponent;
//# sourceMappingURL=acao_plano_acao_hp.component.js.map