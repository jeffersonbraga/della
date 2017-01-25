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
var Permissao_menu_indicadores_1 = require('../../../modelo/Permissao_menu_indicadores');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Permissao_menu_indicadoresComponent = (function () {
    function Permissao_menu_indicadoresComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = '';
        this.listaDados = [];
    }
    Permissao_menu_indicadoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.permissao_menu_indicadoresAux = new Permissao_menu_indicadores_1.Permissao_menu_indicadores();
        var dataAux = new ObjetoVirtual_1.ObjetoVirtual();
        dataAux.classeJava = 'br.com.primum.modelo.permissao_menu_indicadores.Permissao_menu_indicadores';
        dataAux.objetoJson = this.permissao_menu_indicadoresAux;
        this.dataService.efetuarPesquisa(dataAux).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; });
    };
    Permissao_menu_indicadoresComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro a pesquisa de Permissao_menu_indicadores. ';
        this.router.navigate(['/home']);
    } this.listaDados = result; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Permissao_menu_indicadoresComponent.prototype, "listaDados", void 0);
    Permissao_menu_indicadoresComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'permissao_menu_indicadores-selector', templateUrl: 'permissao_menu_indicadores.component.html' }), 
        __metadata('design:paramtypes', [pesquisa_service_1.PesquisaService, router_1.Router])
    ], Permissao_menu_indicadoresComponent);
    return Permissao_menu_indicadoresComponent;
}());
exports.Permissao_menu_indicadoresComponent = Permissao_menu_indicadoresComponent;
//# sourceMappingURL=permissao_menu_indicadores.component.js.map