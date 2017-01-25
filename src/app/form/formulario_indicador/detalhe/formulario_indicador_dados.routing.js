"use strict";
var router_1 = require('@angular/router');
var formulario_indicador_dados_component_1 = require('./formulario_indicador_dados.component');
var formulario_indicador_dadosDetails_component_1 = require('./formulario_indicador_dadosDetails.component');
var formulario_indicador_dadosEdit_component_1 = require('./formulario_indicador_dadosEdit.component');
var formulario_indicador_dados_routes = [{ path: '', component: formulario_indicador_dados_component_1.Formulario_indicadorDadosComponent, children: [{ path: 'details', component: formulario_indicador_dadosDetails_component_1.Formulario_indicadorDadosDetailsComponent }, { path: 'edit', component: formulario_indicador_dadosEdit_component_1.Formulario_indicadorDadosEditComponent }] }];
exports.formulario_indicador_dados_routing = router_1.RouterModule.forChild(formulario_indicador_dados_routes);
//# sourceMappingURL=formulario_indicador_dados.routing.js.map