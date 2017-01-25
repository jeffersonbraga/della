"use strict";
var router_1 = require('@angular/router');
var config_campo_formulario_dados_component_1 = require('./config_campo_formulario_dados.component');
var config_campo_formulario_dadosDetails_component_1 = require('./config_campo_formulario_dadosDetails.component');
var config_campo_formulario_dadosEdit_component_1 = require('./config_campo_formulario_dadosEdit.component');
var config_campo_formulario_dados_routes = [{ path: '', component: config_campo_formulario_dados_component_1.Config_campo_formularioDadosComponent, children: [{ path: 'details', component: config_campo_formulario_dadosDetails_component_1.Config_campo_formularioDadosDetailsComponent }, { path: 'edit', component: config_campo_formulario_dadosEdit_component_1.Config_campo_formularioDadosEditComponent }] }];
exports.config_campo_formulario_dados_routing = router_1.RouterModule.forChild(config_campo_formulario_dados_routes);
//# sourceMappingURL=config_campo_formulario_dados.routing.js.map