"use strict";
var router_1 = require('@angular/router');
var plano_acao_ocorrencia_dados_component_1 = require('./plano_acao_ocorrencia_dados.component');
var plano_acao_ocorrencia_dadosDetails_component_1 = require('./plano_acao_ocorrencia_dadosDetails.component');
var plano_acao_ocorrencia_dadosEdit_component_1 = require('./plano_acao_ocorrencia_dadosEdit.component');
var plano_acao_ocorrencia_dados_routes = [{ path: '', component: plano_acao_ocorrencia_dados_component_1.Plano_acao_ocorrenciaDadosComponent, children: [{ path: 'details', component: plano_acao_ocorrencia_dadosDetails_component_1.Plano_acao_ocorrenciaDadosDetailsComponent }, { path: 'edit', component: plano_acao_ocorrencia_dadosEdit_component_1.Plano_acao_ocorrenciaDadosEditComponent }] }];
exports.plano_acao_ocorrencia_dados_routing = router_1.RouterModule.forChild(plano_acao_ocorrencia_dados_routes);
//# sourceMappingURL=plano_acao_ocorrencia_dados.routing.js.map