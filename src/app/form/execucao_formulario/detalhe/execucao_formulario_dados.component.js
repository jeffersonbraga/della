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
var Execucao_formularioDadosComponent = (function () {
    function Execucao_formularioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Execucao_formularioDadosDisplayModeEnum;
    }
    Execucao_formularioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Execucao_formularioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Execucao_formularioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Execucao_formularioDadosDisplayModeEnum.Edit;
            break;
    } };
    Execucao_formularioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'execucao_formulario-dados', templateUrl: 'execucao_formulario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Execucao_formularioDadosComponent);
    return Execucao_formularioDadosComponent;
}());
exports.Execucao_formularioDadosComponent = Execucao_formularioDadosComponent;
var Execucao_formularioDadosDisplayModeEnum;
(function (Execucao_formularioDadosDisplayModeEnum) {
    Execucao_formularioDadosDisplayModeEnum[Execucao_formularioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Execucao_formularioDadosDisplayModeEnum[Execucao_formularioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Execucao_formularioDadosDisplayModeEnum[Execucao_formularioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Execucao_formularioDadosDisplayModeEnum || (Execucao_formularioDadosDisplayModeEnum = {}));
//# sourceMappingURL=execucao_formulario_dados.component.js.map