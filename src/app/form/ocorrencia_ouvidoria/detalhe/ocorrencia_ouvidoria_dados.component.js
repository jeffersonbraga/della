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
var Ocorrencia_ouvidoriaDadosComponent = (function () {
    function Ocorrencia_ouvidoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Ocorrencia_ouvidoriaDadosDisplayModeEnum;
    }
    Ocorrencia_ouvidoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Ocorrencia_ouvidoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Ocorrencia_ouvidoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Ocorrencia_ouvidoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Ocorrencia_ouvidoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'ocorrencia_ouvidoria-dados', templateUrl: 'ocorrencia_ouvidoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Ocorrencia_ouvidoriaDadosComponent);
    return Ocorrencia_ouvidoriaDadosComponent;
}());
exports.Ocorrencia_ouvidoriaDadosComponent = Ocorrencia_ouvidoriaDadosComponent;
var Ocorrencia_ouvidoriaDadosDisplayModeEnum;
(function (Ocorrencia_ouvidoriaDadosDisplayModeEnum) {
    Ocorrencia_ouvidoriaDadosDisplayModeEnum[Ocorrencia_ouvidoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Ocorrencia_ouvidoriaDadosDisplayModeEnum[Ocorrencia_ouvidoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Ocorrencia_ouvidoriaDadosDisplayModeEnum[Ocorrencia_ouvidoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Ocorrencia_ouvidoriaDadosDisplayModeEnum || (Ocorrencia_ouvidoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=ocorrencia_ouvidoria_dados.component.js.map