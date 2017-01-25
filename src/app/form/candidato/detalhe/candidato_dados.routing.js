"use strict";
var router_1 = require('@angular/router');
var candidato_dados_component_1 = require('./candidato_dados.component');
var candidato_dadosDetails_component_1 = require('./candidato_dadosDetails.component');
var candidato_dadosEdit_component_1 = require('./candidato_dadosEdit.component');
var candidato_dados_routes = [{ path: '', component: candidato_dados_component_1.CandidatoDadosComponent, children: [{ path: 'details', component: candidato_dadosDetails_component_1.CandidatoDadosDetailsComponent }, { path: 'edit', component: candidato_dadosEdit_component_1.CandidatoDadosEditComponent }] }];
exports.candidato_dados_routing = router_1.RouterModule.forChild(candidato_dados_routes);
//# sourceMappingURL=candidato_dados.routing.js.map