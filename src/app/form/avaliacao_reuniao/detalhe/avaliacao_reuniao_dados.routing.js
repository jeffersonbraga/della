"use strict";
var router_1 = require('@angular/router');
var avaliacao_reuniao_dados_component_1 = require('./avaliacao_reuniao_dados.component');
var avaliacao_reuniao_dadosDetails_component_1 = require('./avaliacao_reuniao_dadosDetails.component');
var avaliacao_reuniao_dadosEdit_component_1 = require('./avaliacao_reuniao_dadosEdit.component');
var avaliacao_reuniao_dados_routes = [{ path: '', component: avaliacao_reuniao_dados_component_1.Avaliacao_reuniaoDadosComponent, children: [{ path: 'details', component: avaliacao_reuniao_dadosDetails_component_1.Avaliacao_reuniaoDadosDetailsComponent }, { path: 'edit', component: avaliacao_reuniao_dadosEdit_component_1.Avaliacao_reuniaoDadosEditComponent }] }];
exports.avaliacao_reuniao_dados_routing = router_1.RouterModule.forChild(avaliacao_reuniao_dados_routes);
//# sourceMappingURL=avaliacao_reuniao_dados.routing.js.map