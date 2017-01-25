"use strict";
var router_1 = require('@angular/router');
var periodicidade_dados_component_1 = require('./periodicidade_dados.component');
var periodicidade_dadosDetails_component_1 = require('./periodicidade_dadosDetails.component');
var periodicidade_dadosEdit_component_1 = require('./periodicidade_dadosEdit.component');
var periodicidade_dados_routes = [{ path: '', component: periodicidade_dados_component_1.PeriodicidadeDadosComponent, children: [{ path: 'details', component: periodicidade_dadosDetails_component_1.PeriodicidadeDadosDetailsComponent }, { path: 'edit', component: periodicidade_dadosEdit_component_1.PeriodicidadeDadosEditComponent }] }];
exports.periodicidade_dados_routing = router_1.RouterModule.forChild(periodicidade_dados_routes);
//# sourceMappingURL=periodicidade_dados.routing.js.map