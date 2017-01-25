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
var Diagrama_helpdesk_1 = require('../../../modelo/Diagrama_helpdesk');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Diagrama_helpdeskDadosEditComponent = (function () {
    function Diagrama_helpdeskDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Diagrama_helpdeskDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.diagrama_helpdesk.Diagrama_helpdesk"; var id = +params['id']; _this.diagrama_helpdesk = new Diagrama_helpdesk_1.Diagrama_helpdesk(); _this.diagrama_helpdesk.cd_diagrama_helpdesk = id; o.objetoJson = _this.diagrama_helpdesk; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Diagrama_helpdeskDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a diagrama_helpdesk. ';
    } this.diagrama_helpdesk = result; };
    Diagrama_helpdeskDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Diagrama_helpdeskDadosEditComponent.prototype.onSubmit = function () { };
    Diagrama_helpdeskDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Diagrama_helpdeskDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'diagrama_helpdesk-dados-edit', templateUrl: 'diagrama_helpdesk_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Diagrama_helpdeskDadosEditComponent);
    return Diagrama_helpdeskDadosEditComponent;
}());
exports.Diagrama_helpdeskDadosEditComponent = Diagrama_helpdeskDadosEditComponent;
//# sourceMappingURL=diagrama_helpdesk_dadosEdit.component.js.map