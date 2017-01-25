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
var Natureza_ocorrenciaDadosComponent = (function () {
    function Natureza_ocorrenciaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Natureza_ocorrenciaDadosDisplayModeEnum;
    }
    Natureza_ocorrenciaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Natureza_ocorrenciaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Natureza_ocorrenciaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Natureza_ocorrenciaDadosDisplayModeEnum.Edit;
            break;
    } };
    Natureza_ocorrenciaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'natureza_ocorrencia-dados', templateUrl: 'natureza_ocorrencia_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Natureza_ocorrenciaDadosComponent);
    return Natureza_ocorrenciaDadosComponent;
}());
exports.Natureza_ocorrenciaDadosComponent = Natureza_ocorrenciaDadosComponent;
var Natureza_ocorrenciaDadosDisplayModeEnum;
(function (Natureza_ocorrenciaDadosDisplayModeEnum) {
    Natureza_ocorrenciaDadosDisplayModeEnum[Natureza_ocorrenciaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Natureza_ocorrenciaDadosDisplayModeEnum[Natureza_ocorrenciaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Natureza_ocorrenciaDadosDisplayModeEnum[Natureza_ocorrenciaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Natureza_ocorrenciaDadosDisplayModeEnum || (Natureza_ocorrenciaDadosDisplayModeEnum = {}));
//# sourceMappingURL=natureza_ocorrencia_dados.component.js.map