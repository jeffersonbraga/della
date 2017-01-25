"use strict";
var router_1 = require('@angular/router');
var resposta_campo_formulario_dados_component_1 = require('./resposta_campo_formulario_dados.component');
var resposta_campo_formulario_dadosDetails_component_1 = require('./resposta_campo_formulario_dadosDetails.component');
var resposta_campo_formulario_dadosEdit_component_1 = require('./resposta_campo_formulario_dadosEdit.component');
var resposta_campo_formulario_dados_routes = [{ path: '', component: resposta_campo_formulario_dados_component_1.Resposta_campo_formularioDadosComponent, children: [{ path: 'details', component: resposta_campo_formulario_dadosDetails_component_1.Resposta_campo_formularioDadosDetailsComponent }, { path: 'edit', component: resposta_campo_formulario_dadosEdit_component_1.Resposta_campo_formularioDadosEditComponent }] }];
exports.resposta_campo_formulario_dados_routing = router_1.RouterModule.forChild(resposta_campo_formulario_dados_routes);
//# sourceMappingURL=resposta_campo_formulario_dados.routing.js.map