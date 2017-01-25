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
var Tipo_turno_1 = require('../../../modelo/Tipo_turno');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Tipo_turnoDadosEditComponent = (function () {
    function Tipo_turnoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Tipo_turnoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.tipo_turno.Tipo_turno"; var id = +params['id']; _this.tipo_turno = new Tipo_turno_1.Tipo_turno(); _this.tipo_turno.cd_tipo_turno = id; o.objetoJson = _this.tipo_turno; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Tipo_turnoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a tipo_turno. ';
    } this.tipo_turno = result; };
    Tipo_turnoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Tipo_turnoDadosEditComponent.prototype.onSubmit = function () { };
    Tipo_turnoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Tipo_turnoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'tipo_turno-dados-edit', templateUrl: 'tipo_turno_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Tipo_turnoDadosEditComponent);
    return Tipo_turnoDadosEditComponent;
}());
exports.Tipo_turnoDadosEditComponent = Tipo_turnoDadosEditComponent;
//# sourceMappingURL=tipo_turno_dadosEdit.component.js.map