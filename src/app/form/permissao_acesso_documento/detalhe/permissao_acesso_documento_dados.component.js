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
var Permissao_acesso_documentoDadosComponent = (function () {
    function Permissao_acesso_documentoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Permissao_acesso_documentoDadosDisplayModeEnum;
    }
    Permissao_acesso_documentoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Permissao_acesso_documentoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Permissao_acesso_documentoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Permissao_acesso_documentoDadosDisplayModeEnum.Edit;
            break;
    } };
    Permissao_acesso_documentoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'permissao_acesso_documento-dados', templateUrl: 'permissao_acesso_documento_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Permissao_acesso_documentoDadosComponent);
    return Permissao_acesso_documentoDadosComponent;
}());
exports.Permissao_acesso_documentoDadosComponent = Permissao_acesso_documentoDadosComponent;
var Permissao_acesso_documentoDadosDisplayModeEnum;
(function (Permissao_acesso_documentoDadosDisplayModeEnum) {
    Permissao_acesso_documentoDadosDisplayModeEnum[Permissao_acesso_documentoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Permissao_acesso_documentoDadosDisplayModeEnum[Permissao_acesso_documentoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Permissao_acesso_documentoDadosDisplayModeEnum[Permissao_acesso_documentoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Permissao_acesso_documentoDadosDisplayModeEnum || (Permissao_acesso_documentoDadosDisplayModeEnum = {}));
//# sourceMappingURL=permissao_acesso_documento_dados.component.js.map