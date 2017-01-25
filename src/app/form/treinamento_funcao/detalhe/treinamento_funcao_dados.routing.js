"use strict";
var router_1 = require('@angular/router');
var treinamento_funcao_dados_component_1 = require('./treinamento_funcao_dados.component');
var treinamento_funcao_dadosDetails_component_1 = require('./treinamento_funcao_dadosDetails.component');
var treinamento_funcao_dadosEdit_component_1 = require('./treinamento_funcao_dadosEdit.component');
var treinamento_funcao_dados_routes = [{ path: '', component: treinamento_funcao_dados_component_1.Treinamento_funcaoDadosComponent, children: [{ path: 'details', component: treinamento_funcao_dadosDetails_component_1.Treinamento_funcaoDadosDetailsComponent }, { path: 'edit', component: treinamento_funcao_dadosEdit_component_1.Treinamento_funcaoDadosEditComponent }] }];
exports.treinamento_funcao_dados_routing = router_1.RouterModule.forChild(treinamento_funcao_dados_routes);
//# sourceMappingURL=treinamento_funcao_dados.routing.js.map