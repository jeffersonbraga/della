"use strict";
var router_1 = require('@angular/router');
var campo_formulario_dados_component_1 = require('./campo_formulario_dados.component');
var campo_formulario_dadosDetails_component_1 = require('./campo_formulario_dadosDetails.component');
var campo_formulario_dadosEdit_component_1 = require('./campo_formulario_dadosEdit.component');
var campo_formulario_dados_routes = [{ path: '', component: campo_formulario_dados_component_1.Campo_formularioDadosComponent, children: [{ path: 'details', component: campo_formulario_dadosDetails_component_1.Campo_formularioDadosDetailsComponent }, { path: 'edit', component: campo_formulario_dadosEdit_component_1.Campo_formularioDadosEditComponent }] }];
exports.campo_formulario_dados_routing = router_1.RouterModule.forChild(campo_formulario_dados_routes);
//# sourceMappingURL=campo_formulario_dados.routing.js.map