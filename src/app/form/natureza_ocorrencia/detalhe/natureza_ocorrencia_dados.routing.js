"use strict";
var router_1 = require('@angular/router');
var natureza_ocorrencia_dados_component_1 = require('./natureza_ocorrencia_dados.component');
var natureza_ocorrencia_dadosDetails_component_1 = require('./natureza_ocorrencia_dadosDetails.component');
var natureza_ocorrencia_dadosEdit_component_1 = require('./natureza_ocorrencia_dadosEdit.component');
var natureza_ocorrencia_dados_routes = [{ path: '', component: natureza_ocorrencia_dados_component_1.Natureza_ocorrenciaDadosComponent, children: [{ path: 'details', component: natureza_ocorrencia_dadosDetails_component_1.Natureza_ocorrenciaDadosDetailsComponent }, { path: 'edit', component: natureza_ocorrencia_dadosEdit_component_1.Natureza_ocorrenciaDadosEditComponent }] }];
exports.natureza_ocorrencia_dados_routing = router_1.RouterModule.forChild(natureza_ocorrencia_dados_routes);
//# sourceMappingURL=natureza_ocorrencia_dados.routing.js.map