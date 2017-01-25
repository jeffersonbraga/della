"use strict";
var router_1 = require('@angular/router');
var container_principal_dados_component_1 = require('./container_principal_dados.component');
var container_principal_dadosDetails_component_1 = require('./container_principal_dadosDetails.component');
var container_principal_dadosEdit_component_1 = require('./container_principal_dadosEdit.component');
var container_principal_dados_routes = [{ path: '', component: container_principal_dados_component_1.Container_principalDadosComponent, children: [{ path: 'details', component: container_principal_dadosDetails_component_1.Container_principalDadosDetailsComponent }, { path: 'edit', component: container_principal_dadosEdit_component_1.Container_principalDadosEditComponent }] }];
exports.container_principal_dados_routing = router_1.RouterModule.forChild(container_principal_dados_routes);
//# sourceMappingURL=container_principal_dados.routing.js.map