"use strict";
var router_1 = require('@angular/router');
var mapa_formulario_dados_component_1 = require('./mapa_formulario_dados.component');
var mapa_formulario_dadosDetails_component_1 = require('./mapa_formulario_dadosDetails.component');
var mapa_formulario_dadosEdit_component_1 = require('./mapa_formulario_dadosEdit.component');
var mapa_formulario_dados_routes = [{ path: '', component: mapa_formulario_dados_component_1.Mapa_formularioDadosComponent, children: [{ path: 'details', component: mapa_formulario_dadosDetails_component_1.Mapa_formularioDadosDetailsComponent }, { path: 'edit', component: mapa_formulario_dadosEdit_component_1.Mapa_formularioDadosEditComponent }] }];
exports.mapa_formulario_dados_routing = router_1.RouterModule.forChild(mapa_formulario_dados_routes);
//# sourceMappingURL=mapa_formulario_dados.routing.js.map