"use strict";
var router_1 = require('@angular/router');
var reuniao_dados_component_1 = require('./reuniao_dados.component');
var reuniao_dadosDetails_component_1 = require('./reuniao_dadosDetails.component');
var reuniao_dadosEdit_component_1 = require('./reuniao_dadosEdit.component');
var reuniao_dados_routes = [{ path: '', component: reuniao_dados_component_1.ReuniaoDadosComponent, children: [{ path: 'details', component: reuniao_dadosDetails_component_1.ReuniaoDadosDetailsComponent }, { path: 'edit', component: reuniao_dadosEdit_component_1.ReuniaoDadosEditComponent }] }];
exports.reuniao_dados_routing = router_1.RouterModule.forChild(reuniao_dados_routes);
//# sourceMappingURL=reuniao_dados.routing.js.map