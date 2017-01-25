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
var Indicador_customizadoDadosComponent = (function () {
    function Indicador_customizadoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Indicador_customizadoDadosDisplayModeEnum;
    }
    Indicador_customizadoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Indicador_customizadoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Indicador_customizadoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Indicador_customizadoDadosDisplayModeEnum.Edit;
            break;
    } };
    Indicador_customizadoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'indicador_customizado-dados', templateUrl: 'indicador_customizado_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Indicador_customizadoDadosComponent);
    return Indicador_customizadoDadosComponent;
}());
exports.Indicador_customizadoDadosComponent = Indicador_customizadoDadosComponent;
var Indicador_customizadoDadosDisplayModeEnum;
(function (Indicador_customizadoDadosDisplayModeEnum) {
    Indicador_customizadoDadosDisplayModeEnum[Indicador_customizadoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Indicador_customizadoDadosDisplayModeEnum[Indicador_customizadoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Indicador_customizadoDadosDisplayModeEnum[Indicador_customizadoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Indicador_customizadoDadosDisplayModeEnum || (Indicador_customizadoDadosDisplayModeEnum = {}));
//# sourceMappingURL=indicador_customizado_dados.component.js.map