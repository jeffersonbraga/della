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
var OcorrenciaDadosComponent = (function () {
    function OcorrenciaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = OcorrenciaDadosDisplayModeEnum;
    }
    OcorrenciaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = OcorrenciaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = OcorrenciaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = OcorrenciaDadosDisplayModeEnum.Edit;
            break;
    } };
    OcorrenciaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ocorrencia-dados', templateUrl: 'ocorrencia_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], OcorrenciaDadosComponent);
    return OcorrenciaDadosComponent;
}());
exports.OcorrenciaDadosComponent = OcorrenciaDadosComponent;
var OcorrenciaDadosDisplayModeEnum;
(function (OcorrenciaDadosDisplayModeEnum) {
    OcorrenciaDadosDisplayModeEnum[OcorrenciaDadosDisplayModeEnum["Details"] = 0] = "Details";
    OcorrenciaDadosDisplayModeEnum[OcorrenciaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    OcorrenciaDadosDisplayModeEnum[OcorrenciaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(OcorrenciaDadosDisplayModeEnum || (OcorrenciaDadosDisplayModeEnum = {}));
//# sourceMappingURL=ocorrencia_dados.component.js.map