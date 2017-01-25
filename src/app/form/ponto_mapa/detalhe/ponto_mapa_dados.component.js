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
var Ponto_mapaDadosComponent = (function () {
    function Ponto_mapaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Ponto_mapaDadosDisplayModeEnum;
    }
    Ponto_mapaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Ponto_mapaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Ponto_mapaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Ponto_mapaDadosDisplayModeEnum.Edit;
            break;
    } };
    Ponto_mapaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ponto_mapa-dados', templateUrl: 'ponto_mapa_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Ponto_mapaDadosComponent);
    return Ponto_mapaDadosComponent;
}());
exports.Ponto_mapaDadosComponent = Ponto_mapaDadosComponent;
var Ponto_mapaDadosDisplayModeEnum;
(function (Ponto_mapaDadosDisplayModeEnum) {
    Ponto_mapaDadosDisplayModeEnum[Ponto_mapaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Ponto_mapaDadosDisplayModeEnum[Ponto_mapaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Ponto_mapaDadosDisplayModeEnum[Ponto_mapaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Ponto_mapaDadosDisplayModeEnum || (Ponto_mapaDadosDisplayModeEnum = {}));
//# sourceMappingURL=ponto_mapa_dados.component.js.map