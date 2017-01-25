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
var Treinamento_funcaoDadosComponent = (function () {
    function Treinamento_funcaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Treinamento_funcaoDadosDisplayModeEnum;
    }
    Treinamento_funcaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Treinamento_funcaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Treinamento_funcaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Treinamento_funcaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Treinamento_funcaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'treinamento_funcao-dados', templateUrl: 'treinamento_funcao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Treinamento_funcaoDadosComponent);
    return Treinamento_funcaoDadosComponent;
}());
exports.Treinamento_funcaoDadosComponent = Treinamento_funcaoDadosComponent;
var Treinamento_funcaoDadosDisplayModeEnum;
(function (Treinamento_funcaoDadosDisplayModeEnum) {
    Treinamento_funcaoDadosDisplayModeEnum[Treinamento_funcaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Treinamento_funcaoDadosDisplayModeEnum[Treinamento_funcaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Treinamento_funcaoDadosDisplayModeEnum[Treinamento_funcaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Treinamento_funcaoDadosDisplayModeEnum || (Treinamento_funcaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=treinamento_funcao_dados.component.js.map