"use strict";
var router_1 = require('@angular/router');
var empresa_dados_component_1 = require('./empresa_dados.component');
var empresa_dadosDetails_component_1 = require('./empresa_dadosDetails.component');
var empresa_dadosEdit_component_1 = require('./empresa_dadosEdit.component');
var empresa_dados_routes = [{ path: '', component: empresa_dados_component_1.EmpresaDadosComponent, children: [{ path: 'details', component: empresa_dadosDetails_component_1.EmpresaDadosDetailsComponent }, { path: 'edit', component: empresa_dadosEdit_component_1.EmpresaDadosEditComponent }] }];
exports.empresa_dados_routing = router_1.RouterModule.forChild(empresa_dados_routes);
//# sourceMappingURL=empresa_dados.routing.js.map