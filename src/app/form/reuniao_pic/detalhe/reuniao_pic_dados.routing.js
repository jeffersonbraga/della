"use strict";
var router_1 = require('@angular/router');
var reuniao_pic_dados_component_1 = require('./reuniao_pic_dados.component');
var reuniao_pic_dadosDetails_component_1 = require('./reuniao_pic_dadosDetails.component');
var reuniao_pic_dadosEdit_component_1 = require('./reuniao_pic_dadosEdit.component');
var reuniao_pic_dados_routes = [{ path: '', component: reuniao_pic_dados_component_1.Reuniao_picDadosComponent, children: [{ path: 'details', component: reuniao_pic_dadosDetails_component_1.Reuniao_picDadosDetailsComponent }, { path: 'edit', component: reuniao_pic_dadosEdit_component_1.Reuniao_picDadosEditComponent }] }];
exports.reuniao_pic_dados_routing = router_1.RouterModule.forChild(reuniao_pic_dados_routes);
//# sourceMappingURL=reuniao_pic_dados.routing.js.map