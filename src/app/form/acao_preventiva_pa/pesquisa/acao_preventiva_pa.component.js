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
var Acao_preventiva_pa_1 = require('../../../modelo/Acao_preventiva_pa');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Acao_preventiva_paComponent = (function () {
    function Acao_preventiva_paComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Acao_preventiva_paComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.acao_preventiva_paAux = new Acao_preventiva_pa_1.Acao_preventiva_pa();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.acao_preventiva_pa.Acao_preventiva_pa';
        dataAux.objetoJson = this.acao_preventiva_paAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Acao_preventiva_paComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Acao_preventiva_pa. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Acao_preventiva_paComponent.prototype, "listaDados", void 0);
    Acao_preventiva_paComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_preventiva_pa-selector', templateUrl: 'acao_preventiva_pa.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Acao_preventiva_paComponent);
    return Acao_preventiva_paComponent;
}());
exports.Acao_preventiva_paComponent = Acao_preventiva_paComponent;
//# sourceMappingURL=acao_preventiva_pa.component.js.map