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
var Acao_corretiva_formularioDadosComponent = (function () {
    function Acao_corretiva_formularioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Acao_corretiva_formularioDadosDisplayModeEnum;
    }
    Acao_corretiva_formularioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Acao_corretiva_formularioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Acao_corretiva_formularioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Acao_corretiva_formularioDadosDisplayModeEnum.Edit;
            break;
    } };
    Acao_corretiva_formularioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'acao_corretiva_formulario-dados', templateUrl: 'acao_corretiva_formulario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Acao_corretiva_formularioDadosComponent);
    return Acao_corretiva_formularioDadosComponent;
}());
exports.Acao_corretiva_formularioDadosComponent = Acao_corretiva_formularioDadosComponent;
var Acao_corretiva_formularioDadosDisplayModeEnum;
(function (Acao_corretiva_formularioDadosDisplayModeEnum) {
    Acao_corretiva_formularioDadosDisplayModeEnum[Acao_corretiva_formularioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Acao_corretiva_formularioDadosDisplayModeEnum[Acao_corretiva_formularioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Acao_corretiva_formularioDadosDisplayModeEnum[Acao_corretiva_formularioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Acao_corretiva_formularioDadosDisplayModeEnum || (Acao_corretiva_formularioDadosDisplayModeEnum = {}));
//# sourceMappingURL=acao_corretiva_formulario_dados.component.js.map