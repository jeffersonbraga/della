"use strict";
var router_1 = require('@angular/router');
var configuracao_ouvidoria_component_1 = require('./configuracao_ouvidoria.component');
var configuracao_ouvidoria_routes = [{ path: 'configuracao_ouvidoria*', pathMatch: 'full', redirectTo: '/configuracao_ouvidoria' }, { path: 'configuracao_ouvidoria', component: configuracao_ouvidoria_component_1.Configuracao_ouvidoriaComponent }];
exports.configuracao_ouvidoria_routing = router_1.RouterModule.forChild(configuracao_ouvidoria_routes);
//# sourceMappingURL=configuracao_ouvidoria.routing.js.map