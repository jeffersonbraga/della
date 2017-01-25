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
var Setor_1 = require('../../../modelo/Setor');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var SetorDadosEditComponent = (function () {
    function SetorDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    SetorDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.setor.Setor"; var id = +params['id']; _this.setor = new Setor_1.Setor(); _this.setor.cd_setor = id; o.objetoJson = _this.setor; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    SetorDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a setor. ';
    } this.setor = result; };
    SetorDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    SetorDadosEditComponent.prototype.onSubmit = function () { };
    SetorDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    SetorDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'setor-dados-edit', templateUrl: 'setor_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], SetorDadosEditComponent);
    return SetorDadosEditComponent;
}());
exports.SetorDadosEditComponent = SetorDadosEditComponent;
//# sourceMappingURL=setor_dadosEdit.component.js.map