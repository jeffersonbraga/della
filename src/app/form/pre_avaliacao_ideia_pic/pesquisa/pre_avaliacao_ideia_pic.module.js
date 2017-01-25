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
var common_1 = require('@angular/common');
var shared_module_1 = require('../../../shared/shared.module');
var pre_avaliacao_ideia_pic_component_1 = require('./pre_avaliacao_ideia_pic.component');
var pre_avaliacao_ideia_pic_routing_1 = require('./pre_avaliacao_ideia_pic.routing');
var Pre_avaliacao_ideia_picModule = (function () {
    function Pre_avaliacao_ideia_picModule() {
    }
    Pre_avaliacao_ideia_picModule = __decorate([
        core_1.NgModule({ imports: [common_1.CommonModule, pre_avaliacao_ideia_pic_routing_1.pre_avaliacao_ideia_pic_routing, shared_module_1.SharedModule], declarations: [pre_avaliacao_ideia_pic_component_1.Pre_avaliacao_ideia_picComponent], exports: [pre_avaliacao_ideia_pic_component_1.Pre_avaliacao_ideia_picComponent] }), 
        __metadata('design:paramtypes', [])
    ], Pre_avaliacao_ideia_picModule);
    return Pre_avaliacao_ideia_picModule;
}());
exports.Pre_avaliacao_ideia_picModule = Pre_avaliacao_ideia_picModule;
//# sourceMappingURL=pre_avaliacao_ideia_pic.module.js.map