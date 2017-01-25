"use strict";
var router_1 = require('@angular/router');
var doc_revisao_formulario_dados_component_1 = require('./doc_revisao_formulario_dados.component');
var doc_revisao_formulario_dadosDetails_component_1 = require('./doc_revisao_formulario_dadosDetails.component');
var doc_revisao_formulario_dadosEdit_component_1 = require('./doc_revisao_formulario_dadosEdit.component');
var doc_revisao_formulario_dados_routes = [{ path: '', component: doc_revisao_formulario_dados_component_1.Doc_revisao_formularioDadosComponent, children: [{ path: 'details', component: doc_revisao_formulario_dadosDetails_component_1.Doc_revisao_formularioDadosDetailsComponent }, { path: 'edit', component: doc_revisao_formulario_dadosEdit_component_1.Doc_revisao_formularioDadosEditComponent }] }];
exports.doc_revisao_formulario_dados_routing = router_1.RouterModule.forChild(doc_revisao_formulario_dados_routes);
//# sourceMappingURL=doc_revisao_formulario_dados.routing.js.map