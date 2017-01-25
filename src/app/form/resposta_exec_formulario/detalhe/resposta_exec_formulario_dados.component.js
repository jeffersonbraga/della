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
var Resposta_exec_formularioDadosComponent = (function () {
    function Resposta_exec_formularioDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Resposta_exec_formularioDadosDisplayModeEnum;
    }
    Resposta_exec_formularioDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Resposta_exec_formularioDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Resposta_exec_formularioDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Resposta_exec_formularioDadosDisplayModeEnum.Edit;
            break;
    } };
    Resposta_exec_formularioDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'resposta_exec_formulario-dados', templateUrl: 'resposta_exec_formulario_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Resposta_exec_formularioDadosComponent);
    return Resposta_exec_formularioDadosComponent;
}());
exports.Resposta_exec_formularioDadosComponent = Resposta_exec_formularioDadosComponent;
var Resposta_exec_formularioDadosDisplayModeEnum;
(function (Resposta_exec_formularioDadosDisplayModeEnum) {
    Resposta_exec_formularioDadosDisplayModeEnum[Resposta_exec_formularioDadosDisplayModeEnum["Details"] = 0] = "Details";
    Resposta_exec_formularioDadosDisplayModeEnum[Resposta_exec_formularioDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Resposta_exec_formularioDadosDisplayModeEnum[Resposta_exec_formularioDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Resposta_exec_formularioDadosDisplayModeEnum || (Resposta_exec_formularioDadosDisplayModeEnum = {}));
//# sourceMappingURL=resposta_exec_formulario_dados.component.js.map