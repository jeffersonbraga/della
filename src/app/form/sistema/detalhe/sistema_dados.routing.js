"use strict";
var router_1 = require('@angular/router');
var sistema_dados_component_1 = require('./sistema_dados.component');
var sistema_dadosDetails_component_1 = require('./sistema_dadosDetails.component');
var sistema_dadosEdit_component_1 = require('./sistema_dadosEdit.component');
var sistema_dados_routes = [{ path: '', component: sistema_dados_component_1.SistemaDadosComponent, children: [{ path: 'details', component: sistema_dadosDetails_component_1.SistemaDadosDetailsComponent }, { path: 'edit', component: sistema_dadosEdit_component_1.SistemaDadosEditComponent }] }];
exports.sistema_dados_routing = router_1.RouterModule.forChild(sistema_dados_routes);
//# sourceMappingURL=sistema_dados.routing.js.map