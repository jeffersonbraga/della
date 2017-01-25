"use strict";
var router_1 = require('@angular/router');
var formulario_dados_component_1 = require('./formulario_dados.component');
var formulario_dadosDetails_component_1 = require('./formulario_dadosDetails.component');
var formulario_dadosEdit_component_1 = require('./formulario_dadosEdit.component');
var formulario_dados_routes = [{ path: '', component: formulario_dados_component_1.FormularioDadosComponent, children: [{ path: 'details', component: formulario_dadosDetails_component_1.FormularioDadosDetailsComponent }, { path: 'edit', component: formulario_dadosEdit_component_1.FormularioDadosEditComponent }] }];
exports.formulario_dados_routing = router_1.RouterModule.forChild(formulario_dados_routes);
//# sourceMappingURL=formulario_dados.routing.js.map