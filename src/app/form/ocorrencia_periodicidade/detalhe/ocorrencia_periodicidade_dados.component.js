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
var Ocorrencia_periodicidadeDadosComponent = (function () {
    function Ocorrencia_periodicidadeDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Ocorrencia_periodicidadeDadosDisplayModeEnum;
    }
    Ocorrencia_periodicidadeDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Ocorrencia_periodicidadeDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Ocorrencia_periodicidadeDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Ocorrencia_periodicidadeDadosDisplayModeEnum.Edit;
            break;
    } };
    Ocorrencia_periodicidadeDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ocorrencia_periodicidade-dados', templateUrl: 'ocorrencia_periodicidade_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Ocorrencia_periodicidadeDadosComponent);
    return Ocorrencia_periodicidadeDadosComponent;
}());
exports.Ocorrencia_periodicidadeDadosComponent = Ocorrencia_periodicidadeDadosComponent;
var Ocorrencia_periodicidadeDadosDisplayModeEnum;
(function (Ocorrencia_periodicidadeDadosDisplayModeEnum) {
    Ocorrencia_periodicidadeDadosDisplayModeEnum[Ocorrencia_periodicidadeDadosDisplayModeEnum["Details"] = 0] = "Details";
    Ocorrencia_periodicidadeDadosDisplayModeEnum[Ocorrencia_periodicidadeDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Ocorrencia_periodicidadeDadosDisplayModeEnum[Ocorrencia_periodicidadeDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Ocorrencia_periodicidadeDadosDisplayModeEnum || (Ocorrencia_periodicidadeDadosDisplayModeEnum = {}));
//# sourceMappingURL=ocorrencia_periodicidade_dados.component.js.map