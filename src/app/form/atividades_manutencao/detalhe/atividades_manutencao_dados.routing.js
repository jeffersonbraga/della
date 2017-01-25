"use strict";
var router_1 = require('@angular/router');
var atividades_manutencao_dados_component_1 = require('./atividades_manutencao_dados.component');
var atividades_manutencao_dadosDetails_component_1 = require('./atividades_manutencao_dadosDetails.component');
var atividades_manutencao_dadosEdit_component_1 = require('./atividades_manutencao_dadosEdit.component');
var atividades_manutencao_dados_routes = [{ path: '', component: atividades_manutencao_dados_component_1.Atividades_manutencaoDadosComponent, children: [{ path: 'details', component: atividades_manutencao_dadosDetails_component_1.Atividades_manutencaoDadosDetailsComponent }, { path: 'edit', component: atividades_manutencao_dadosEdit_component_1.Atividades_manutencaoDadosEditComponent }] }];
exports.atividades_manutencao_dados_routing = router_1.RouterModule.forChild(atividades_manutencao_dados_routes);
//# sourceMappingURL=atividades_manutencao_dados.routing.js.map