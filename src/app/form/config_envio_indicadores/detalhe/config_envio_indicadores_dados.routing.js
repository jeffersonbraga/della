"use strict";
var router_1 = require('@angular/router');
var config_envio_indicadores_dados_component_1 = require('./config_envio_indicadores_dados.component');
var config_envio_indicadores_dadosDetails_component_1 = require('./config_envio_indicadores_dadosDetails.component');
var config_envio_indicadores_dadosEdit_component_1 = require('./config_envio_indicadores_dadosEdit.component');
var config_envio_indicadores_dados_routes = [{ path: '', component: config_envio_indicadores_dados_component_1.Config_envio_indicadoresDadosComponent, children: [{ path: 'details', component: config_envio_indicadores_dadosDetails_component_1.Config_envio_indicadoresDadosDetailsComponent }, { path: 'edit', component: config_envio_indicadores_dadosEdit_component_1.Config_envio_indicadoresDadosEditComponent }] }];
exports.config_envio_indicadores_dados_routing = router_1.RouterModule.forChild(config_envio_indicadores_dados_routes);
//# sourceMappingURL=config_envio_indicadores_dados.routing.js.map