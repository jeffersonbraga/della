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
var NotificacaoDadosComponent = (function () {
    function NotificacaoDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = NotificacaoDadosDisplayModeEnum;
    }
    NotificacaoDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = NotificacaoDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = NotificacaoDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = NotificacaoDadosDisplayModeEnum.Edit;
            break;
    } };
    NotificacaoDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'notificacao-dados', templateUrl: 'notificacao_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], NotificacaoDadosComponent);
    return NotificacaoDadosComponent;
}());
exports.NotificacaoDadosComponent = NotificacaoDadosComponent;
var NotificacaoDadosDisplayModeEnum;
(function (NotificacaoDadosDisplayModeEnum) {
    NotificacaoDadosDisplayModeEnum[NotificacaoDadosDisplayModeEnum["Details"] = 0] = "Details";
    NotificacaoDadosDisplayModeEnum[NotificacaoDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    NotificacaoDadosDisplayModeEnum[NotificacaoDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(NotificacaoDadosDisplayModeEnum || (NotificacaoDadosDisplayModeEnum = {}));
//# sourceMappingURL=notificacao_dados.component.js.map