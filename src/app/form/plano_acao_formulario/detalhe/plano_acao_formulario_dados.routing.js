"use strict";
var router_1 = require('@angular/router');
var plano_acao_formulario_dados_component_1 = require('./plano_acao_formulario_dados.component');
var plano_acao_formulario_dadosDetails_component_1 = require('./plano_acao_formulario_dadosDetails.component');
var plano_acao_formulario_dadosEdit_component_1 = require('./plano_acao_formulario_dadosEdit.component');
var plano_acao_formulario_dados_routes = [{ path: '', component: plano_acao_formulario_dados_component_1.Plano_acao_formularioDadosComponent, children: [{ path: 'details', component: plano_acao_formulario_dadosDetails_component_1.Plano_acao_formularioDadosDetailsComponent }, { path: 'edit', component: plano_acao_formulario_dadosEdit_component_1.Plano_acao_formularioDadosEditComponent }] }];
exports.plano_acao_formulario_dados_routing = router_1.RouterModule.forChild(plano_acao_formulario_dados_routes);
//# sourceMappingURL=plano_acao_formulario_dados.routing.js.map