"use strict";
var router_1 = require('@angular/router');
var evento_campanha_dados_component_1 = require('./evento_campanha_dados.component');
var evento_campanha_dadosDetails_component_1 = require('./evento_campanha_dadosDetails.component');
var evento_campanha_dadosEdit_component_1 = require('./evento_campanha_dadosEdit.component');
var evento_campanha_dados_routes = [{ path: '', component: evento_campanha_dados_component_1.Evento_campanhaDadosComponent, children: [{ path: 'details', component: evento_campanha_dadosDetails_component_1.Evento_campanhaDadosDetailsComponent }, { path: 'edit', component: evento_campanha_dadosEdit_component_1.Evento_campanhaDadosEditComponent }] }];
exports.evento_campanha_dados_routing = router_1.RouterModule.forChild(evento_campanha_dados_routes);
//# sourceMappingURL=evento_campanha_dados.routing.js.map