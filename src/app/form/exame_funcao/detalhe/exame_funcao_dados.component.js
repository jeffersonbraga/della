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
var Exame_funcaoDadosComponent = (function () {
    function Exame_funcaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Exame_funcaoDadosDisplayModeEnum;
    }
    Exame_funcaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Exame_funcaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Exame_funcaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Exame_funcaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Exame_funcaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'exame_funcao-dados', templateUrl: 'exame_funcao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Exame_funcaoDadosComponent);
    return Exame_funcaoDadosComponent;
}());
exports.Exame_funcaoDadosComponent = Exame_funcaoDadosComponent;
var Exame_funcaoDadosDisplayModeEnum;
(function (Exame_funcaoDadosDisplayModeEnum) {
    Exame_funcaoDadosDisplayModeEnum[Exame_funcaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Exame_funcaoDadosDisplayModeEnum[Exame_funcaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Exame_funcaoDadosDisplayModeEnum[Exame_funcaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Exame_funcaoDadosDisplayModeEnum || (Exame_funcaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=exame_funcao_dados.component.js.map