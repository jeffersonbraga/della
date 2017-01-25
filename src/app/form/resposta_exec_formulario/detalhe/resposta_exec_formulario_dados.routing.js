"use strict";
var router_1 = require('@angular/router');
var resposta_exec_formulario_dados_component_1 = require('./resposta_exec_formulario_dados.component');
var resposta_exec_formulario_dadosDetails_component_1 = require('./resposta_exec_formulario_dadosDetails.component');
var resposta_exec_formulario_dadosEdit_component_1 = require('./resposta_exec_formulario_dadosEdit.component');
var resposta_exec_formulario_dados_routes = [{ path: '', component: resposta_exec_formulario_dados_component_1.Resposta_exec_formularioDadosComponent, children: [{ path: 'details', component: resposta_exec_formulario_dadosDetails_component_1.Resposta_exec_formularioDadosDetailsComponent }, { path: 'edit', component: resposta_exec_formulario_dadosEdit_component_1.Resposta_exec_formularioDadosEditComponent }] }];
exports.resposta_exec_formulario_dados_routing = router_1.RouterModule.forChild(resposta_exec_formulario_dados_routes);
//# sourceMappingURL=resposta_exec_formulario_dados.routing.js.map