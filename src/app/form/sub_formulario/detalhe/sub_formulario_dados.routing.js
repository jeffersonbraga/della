"use strict";
var router_1 = require('@angular/router');
var sub_formulario_dados_component_1 = require('./sub_formulario_dados.component');
var sub_formulario_dadosDetails_component_1 = require('./sub_formulario_dadosDetails.component');
var sub_formulario_dadosEdit_component_1 = require('./sub_formulario_dadosEdit.component');
var sub_formulario_dados_routes = [{ path: '', component: sub_formulario_dados_component_1.Sub_formularioDadosComponent, children: [{ path: 'details', component: sub_formulario_dadosDetails_component_1.Sub_formularioDadosDetailsComponent }, { path: 'edit', component: sub_formulario_dadosEdit_component_1.Sub_formularioDadosEditComponent }] }];
exports.sub_formulario_dados_routing = router_1.RouterModule.forChild(sub_formulario_dados_routes);
//# sourceMappingURL=sub_formulario_dados.routing.js.map