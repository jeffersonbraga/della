"use strict";
var router_1 = require('@angular/router');
var tipo_campo_dados_component_1 = require('./tipo_campo_dados.component');
var tipo_campo_dadosDetails_component_1 = require('./tipo_campo_dadosDetails.component');
var tipo_campo_dadosEdit_component_1 = require('./tipo_campo_dadosEdit.component');
var tipo_campo_dados_routes = [{ path: '', component: tipo_campo_dados_component_1.Tipo_campoDadosComponent, children: [{ path: 'details', component: tipo_campo_dadosDetails_component_1.Tipo_campoDadosDetailsComponent }, { path: 'edit', component: tipo_campo_dadosEdit_component_1.Tipo_campoDadosEditComponent }] }];
exports.tipo_campo_dados_routing = router_1.RouterModule.forChild(tipo_campo_dados_routes);
//# sourceMappingURL=tipo_campo_dados.routing.js.map