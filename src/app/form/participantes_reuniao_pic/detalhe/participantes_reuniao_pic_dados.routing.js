"use strict";
var router_1 = require('@angular/router');
var participantes_reuniao_pic_dados_component_1 = require('./participantes_reuniao_pic_dados.component');
var participantes_reuniao_pic_dadosDetails_component_1 = require('./participantes_reuniao_pic_dadosDetails.component');
var participantes_reuniao_pic_dadosEdit_component_1 = require('./participantes_reuniao_pic_dadosEdit.component');
var participantes_reuniao_pic_dados_routes = [{ path: '', component: participantes_reuniao_pic_dados_component_1.Participantes_reuniao_picDadosComponent, children: [{ path: 'details', component: participantes_reuniao_pic_dadosDetails_component_1.Participantes_reuniao_picDadosDetailsComponent }, { path: 'edit', component: participantes_reuniao_pic_dadosEdit_component_1.Participantes_reuniao_picDadosEditComponent }] }];
exports.participantes_reuniao_pic_dados_routing = router_1.RouterModule.forChild(participantes_reuniao_pic_dados_routes);
//# sourceMappingURL=participantes_reuniao_pic_dados.routing.js.map