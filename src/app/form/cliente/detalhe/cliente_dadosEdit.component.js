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
var Cliente_1 = require('../../../modelo/Cliente');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var ClienteDadosEditComponent = (function () {
    function ClienteDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    ClienteDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.cliente.Cliente"; var id = +params['id']; _this.cliente = new Cliente_1.Cliente(); _this.cliente.cd_cliente = id; o.objetoJson = _this.cliente; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    ClienteDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a cliente. ';
    } this.cliente = result; };
    ClienteDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    ClienteDadosEditComponent.prototype.onSubmit = function () { };
    ClienteDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    ClienteDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'cliente-dados-edit', templateUrl: 'cliente_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], ClienteDadosEditComponent);
    return ClienteDadosEditComponent;
}());
exports.ClienteDadosEditComponent = ClienteDadosEditComponent;
//# sourceMappingURL=cliente_dadosEdit.component.js.map