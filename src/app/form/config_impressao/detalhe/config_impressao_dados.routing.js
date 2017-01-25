"use strict";
var router_1 = require('@angular/router');
var config_impressao_dados_component_1 = require('./config_impressao_dados.component');
var config_impressao_dadosDetails_component_1 = require('./config_impressao_dadosDetails.component');
var config_impressao_dadosEdit_component_1 = require('./config_impressao_dadosEdit.component');
var config_impressao_dados_routes = [{ path: '', component: config_impressao_dados_component_1.Config_impressaoDadosComponent, children: [{ path: 'details', component: config_impressao_dadosDetails_component_1.Config_impressaoDadosDetailsComponent }, { path: 'edit', component: config_impressao_dadosEdit_component_1.Config_impressaoDadosEditComponent }] }];
exports.config_impressao_dados_routing = router_1.RouterModule.forChild(config_impressao_dados_routes);
//# sourceMappingURL=config_impressao_dados.routing.js.map