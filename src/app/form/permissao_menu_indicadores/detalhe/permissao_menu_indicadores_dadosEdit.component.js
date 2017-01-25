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
var Permissao_menu_indicadoresDadosEditComponent = (function () {
    function Permissao_menu_indicadoresDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Permissao_menu_indicadoresDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.permissao_menu_indicadores.Permissao_menu_indicadores"; var id = +params['id']; _this.permissao_menu_indicadores = new Permissao_menu_indicadores_1.Permissao_menu_indicadores(); _this.permissao_menu_indicadores.cd_permissao_menu_indicadores = id; o.objetoJson = _this.permissao_menu_indicadores; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Permissao_menu_indicadoresDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a permissao_menu_indicadores. ';
    } this.permissao_menu_indicadores = result; };
    Permissao_menu_indicadoresDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Permissao_menu_indicadoresDadosEditComponent.prototype.onSubmit = function () { };
    Permissao_menu_indicadoresDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Permissao_menu_indicadoresDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'permissao_menu_indicadores-dados-edit', templateUrl: 'permissao_menu_indicadores_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Permissao_menu_indicadoresDadosEditComponent);
    return Permissao_menu_indicadoresDadosEditComponent;
}());
exports.Permissao_menu_indicadoresDadosEditComponent = Permissao_menu_indicadoresDadosEditComponent;
//# sourceMappingURL=permissao_menu_indicadores_dadosEdit.component.js.map