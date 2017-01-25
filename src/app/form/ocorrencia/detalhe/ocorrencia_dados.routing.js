"use strict";
var router_1 = require('@angular/router');
var ocorrencia_dados_component_1 = require('./ocorrencia_dados.component');
var ocorrencia_dadosDetails_component_1 = require('./ocorrencia_dadosDetails.component');
var ocorrencia_dadosEdit_component_1 = require('./ocorrencia_dadosEdit.component');
var ocorrencia_dados_routes = [{ path: '', component: ocorrencia_dados_component_1.OcorrenciaDadosComponent, children: [{ path: 'details', component: ocorrencia_dadosDetails_component_1.OcorrenciaDadosDetailsComponent }, { path: 'edit', component: ocorrencia_dadosEdit_component_1.OcorrenciaDadosEditComponent }] }];
exports.ocorrencia_dados_routing = router_1.RouterModule.forChild(ocorrencia_dados_routes);
//# sourceMappingURL=ocorrencia_dados.routing.js.map