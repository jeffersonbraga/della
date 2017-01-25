"use strict";
var router_1 = require('@angular/router');
var pic_dados_component_1 = require('./pic_dados.component');
var pic_dadosDetails_component_1 = require('./pic_dadosDetails.component');
var pic_dadosEdit_component_1 = require('./pic_dadosEdit.component');
var pic_dados_routes = [{ path: '', component: pic_dados_component_1.PicDadosComponent, children: [{ path: 'details', component: pic_dadosDetails_component_1.PicDadosDetailsComponent }, { path: 'edit', component: pic_dadosEdit_component_1.PicDadosEditComponent }] }];
exports.pic_dados_routing = router_1.RouterModule.forChild(pic_dados_routes);
//# sourceMappingURL=pic_dados.routing.js.map