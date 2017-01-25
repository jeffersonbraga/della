"use strict";
var router_1 = require('@angular/router');
var ocorrencia_periodicidade_dados_component_1 = require('./ocorrencia_periodicidade_dados.component');
var ocorrencia_periodicidade_dadosDetails_component_1 = require('./ocorrencia_periodicidade_dadosDetails.component');
var ocorrencia_periodicidade_dadosEdit_component_1 = require('./ocorrencia_periodicidade_dadosEdit.component');
var ocorrencia_periodicidade_dados_routes = [{ path: '', component: ocorrencia_periodicidade_dados_component_1.Ocorrencia_periodicidadeDadosComponent, children: [{ path: 'details', component: ocorrencia_periodicidade_dadosDetails_component_1.Ocorrencia_periodicidadeDadosDetailsComponent }, { path: 'edit', component: ocorrencia_periodicidade_dadosEdit_component_1.Ocorrencia_periodicidadeDadosEditComponent }] }];
exports.ocorrencia_periodicidade_dados_routing = router_1.RouterModule.forChild(ocorrencia_periodicidade_dados_routes);
//# sourceMappingURL=ocorrencia_periodicidade_dados.routing.js.map