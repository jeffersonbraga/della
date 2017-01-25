"use strict";
var router_1 = require('@angular/router');
var config_sistema_dados_component_1 = require('./config_sistema_dados.component');
var config_sistema_dadosDetails_component_1 = require('./config_sistema_dadosDetails.component');
var config_sistema_dadosEdit_component_1 = require('./config_sistema_dadosEdit.component');
var config_sistema_dados_routes = [{ path: '', component: config_sistema_dados_component_1.Config_sistemaDadosComponent, children: [{ path: 'details', component: config_sistema_dadosDetails_component_1.Config_sistemaDadosDetailsComponent }, { path: 'edit', component: config_sistema_dadosEdit_component_1.Config_sistemaDadosEditComponent }] }];
exports.config_sistema_dados_routing = router_1.RouterModule.forChild(config_sistema_dados_routes);
//# sourceMappingURL=config_sistema_dados.routing.js.map