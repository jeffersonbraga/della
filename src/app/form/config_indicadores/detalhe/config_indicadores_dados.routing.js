"use strict";
var router_1 = require('@angular/router');
var config_indicadores_dados_component_1 = require('./config_indicadores_dados.component');
var config_indicadores_dadosDetails_component_1 = require('./config_indicadores_dadosDetails.component');
var config_indicadores_dadosEdit_component_1 = require('./config_indicadores_dadosEdit.component');
var config_indicadores_dados_routes = [{ path: '', component: config_indicadores_dados_component_1.Config_indicadoresDadosComponent, children: [{ path: 'details', component: config_indicadores_dadosDetails_component_1.Config_indicadoresDadosDetailsComponent }, { path: 'edit', component: config_indicadores_dadosEdit_component_1.Config_indicadoresDadosEditComponent }] }];
exports.config_indicadores_dados_routing = router_1.RouterModule.forChild(config_indicadores_dados_routes);
//# sourceMappingURL=config_indicadores_dados.routing.js.map