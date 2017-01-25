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
var Exame_medico_1 = require('../../../modelo/Exame_medico');
var ObjetoVirtual_1 = require('../../../modelo/ObjetoVirtual');
var pesquisa_service_1 = require('../../../core/services/pesquisa/pesquisa.service');
var Exame_medicoDadosEditComponent = (function () {
    function Exame_medicoDadosEditComponent(router, route, pesquisaService) {
        this.router = router;
        this.route = route;
        this.pesquisaService = pesquisaService;
    }
    Exame_medicoDadosEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) { var o = new ObjetoVirtual_1.ObjetoVirtual(); o.classeJava = "br.com.primum.modelo.exame_medico.Exame_medico"; var id = +params['id']; _this.exame_medico = new Exame_medico_1.Exame_medico(); _this.exame_medico.cd_exame_medico = id; o.objetoJson = _this.exame_medico; _this.pesquisaService.efetuarPesquisa(o).subscribe(function (result) { return _this.onEfetuarPesquisa(result); }, function (error) { return _this.errorMessage = error; }); });
    };
    Exame_medicoDadosEditComponent.prototype.onEfetuarPesquisa = function (result) { if (!result) {
        this.errorMessage = 'Houve um erro ao pesquisa a exame_medico. ';
    } this.exame_medico = result; };
    Exame_medicoDadosEditComponent.prototype.ngOnDestroy = function () { this.sub.unsubscribe(); };
    Exame_medicoDadosEditComponent.prototype.onSubmit = function () { };
    Exame_medicoDadosEditComponent.prototype.onCancel = function (event) { event.preventDefault(); this.router.navigate(['/']); };
    Exame_medicoDadosEditComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'exame_medico-dados-edit', templateUrl: 'exame_medico_dadosEdit.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, pesquisa_service_1.PesquisaService])
    ], Exame_medicoDadosEditComponent);
    return Exame_medicoDadosEditComponent;
}());
exports.Exame_medicoDadosEditComponent = Exame_medicoDadosEditComponent;
//# sourceMappingURL=exame_medico_dadosEdit.component.js.map