"use strict";
var router_1 = require('@angular/router');
var plano_acao_dados_component_1 = require('./plano_acao_dados.component');
var plano_acao_dadosDetails_component_1 = require('./plano_acao_dadosDetails.component');
var plano_acao_dadosEdit_component_1 = require('./plano_acao_dadosEdit.component');
var plano_acao_dados_routes = [{ path: '', component: plano_acao_dados_component_1.Plano_acaoDadosComponent, children: [{ path: 'details', component: plano_acao_dadosDetails_component_1.Plano_acaoDadosDetailsComponent }, { path: 'edit', component: plano_acao_dadosEdit_component_1.Plano_acaoDadosEditComponent }] }];
exports.plano_acao_dados_routing = router_1.RouterModule.forChild(plano_acao_dados_routes);
//# sourceMappingURL=plano_acao_dados.routing.js.map