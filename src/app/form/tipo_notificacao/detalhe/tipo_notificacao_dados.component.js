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
var Tipo_notificacaoDadosComponent = (function () {
    function Tipo_notificacaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Tipo_notificacaoDadosDisplayModeEnum;
    }
    Tipo_notificacaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Tipo_notificacaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Tipo_notificacaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Tipo_notificacaoDadosDisplayModeEnum.Edit;
            break;
    } };
    Tipo_notificacaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'tipo_notificacao-dados', templateUrl: 'tipo_notificacao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Tipo_notificacaoDadosComponent);
    return Tipo_notificacaoDadosComponent;
}());
exports.Tipo_notificacaoDadosComponent = Tipo_notificacaoDadosComponent;
var Tipo_notificacaoDadosDisplayModeEnum;
(function (Tipo_notificacaoDadosDisplayModeEnum) {
    Tipo_notificacaoDadosDisplayModeEnum[Tipo_notificacaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    Tipo_notificacaoDadosDisplayModeEnum[Tipo_notificacaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Tipo_notificacaoDadosDisplayModeEnum[Tipo_notificacaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Tipo_notificacaoDadosDisplayModeEnum || (Tipo_notificacaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=tipo_notificacao_dados.component.js.map