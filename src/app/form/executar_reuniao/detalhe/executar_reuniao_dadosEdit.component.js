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
var Executar_reuniao_1 = require('../../../modelo/Executar_reuniao');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Executar_reuniaoDadosEditComponent = (function () {
    function Executar_reuniaoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Executar_reuniaoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.executar_reuniao.Executar_reuniao"; var id = +params['id']; _this.executar_reuniao = new Executar_reuniao_1.Executar_reuniao(); _this.executar_reuniao.cd_executar_reuniao = id; o.objetoJson = _this.executar_reuniao; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Executar_reuniaoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a executar_reuniao. ';
    } this.executar_reuniao = result; };
    Executar_reuniaoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Executar_reuniaoDadosEditComponent.prototype.onSubmit = function () { };
    Executar_reuniaoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Executar_reuniaoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'executar_reuniao-dados-edit', templateUrl: 'executar_reuniao_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Executar_reuniaoDadosEditComponent);
    return Executar_reuniaoDadosEditComponent;
}());
exports.Executar_reuniaoDadosEditComponent = Executar_reuniaoDadosEditComponent;
//# sourceMappingURL=executar_reuniao_dadosEdit.component.js.map