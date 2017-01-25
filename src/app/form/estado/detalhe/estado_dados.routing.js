"use strict";
var router_1 = require('@angular/router');
var estado_dados_component_1 = require('./estado_dados.component');
var estado_dadosDetails_component_1 = require('./estado_dadosDetails.component');
var estado_dadosEdit_component_1 = require('./estado_dadosEdit.component');
var estado_dados_routes = [{ path: '', component: estado_dados_component_1.EstadoDadosComponent, children: [{ path: 'details', component: estado_dadosDetails_component_1.EstadoDadosDetailsComponent }, { path: 'edit', component: estado_dadosEdit_component_1.EstadoDadosEditComponent }] }];
exports.estado_dados_routing = router_1.RouterModule.forChild(estado_dados_routes);
//# sourceMappingURL=estado_dados.routing.js.map