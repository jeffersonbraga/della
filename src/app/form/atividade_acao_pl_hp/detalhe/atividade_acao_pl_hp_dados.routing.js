"use strict";
var router_1 = require('@angular/router');
var atividade_acao_pl_hp_dados_component_1 = require('./atividade_acao_pl_hp_dados.component');
var atividade_acao_pl_hp_dadosDetails_component_1 = require('./atividade_acao_pl_hp_dadosDetails.component');
var atividade_acao_pl_hp_dadosEdit_component_1 = require('./atividade_acao_pl_hp_dadosEdit.component');
var atividade_acao_pl_hp_dados_routes = [{ path: '', component: atividade_acao_pl_hp_dados_component_1.Atividade_acao_pl_hpDadosComponent, children: [{ path: 'details', component: atividade_acao_pl_hp_dadosDetails_component_1.Atividade_acao_pl_hpDadosDetailsComponent }, { path: 'edit', component: atividade_acao_pl_hp_dadosEdit_component_1.Atividade_acao_pl_hpDadosEditComponent }] }];
exports.atividade_acao_pl_hp_dados_routing = router_1.RouterModule.forChild(atividade_acao_pl_hp_dados_routes);
//# sourceMappingURL=atividade_acao_pl_hp_dados.routing.js.map