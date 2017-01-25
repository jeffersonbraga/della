"use strict";
var router_1 = require('@angular/router');
var proposta_candidato_component_1 = require('./proposta_candidato.component');
var proposta_candidato_routes = [{ path: 'proposta_candidato*', pathMatch: 'full', redirectTo: '/proposta_candidato' }, { path: 'proposta_candidato', component: proposta_candidato_component_1.Proposta_candidatoComponent }];
exports.proposta_candidato_routing = router_1.RouterModule.forChild(proposta_candidato_routes);
//# sourceMappingURL=proposta_candidato.routing.js.map