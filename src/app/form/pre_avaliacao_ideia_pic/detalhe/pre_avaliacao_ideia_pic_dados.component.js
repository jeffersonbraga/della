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
var Pre_avaliacao_ideia_picDadosComponent = (function () {
    function Pre_avaliacao_ideia_picDadosComponent(router) {
        this.router = router;
        this.displayModeEnum = Pre_avaliacao_ideia_picDadosDisplayModeEnum;
    }
    Pre_avaliacao_ideia_picDadosComponent.prototype.ngOnInit = function () { var path = this.router.url.split('/')[3]; switch (path) {
        case 'details':
            this.displayMode = Pre_avaliacao_ideia_picDadosDisplayModeEnum.Details;
            break;
        case 'info':
            this.displayMode = Pre_avaliacao_ideia_picDadosDisplayModeEnum.Orders;
            break;
        case 'edit':
            this.displayMode = Pre_avaliacao_ideia_picDadosDisplayModeEnum.Edit;
            break;
    } };
    Pre_avaliacao_ideia_picDadosComponent = __decorate([
        core_1.Component({ moduleId: module.id, selector: 'pre_avaliacao_ideia_pic-dados', templateUrl: 'pre_avaliacao_ideia_pic_dados.component.html' }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Pre_avaliacao_ideia_picDadosComponent);
    return Pre_avaliacao_ideia_picDadosComponent;
}());
exports.Pre_avaliacao_ideia_picDadosComponent = Pre_avaliacao_ideia_picDadosComponent;
var Pre_avaliacao_ideia_picDadosDisplayModeEnum;
(function (Pre_avaliacao_ideia_picDadosDisplayModeEnum) {
    Pre_avaliacao_ideia_picDadosDisplayModeEnum[Pre_avaliacao_ideia_picDadosDisplayModeEnum["Details"] = 0] = "Details";
    Pre_avaliacao_ideia_picDadosDisplayModeEnum[Pre_avaliacao_ideia_picDadosDisplayModeEnum["Orders"] = 1] = "Orders";
    Pre_avaliacao_ideia_picDadosDisplayModeEnum[Pre_avaliacao_ideia_picDadosDisplayModeEnum["Edit"] = 2] = "Edit";
})(Pre_avaliacao_ideia_picDadosDisplayModeEnum || (Pre_avaliacao_ideia_picDadosDisplayModeEnum = {}));
//# sourceMappingURL=pre_avaliacao_ideia_pic_dados.component.js.map