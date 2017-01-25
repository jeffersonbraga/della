"use strict";
var router_1 = require('@angular/router');
var participantes_reuniao_dados_component_1 = require('./participantes_reuniao_dados.component');
var participantes_reuniao_dadosDetails_component_1 = require('./participantes_reuniao_dadosDetails.component');
var participantes_reuniao_dadosEdit_component_1 = require('./participantes_reuniao_dadosEdit.component');
var participantes_reuniao_dados_routes = [{ path: '', component: participantes_reuniao_dados_component_1.Participantes_reuniaoDadosComponent, children: [{ path: 'details', component: participantes_reuniao_dadosDetails_component_1.Participantes_reuniaoDadosDetailsComponent }, { path: 'edit', component: participantes_reuniao_dadosEdit_component_1.Participantes_reuniaoDadosEditComponent }] }];
exports.participantes_reuniao_dados_routing = router_1.RouterModule.forChild(participantes_reuniao_dados_routes);
//# sourceMappingURL=participantes_reuniao_dados.routing.js.map