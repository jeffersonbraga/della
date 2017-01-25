"use strict";
var router_1 = require('@angular/router');
var pergunta_avaliacao_ideia_dados_component_1 = require('./pergunta_avaliacao_ideia_dados.component');
var pergunta_avaliacao_ideia_dadosDetails_component_1 = require('./pergunta_avaliacao_ideia_dadosDetails.component');
var pergunta_avaliacao_ideia_dadosEdit_component_1 = require('./pergunta_avaliacao_ideia_dadosEdit.component');
var pergunta_avaliacao_ideia_dados_routes = [{ path: '', component: pergunta_avaliacao_ideia_dados_component_1.Pergunta_avaliacao_ideiaDadosComponent, children: [{ path: 'details', component: pergunta_avaliacao_ideia_dadosDetails_component_1.Pergunta_avaliacao_ideiaDadosDetailsComponent }, { path: 'edit', component: pergunta_avaliacao_ideia_dadosEdit_component_1.Pergunta_avaliacao_ideiaDadosEditComponent }] }];
exports.pergunta_avaliacao_ideia_dados_routing = router_1.RouterModule.forChild(pergunta_avaliacao_ideia_dados_routes);
//# sourceMappingURL=pergunta_avaliacao_ideia_dados.routing.js.map