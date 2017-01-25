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
var Descricao_funcionalDadosComponent = (function () {
    function Descricao_funcionalDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Descricao_funcionalDadosDisplayModeEnum;
    }
    Descricao_funcionalDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Descricao_funcionalDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Descricao_funcionalDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Descricao_funcionalDadosDisplayModeEnum.Edit;
            break;
    } };
    Descricao_funcionalDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'descricao_funcional-dados', templateUrl: 'descricao_funcional_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Descricao_funcionalDadosComponent);
    return Descricao_funcionalDadosComponent;
}());
exports.Descricao_funcionalDadosComponent = Descricao_funcionalDadosComponent;
var Descricao_funcionalDadosDisplayModeEnum;
(function (Descricao_funcionalDadosDisplayModeEnum) {
    Descricao_funcionalDadosDisplayModeEnum[Descricao_funcionalDadosDisplayModeEnum["Details"] = 0] = "Details";
    Descricao_funcionalDadosDisplayModeEnum[Descricao_funcionalDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Descricao_funcionalDadosDisplayModeEnum[Descricao_funcionalDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Descricao_funcionalDadosDisplayModeEnum || (Descricao_funcionalDadosDisplayModeEnum = {}));
//# sourceMappingURL=descricao_funcional_dados.component.js.map