"use strict";
var router_1 = require('@angular/router');
var atividade_plano_acao_dados_component_1 = require('./atividade_plano_acao_dados.component');
var atividade_plano_acao_dadosDetails_component_1 = require('./atividade_plano_acao_dadosDetails.component');
var atividade_plano_acao_dadosEdit_component_1 = require('./atividade_plano_acao_dadosEdit.component');
var atividade_plano_acao_dados_routes = [{ path: '', component: atividade_plano_acao_dados_component_1.Atividade_plano_acaoDadosComponent, children: [{ path: 'details', component: atividade_plano_acao_dadosDetails_component_1.Atividade_plano_acaoDadosDetailsComponent }, { path: 'edit', component: atividade_plano_acao_dadosEdit_component_1.Atividade_plano_acaoDadosEditComponent }] }];
exports.atividade_plano_acao_dados_routing = router_1.RouterModule.forChild(atividade_plano_acao_dados_routes);
//# sourceMappingURL=atividade_plano_acao_dados.routing.js.map