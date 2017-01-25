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
var Evento_campanha_1 = require('../../../modelo/Evento_campanha');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Evento_campanhaDadosEditComponent = (function () {
    function Evento_campanhaDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Evento_campanhaDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.evento_campanha.Evento_campanha"; var id = +params['id']; _this.evento_campanha = new Evento_campanha_1.Evento_campanha(); _this.evento_campanha.cd_evento_campanha = id; o.objetoJson = _this.evento_campanha; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Evento_campanhaDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a evento_campanha. ';
    } this.evento_campanha = result; };
    Evento_campanhaDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Evento_campanhaDadosEditComponent.prototype.onSubmit = function () { };
    Evento_campanhaDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Evento_campanhaDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'evento_campanha-dados-edit', templateUrl: 'evento_campanha_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Evento_campanhaDadosEditComponent);
    return Evento_campanhaDadosEditComponent;
}());
exports.Evento_campanhaDadosEditComponent = Evento_campanhaDadosEditComponent;
//# sourceMappingURL=evento_campanha_dadosEdit.component.js.map