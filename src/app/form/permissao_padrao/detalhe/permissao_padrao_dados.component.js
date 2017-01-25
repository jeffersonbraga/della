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
var Permissao_padraoDadosComponent = (function () {
    function Permissao_padraoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Permissao_padraoDadosDisplayModeEnum;
    }
    Permissao_padraoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Permissao_padraoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Permissao_padraoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Permissao_padraoDadosDisplayModeEnum.Edit;
            break;
    } };
    Permissao_padraoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'permissao_padrao-dados', templateUrl: 'permissao_padrao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Permissao_padraoDadosComponent);
    return Permissao_padraoDadosComponent;
}());
exports.Permissao_padraoDadosComponent = Permissao_padraoDadosComponent;
var Permissao_padraoDadosDisplayModeEnum;
(function (Permissao_padraoDadosDisplayModeEnum) {
    Permissao_padraoDadosDisplayModeEnum[Permissao_padraoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Permissao_padraoDadosDisplayModeEnum[Permissao_padraoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Permissao_padraoDadosDisplayModeEnum[Permissao_padraoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Permissao_padraoDadosDisplayModeEnum || (Permissao_padraoDadosDisplayModeEnum = {}));
//# sourceMappingURL=permissao_padrao_dados.component.js.map