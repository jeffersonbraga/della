"use strict";
var router_1 = require('@angular/router');
var proposta_candidato_dados_component_1 = require('./proposta_candidato_dados.component');
var proposta_candidato_dadosDetails_component_1 = require('./proposta_candidato_dadosDetails.component');
var proposta_candidato_dadosEdit_component_1 = require('./proposta_candidato_dadosEdit.component');
var proposta_candidato_dados_routes = [{ path: '', component: proposta_candidato_dados_component_1.Proposta_candidatoDadosComponent, children: [{ path: 'details', component: proposta_candidato_dadosDetails_component_1.Proposta_candidatoDadosDetailsComponent }, { path: 'edit', component: proposta_candidato_dadosEdit_component_1.Proposta_candidatoDadosEditComponent }] }];
exports.proposta_candidato_dados_routing = router_1.RouterModule.forChild(proposta_candidato_dados_routes);
//# sourceMappingURL=proposta_candidato_dados.routing.js.map