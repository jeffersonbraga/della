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
var Resolucao_ocorrenciaDadosComponent = (function () {
    function Resolucao_ocorrenciaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Resolucao_ocorrenciaDadosDisplayModeEnum;
    }
    Resolucao_ocorrenciaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Resolucao_ocorrenciaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Resolucao_ocorrenciaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Resolucao_ocorrenciaDadosDisplayModeEnum.Edit;
            break;
    } };
    Resolucao_ocorrenciaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'resolucao_ocorrencia-dados', templateUrl: 'resolucao_ocorrencia_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Resolucao_ocorrenciaDadosComponent);
    return Resolucao_ocorrenciaDadosComponent;
}());
exports.Resolucao_ocorrenciaDadosComponent = Resolucao_ocorrenciaDadosComponent;
var Resolucao_ocorrenciaDadosDisplayModeEnum;
(function (Resolucao_ocorrenciaDadosDisplayModeEnum) {
    Resolucao_ocorrenciaDadosDisplayModeEnum[Resolucao_ocorrenciaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Resolucao_ocorrenciaDadosDisplayModeEnum[Resolucao_ocorrenciaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Resolucao_ocorrenciaDadosDisplayModeEnum[Resolucao_ocorrenciaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Resolucao_ocorrenciaDadosDisplayModeEnum || (Resolucao_ocorrenciaDadosDisplayModeEnum = {}));
//# sourceMappingURL=resolucao_ocorrencia_dados.component.js.map