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
var Classificacao_ouvidoriaDadosComponent = (function () {
    function Classificacao_ouvidoriaDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Classificacao_ouvidoriaDadosDisplayModeEnum;
    }
    Classificacao_ouvidoriaDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Classificacao_ouvidoriaDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Classificacao_ouvidoriaDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Classificacao_ouvidoriaDadosDisplayModeEnum.Edit;
            break;
    } };
    Classificacao_ouvidoriaDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'classificacao_ouvidoria-dados', templateUrl: 'classificacao_ouvidoria_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Classificacao_ouvidoriaDadosComponent);
    return Classificacao_ouvidoriaDadosComponent;
}());
exports.Classificacao_ouvidoriaDadosComponent = Classificacao_ouvidoriaDadosComponent;
var Classificacao_ouvidoriaDadosDisplayModeEnum;
(function (Classificacao_ouvidoriaDadosDisplayModeEnum) {
    Classificacao_ouvidoriaDadosDisplayModeEnum[Classificacao_ouvidoriaDadosDisplayModeEnum["Details"] = 0] = "Details";
    Classificacao_ouvidoriaDadosDisplayModeEnum[Classificacao_ouvidoriaDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Classificacao_ouvidoriaDadosDisplayModeEnum[Classificacao_ouvidoriaDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Classificacao_ouvidoriaDadosDisplayModeEnum || (Classificacao_ouvidoriaDadosDisplayModeEnum = {}));
//# sourceMappingURL=classificacao_ouvidoria_dados.component.js.map