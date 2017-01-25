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
var Manutencao_preventivaDadosComponent = (function () {
    function Manutencao_preventivaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Manutencao_preventivaDadosDisplayModeEnum;
    }
    Manutencao_preventivaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Manutencao_preventivaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Manutencao_preventivaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Manutencao_preventivaDadosDisplayModeEnum.Edit;
            break;
    } };
    Manutencao_preventivaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'manutencao_preventiva-dados', templateUrl: 'manutencao_preventiva_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Manutencao_preventivaDadosComponent);
    return Manutencao_preventivaDadosComponent;
}());
exports.Manutencao_preventivaDadosComponent = Manutencao_preventivaDadosComponent;
var Manutencao_preventivaDadosDisplayModeEnum;
(function (Manutencao_preventivaDadosDisplayModeEnum) {
    Manutencao_preventivaDadosDisplayModeEnum[Manutencao_preventivaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Manutencao_preventivaDadosDisplayModeEnum[Manutencao_preventivaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Manutencao_preventivaDadosDisplayModeEnum[Manutencao_preventivaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Manutencao_preventivaDadosDisplayModeEnum || (Manutencao_preventivaDadosDisplayModeEnum = {}));
//# sourceMappingURL=manutencao_preventiva_dados.component.js.map