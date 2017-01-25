"use strict";
var router_1 = require('@angular/router');
var atividades_cronograma_manutencao_dados_component_1 = require('./atividades_cronograma_manutencao_dados.component');
var atividades_cronograma_manutencao_dadosDetails_component_1 = require('./atividades_cronograma_manutencao_dadosDetails.component');
var atividades_cronograma_manutencao_dadosEdit_component_1 = require('./atividades_cronograma_manutencao_dadosEdit.component');
var atividades_cronograma_manutencao_dados_routes = [{ path: '', component: atividades_cronograma_manutencao_dados_component_1.Atividades_cronograma_manutencaoDadosComponent, children: [{ path: 'details', component: atividades_cronograma_manutencao_dadosDetails_component_1.Atividades_cronograma_manutencaoDadosDetailsComponent }, { path: 'edit', component: atividades_cronograma_manutencao_dadosEdit_component_1.Atividades_cronograma_manutencaoDadosEditComponent }] }];
exports.atividades_cronograma_manutencao_dados_routing = router_1.RouterModule.forChild(atividades_cronograma_manutencao_dados_routes);
//# sourceMappingURL=atividades_cronograma_manutencao_dados.routing.js.map