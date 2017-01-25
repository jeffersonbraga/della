"use strict";
var router_1 = require('@angular/router');
var cronograma_manutencao_dados_component_1 = require('./cronograma_manutencao_dados.component');
var cronograma_manutencao_dadosDetails_component_1 = require('./cronograma_manutencao_dadosDetails.component');
var cronograma_manutencao_dadosEdit_component_1 = require('./cronograma_manutencao_dadosEdit.component');
var cronograma_manutencao_dados_routes = [{ path: '', component: cronograma_manutencao_dados_component_1.Cronograma_manutencaoDadosComponent, children: [{ path: 'details', component: cronograma_manutencao_dadosDetails_component_1.Cronograma_manutencaoDadosDetailsComponent }, { path: 'edit', component: cronograma_manutencao_dadosEdit_component_1.Cronograma_manutencaoDadosEditComponent }] }];
exports.cronograma_manutencao_dados_routing = router_1.RouterModule.forChild(cronograma_manutencao_dados_routes);
//# sourceMappingURL=cronograma_manutencao_dados.routing.js.map