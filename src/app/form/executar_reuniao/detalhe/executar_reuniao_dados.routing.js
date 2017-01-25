"use strict";
var router_1 = require('@angular/router');
var executar_reuniao_dados_component_1 = require('./executar_reuniao_dados.component');
var executar_reuniao_dadosDetails_component_1 = require('./executar_reuniao_dadosDetails.component');
var executar_reuniao_dadosEdit_component_1 = require('./executar_reuniao_dadosEdit.component');
var executar_reuniao_dados_routes = [{ path: '', component: executar_reuniao_dados_component_1.Executar_reuniaoDadosComponent, children: [{ path: 'details', component: executar_reuniao_dadosDetails_component_1.Executar_reuniaoDadosDetailsComponent }, { path: 'edit', component: executar_reuniao_dadosEdit_component_1.Executar_reuniaoDadosEditComponent }] }];
exports.executar_reuniao_dados_routing = router_1.RouterModule.forChild(executar_reuniao_dados_routes);
//# sourceMappingURL=executar_reuniao_dados.routing.js.map