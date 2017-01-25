"use strict";
var router_1 = require('@angular/router');
var acao_plano_acao_hp_dados_component_1 = require('./acao_plano_acao_hp_dados.component');
var acao_plano_acao_hp_dadosDetails_component_1 = require('./acao_plano_acao_hp_dadosDetails.component');
var acao_plano_acao_hp_dadosEdit_component_1 = require('./acao_plano_acao_hp_dadosEdit.component');
var acao_plano_acao_hp_dados_routes = [{ path: '', component: acao_plano_acao_hp_dados_component_1.Acao_plano_acao_hpDadosComponent, children: [{ path: 'details', component: acao_plano_acao_hp_dadosDetails_component_1.Acao_plano_acao_hpDadosDetailsComponent }, { path: 'edit', component: acao_plano_acao_hp_dadosEdit_component_1.Acao_plano_acao_hpDadosEditComponent }] }];
exports.acao_plano_acao_hp_dados_routing = router_1.RouterModule.forChild(acao_plano_acao_hp_dados_routes);
//# sourceMappingURL=acao_plano_acao_hp_dados.routing.js.map