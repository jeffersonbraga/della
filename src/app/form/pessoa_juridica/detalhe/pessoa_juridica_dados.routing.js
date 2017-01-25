"use strict";
var router_1 = require('@angular/router');
var pessoa_juridica_dados_component_1 = require('./pessoa_juridica_dados.component');
var pessoa_juridica_dadosDetails_component_1 = require('./pessoa_juridica_dadosDetails.component');
var pessoa_juridica_dadosEdit_component_1 = require('./pessoa_juridica_dadosEdit.component');
var pessoa_juridica_dados_routes = [{ path: '', component: pessoa_juridica_dados_component_1.Pessoa_juridicaDadosComponent, children: [{ path: 'details', component: pessoa_juridica_dadosDetails_component_1.Pessoa_juridicaDadosDetailsComponent }, { path: 'edit', component: pessoa_juridica_dadosEdit_component_1.Pessoa_juridicaDadosEditComponent }] }];
exports.pessoa_juridica_dados_routing = router_1.RouterModule.forChild(pessoa_juridica_dados_routes);
//# sourceMappingURL=pessoa_juridica_dados.routing.js.map