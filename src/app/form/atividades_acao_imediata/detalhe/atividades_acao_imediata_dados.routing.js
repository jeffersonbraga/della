"use strict";
var router_1 = require('@angular/router');
var atividades_acao_imediata_dados_component_1 = require('./atividades_acao_imediata_dados.component');
var atividades_acao_imediata_dadosDetails_component_1 = require('./atividades_acao_imediata_dadosDetails.component');
var atividades_acao_imediata_dadosEdit_component_1 = require('./atividades_acao_imediata_dadosEdit.component');
var atividades_acao_imediata_dados_routes = [{ path: '', component: atividades_acao_imediata_dados_component_1.Atividades_acao_imediataDadosComponent, children: [{ path: 'details', component: atividades_acao_imediata_dadosDetails_component_1.Atividades_acao_imediataDadosDetailsComponent }, { path: 'edit', component: atividades_acao_imediata_dadosEdit_component_1.Atividades_acao_imediataDadosEditComponent }] }];
exports.atividades_acao_imediata_dados_routing = router_1.RouterModule.forChild(atividades_acao_imediata_dados_routes);
//# sourceMappingURL=atividades_acao_imediata_dados.routing.js.map