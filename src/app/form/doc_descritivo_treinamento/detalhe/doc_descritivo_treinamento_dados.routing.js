"use strict";
var router_1 = require('@angular/router');
var doc_descritivo_treinamento_dados_component_1 = require('./doc_descritivo_treinamento_dados.component');
var doc_descritivo_treinamento_dadosDetails_component_1 = require('./doc_descritivo_treinamento_dadosDetails.component');
var doc_descritivo_treinamento_dadosEdit_component_1 = require('./doc_descritivo_treinamento_dadosEdit.component');
var doc_descritivo_treinamento_dados_routes = [{ path: '', component: doc_descritivo_treinamento_dados_component_1.Doc_descritivo_treinamentoDadosComponent, children: [{ path: 'details', component: doc_descritivo_treinamento_dadosDetails_component_1.Doc_descritivo_treinamentoDadosDetailsComponent }, { path: 'edit', component: doc_descritivo_treinamento_dadosEdit_component_1.Doc_descritivo_treinamentoDadosEditComponent }] }];
exports.doc_descritivo_treinamento_dados_routing = router_1.RouterModule.forChild(doc_descritivo_treinamento_dados_routes);
//# sourceMappingURL=doc_descritivo_treinamento_dados.routing.js.map