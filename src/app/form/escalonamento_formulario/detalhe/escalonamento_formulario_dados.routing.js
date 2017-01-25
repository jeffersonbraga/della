"use strict";
var router_1 = require('@angular/router');
var escalonamento_formulario_dados_component_1 = require('./escalonamento_formulario_dados.component');
var escalonamento_formulario_dadosDetails_component_1 = require('./escalonamento_formulario_dadosDetails.component');
var escalonamento_formulario_dadosEdit_component_1 = require('./escalonamento_formulario_dadosEdit.component');
var escalonamento_formulario_dados_routes = [{ path: '', component: escalonamento_formulario_dados_component_1.Escalonamento_formularioDadosComponent, children: [{ path: 'details', component: escalonamento_formulario_dadosDetails_component_1.Escalonamento_formularioDadosDetailsComponent }, { path: 'edit', component: escalonamento_formulario_dadosEdit_component_1.Escalonamento_formularioDadosEditComponent }] }];
exports.escalonamento_formulario_dados_routing = router_1.RouterModule.forChild(escalonamento_formulario_dados_routes);
//# sourceMappingURL=escalonamento_formulario_dados.routing.js.map