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
var Descritivo_treinamentoDadosComponent = (function () {
    function Descritivo_treinamentoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Descritivo_treinamentoDadosDisplayModeEnum;
    }
    Descritivo_treinamentoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Descritivo_treinamentoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Descritivo_treinamentoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Descritivo_treinamentoDadosDisplayModeEnum.Edit;
            break;
    } };
    Descritivo_treinamentoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'descritivo_treinamento-dados', templateUrl: 'descritivo_treinamento_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Descritivo_treinamentoDadosComponent);
    return Descritivo_treinamentoDadosComponent;
}());
exports.Descritivo_treinamentoDadosComponent = Descritivo_treinamentoDadosComponent;
var Descritivo_treinamentoDadosDisplayModeEnum;
(function (Descritivo_treinamentoDadosDisplayModeEnum) {
    Descritivo_treinamentoDadosDisplayModeEnum[Descritivo_treinamentoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Descritivo_treinamentoDadosDisplayModeEnum[Descritivo_treinamentoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Descritivo_treinamentoDadosDisplayModeEnum[Descritivo_treinamentoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Descritivo_treinamentoDadosDisplayModeEnum || (Descritivo_treinamentoDadosDisplayModeEnum = {}));
//# sourceMappingURL=descritivo_treinamento_dados.component.js.map