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
var Participantes_treinamentoDadosComponent = (function () {
    function Participantes_treinamentoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Participantes_treinamentoDadosDisplayModeEnum;
    }
    Participantes_treinamentoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Participantes_treinamentoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Participantes_treinamentoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Participantes_treinamentoDadosDisplayModeEnum.Edit;
            break;
    } };
    Participantes_treinamentoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'participantes_treinamento-dados', templateUrl: 'participantes_treinamento_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Participantes_treinamentoDadosComponent);
    return Participantes_treinamentoDadosComponent;
}());
exports.Participantes_treinamentoDadosComponent = Participantes_treinamentoDadosComponent;
var Participantes_treinamentoDadosDisplayModeEnum;
(function (Participantes_treinamentoDadosDisplayModeEnum) {
    Participantes_treinamentoDadosDisplayModeEnum[Participantes_treinamentoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Participantes_treinamentoDadosDisplayModeEnum[Participantes_treinamentoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Participantes_treinamentoDadosDisplayModeEnum[Participantes_treinamentoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Participantes_treinamentoDadosDisplayModeEnum || (Participantes_treinamentoDadosDisplayModeEnum = {}));
//# sourceMappingURL=participantes_treinamento_dados.component.js.map