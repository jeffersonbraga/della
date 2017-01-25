"use strict";
var router_1 = require('@angular/router');
var config_campo_formulario_component_1 = require('./config_campo_formulario.component');
var config_campo_formulario_routes = [{ path: 'config_campo_formulario*', pathMatch: 'full', redirectTo: '/config_campo_formulario' }, { path: 'config_campo_formulario', component: config_campo_formulario_component_1.Config_campo_formularioComponent }];
exports.config_campo_formulario_routing = router_1.RouterModule.forChild(config_campo_formulario_routes);
//# sourceMappingURL=config_campo_formulario.routing.js.map