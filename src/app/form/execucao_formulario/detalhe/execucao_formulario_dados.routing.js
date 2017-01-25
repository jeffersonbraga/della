"use strict";
var router_1 = require('@angular/router');
var execucao_formulario_dados_component_1 = require('./execucao_formulario_dados.component');
var execucao_formulario_dadosDetails_component_1 = require('./execucao_formulario_dadosDetails.component');
var execucao_formulario_dadosEdit_component_1 = require('./execucao_formulario_dadosEdit.component');
var execucao_formulario_dados_routes = [{ path: '', component: execucao_formulario_dados_component_1.Execucao_formularioDadosComponent, children: [{ path: 'details', component: execucao_formulario_dadosDetails_component_1.Execucao_formularioDadosDetailsComponent }, { path: 'edit', component: execucao_formulario_dadosEdit_component_1.Execucao_formularioDadosEditComponent }] }];
exports.execucao_formulario_dados_routing = router_1.RouterModule.forChild(execucao_formulario_dados_routes);
//# sourceMappingURL=execucao_formulario_dados.routing.js.map