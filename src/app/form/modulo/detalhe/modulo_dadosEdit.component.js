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
var Modulo_1 = require('../../../modelo/Modulo');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var ModuloDadosEditComponent = (function () {
    function ModuloDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    ModuloDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.modulo.Modulo"; var id = +params['id']; _this.modulo = new Modulo_1.Modulo(); _this.modulo.cd_modulo = id; o.objetoJson = _this.modulo; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    ModuloDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a modulo. ';
    } this.modulo = result; };
    ModuloDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    ModuloDadosEditComponent.prototype.onSubmit = function () { };
    ModuloDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    ModuloDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'modulo-dados-edit', templateUrl: 'modulo_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], ModuloDadosEditComponent);
    return ModuloDadosEditComponent;
}());
exports.ModuloDadosEditComponent = ModuloDadosEditComponent;
//# sourceMappingURL=modulo_dadosEdit.component.js.map