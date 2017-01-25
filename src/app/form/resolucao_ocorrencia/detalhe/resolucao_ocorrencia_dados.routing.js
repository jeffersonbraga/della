"use strict";
var router_1 = require('@angular/router');
var resolucao_ocorrencia_dados_component_1 = require('./resolucao_ocorrencia_dados.component');
var resolucao_ocorrencia_dadosDetails_component_1 = require('./resolucao_ocorrencia_dadosDetails.component');
var resolucao_ocorrencia_dadosEdit_component_1 = require('./resolucao_ocorrencia_dadosEdit.component');
var resolucao_ocorrencia_dados_routes = [{ path: '', component: resolucao_ocorrencia_dados_component_1.Resolucao_ocorrenciaDadosComponent, children: [{ path: 'details', component: resolucao_ocorrencia_dadosDetails_component_1.Resolucao_ocorrenciaDadosDetailsComponent }, { path: 'edit', component: resolucao_ocorrencia_dadosEdit_component_1.Resolucao_ocorrenciaDadosEditComponent }] }];
exports.resolucao_ocorrencia_dados_routing = router_1.RouterModule.forChild(resolucao_ocorrencia_dados_routes);
//# sourceMappingURL=resolucao_ocorrencia_dados.routing.js.map