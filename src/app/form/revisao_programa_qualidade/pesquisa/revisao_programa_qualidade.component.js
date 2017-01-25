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
var Revisao_programa_qualidade_1 = require('../../../modelo/Revisao_programa_qualidade');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Revisao_programa_qualidadeComponent = (function () {
    function Revisao_programa_qualidadeComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Revisao_programa_qualidadeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.revisao_programa_qualidadeAux = new Revisao_programa_qualidade_1.Revisao_programa_qualidade();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.revisao_programa_qualidade.Revisao_programa_qualidade';
        dataAux.objetoJson = this.revisao_programa_qualidadeAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Revisao_programa_qualidadeComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Revisao_programa_qualidade. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Revisao_programa_qualidadeComponent.prototype, "listaDados", void 0);
    Revisao_programa_qualidadeComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'revisao_programa_qualidade-selector', templateUrl: 'revisao_programa_qualidade.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Revisao_programa_qualidadeComponent);
    return Revisao_programa_qualidadeComponent;
}());
exports.Revisao_programa_qualidadeComponent = Revisao_programa_qualidadeComponent;
//# sourceMappingURL=revisao_programa_qualidade.component.js.map