"use strict";
var router_1 = require('@angular/router');
var cliente_dados_component_1 = require('./cliente_dados.component');
var cliente_dadosDetails_component_1 = require('./cliente_dadosDetails.component');
var cliente_dadosEdit_component_1 = require('./cliente_dadosEdit.component');
var cliente_dados_routes = [{ path: '', component: cliente_dados_component_1.ClienteDadosComponent, children: [{ path: 'details', component: cliente_dadosDetails_component_1.ClienteDadosDetailsComponent }, { path: 'edit', component: cliente_dadosEdit_component_1.ClienteDadosEditComponent }] }];
exports.cliente_dados_routing = router_1.RouterModule.forChild(cliente_dados_routes);
//# sourceMappingURL=cliente_dados.routing.js.map