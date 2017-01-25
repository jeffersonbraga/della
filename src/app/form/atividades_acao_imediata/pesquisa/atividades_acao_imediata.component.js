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
var Atividades_acao_imediata_1 = require('../../../modelo/Atividades_acao_imediata');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Atividades_acao_imediataComponent = (function () {
    function Atividades_acao_imediataComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Atividades_acao_imediataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.atividades_acao_imediataAux = new Atividades_acao_imediata_1.Atividades_acao_imediata();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.atividades_acao_imediata.Atividades_acao_imediata';
        dataAux.objetoJson = this.atividades_acao_imediataAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Atividades_acao_imediataComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Atividades_acao_imediata. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Atividades_acao_imediataComponent.prototype, "listaDados", void 0);
    Atividades_acao_imediataComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'atividades_acao_imediata-selector', templateUrl: 'atividades_acao_imediata.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Atividades_acao_imediataComponent);
    return Atividades_acao_imediataComponent;
}());
exports.Atividades_acao_imediataComponent = Atividades_acao_imediataComponent;
//# sourceMappingURL=atividades_acao_imediata.component.js.map