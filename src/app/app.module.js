"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var customers_module_1 = require('./customers/customers.module');
var login_module_1 = require('./login/login.module');
var home_module_1 = require('./home/home.module');
var forms_1 = require('@angular/forms');
//import { PolymerElement } from '@vaadin/angular2-polymer';
/**
 *
 * IMPORTAR OS MÓDULOS CRIADOS E QUE SERÃO UTILIZADOS PELO AppComponent: Singleton, routing.
 */
var acao_corretiva_module_1 = require('./form/acao_corretiva/pesquisa/acao_corretiva.module');
var acao_corretiva_formulario_module_1 = require('./form/acao_corretiva_formulario/pesquisa/acao_corretiva_formulario.module');
var acao_corretiva_helpdesk_module_1 = require('./form/acao_corretiva_helpdesk/pesquisa/acao_corretiva_helpdesk.module');
var acao_corretiva_pa_module_1 = require('./form/acao_corretiva_pa/pesquisa/acao_corretiva_pa.module');
var acao_plano_acao_hp_module_1 = require('./form/acao_plano_acao_hp/pesquisa/acao_plano_acao_hp.module');
var acao_preventiva_module_1 = require('./form/acao_preventiva/pesquisa/acao_preventiva.module');
var acao_preventiva_formulario_module_1 = require('./form/acao_preventiva_formulario/pesquisa/acao_preventiva_formulario.module');
var acao_preventiva_pa_module_1 = require('./form/acao_preventiva_pa/pesquisa/acao_preventiva_pa.module');
var anexo_module_1 = require('./form/anexo/pesquisa/anexo.module');
var atividade_acao_pl_hp_module_1 = require('./form/atividade_acao_pl_hp/pesquisa/atividade_acao_pl_hp.module');
var atividade_plano_acao_module_1 = require('./form/atividade_plano_acao/pesquisa/atividade_plano_acao.module');
var atividades_module_1 = require('./form/atividades/pesquisa/atividades.module');
var atividades_acao_imediata_module_1 = require('./form/atividades_acao_imediata/pesquisa/atividades_acao_imediata.module');
var atividades_cronograma_manutencao_module_1 = require('./form/atividades_cronograma_manutencao/pesquisa/atividades_cronograma_manutencao.module');
var atividades_manutencao_module_1 = require('./form/atividades_manutencao/pesquisa/atividades_manutencao.module');
var atv_exec_manutencao_module_1 = require('./form/atv_exec_manutencao/pesquisa/atv_exec_manutencao.module');
var auditoria_module_1 = require('./form/auditoria/pesquisa/auditoria.module');
var avaliacao_ideia_module_1 = require('./form/avaliacao_ideia/pesquisa/avaliacao_ideia.module');
var avaliacao_reuniao_module_1 = require('./form/avaliacao_reuniao/pesquisa/avaliacao_reuniao.module');
var bug_report_module_1 = require('./form/bug_report/pesquisa/bug_report.module');
var campo_module_1 = require('./form/campo/pesquisa/campo.module');
var campo_agrupador_module_1 = require('./form/campo_agrupador/pesquisa/campo_agrupador.module');
var campo_formulario_module_1 = require('./form/campo_formulario/pesquisa/campo_formulario.module');
var campo_indicador_module_1 = require('./form/campo_indicador/pesquisa/campo_indicador.module');
var candidato_module_1 = require('./form/candidato/pesquisa/candidato.module');
var categoria_ishikawa_module_1 = require('./form/categoria_ishikawa/pesquisa/categoria_ishikawa.module');
var categoria_ocorrencia_module_1 = require('./form/categoria_ocorrencia/pesquisa/categoria_ocorrencia.module');
var causa_efeito_module_1 = require('./form/causa_efeito/pesquisa/causa_efeito.module');
var checagem_documento_module_1 = require('./form/checagem_documento/pesquisa/checagem_documento.module');
var classificacao_auditoria_module_1 = require('./form/classificacao_auditoria/pesquisa/classificacao_auditoria.module');
var classificacao_helpdesk_module_1 = require('./form/classificacao_helpdesk/pesquisa/classificacao_helpdesk.module');
var classificacao_ouvidoria_module_1 = require('./form/classificacao_ouvidoria/pesquisa/classificacao_ouvidoria.module');
var cliente_module_1 = require('./form/cliente/pesquisa/cliente.module');
var compra_module_1 = require('./form/compra/pesquisa/compra.module');
var conclusao_auditoria_module_1 = require('./form/conclusao_auditoria/pesquisa/conclusao_auditoria.module');
var condicao_module_1 = require('./form/condicao/pesquisa/condicao.module');
var config_campo_formulario_module_1 = require('./form/config_campo_formulario/pesquisa/config_campo_formulario.module');
var config_campo_pesquisa_module_1 = require('./form/config_campo_pesquisa/pesquisa/config_campo_pesquisa.module');
var config_envio_indicadores_module_1 = require('./form/config_envio_indicadores/pesquisa/config_envio_indicadores.module');
var config_impressao_module_1 = require('./form/config_impressao/pesquisa/config_impressao.module');
var config_indicadores_module_1 = require('./form/config_indicadores/pesquisa/config_indicadores.module');
var config_pesquisa_module_1 = require('./form/config_pesquisa/pesquisa/config_pesquisa.module');
var config_sistema_module_1 = require('./form/config_sistema/pesquisa/config_sistema.module');
var configuracao_helpdesk_module_1 = require('./form/configuracao_helpdesk/pesquisa/configuracao_helpdesk.module');
var configuracao_ouvidoria_module_1 = require('./form/configuracao_ouvidoria/pesquisa/configuracao_ouvidoria.module');
var container_principal_module_1 = require('./form/container_principal/pesquisa/container_principal.module');
var cronograma_auditoria_module_1 = require('./form/cronograma_auditoria/pesquisa/cronograma_auditoria.module');
var cronograma_manutencao_module_1 = require('./form/cronograma_manutencao/pesquisa/cronograma_manutencao.module');
var descricao_funcional_module_1 = require('./form/descricao_funcional/pesquisa/descricao_funcional.module');
var descritivo_treinamento_module_1 = require('./form/descritivo_treinamento/pesquisa/descritivo_treinamento.module');
var diagrama_helpdesk_module_1 = require('./form/diagrama_helpdesk/pesquisa/diagrama_helpdesk.module');
var doc_descritivo_treinamento_module_1 = require('./form/doc_descritivo_treinamento/pesquisa/doc_descritivo_treinamento.module');
var doc_revisao_formulario_module_1 = require('./form/doc_revisao_formulario/pesquisa/doc_revisao_formulario.module');
var documento_module_1 = require('./form/documento/pesquisa/documento.module');
var documento_pic_module_1 = require('./form/documento_pic/pesquisa/documento_pic.module');
var empresa_module_1 = require('./form/empresa/pesquisa/empresa.module');
var endereco_module_1 = require('./form/endereco/pesquisa/endereco.module');
var equipamento_module_1 = require('./form/equipamento/pesquisa/equipamento.module');
var equipe_cronograma_auditoria_module_1 = require('./form/equipe_cronograma_auditoria/pesquisa/equipe_cronograma_auditoria.module');
var escala_tempo_module_1 = require('./form/escala_tempo/pesquisa/escala_tempo.module');
var escalonamento_formulario_module_1 = require('./form/escalonamento_formulario/pesquisa/escalonamento_formulario.module');
var escalonamento_usuario_module_1 = require('./form/escalonamento_usuario/pesquisa/escalonamento_usuario.module');
var estado_module_1 = require('./form/estado/pesquisa/estado.module');
var evento_campanha_module_1 = require('./form/evento_campanha/pesquisa/evento_campanha.module');
var evidencia_helpdesk_module_1 = require('./form/evidencia_helpdesk/pesquisa/evidencia_helpdesk.module');
var evidencia_resposta_exec_module_1 = require('./form/evidencia_resposta_exec/pesquisa/evidencia_resposta_exec.module');
var exame_funcao_module_1 = require('./form/exame_funcao/pesquisa/exame_funcao.module');
var exame_medico_module_1 = require('./form/exame_medico/pesquisa/exame_medico.module');
var execucao_auditoria_module_1 = require('./form/execucao_auditoria/pesquisa/execucao_auditoria.module');
var execucao_formulario_module_1 = require('./form/execucao_formulario/pesquisa/execucao_formulario.module');
var executar_manutencao_module_1 = require('./form/executar_manutencao/pesquisa/executar_manutencao.module');
var executar_reuniao_module_1 = require('./form/executar_reuniao/pesquisa/executar_reuniao.module');
var fabricante_module_1 = require('./form/fabricante/pesquisa/fabricante.module');
var faixa_class_auditoria_module_1 = require('./form/faixa_class_auditoria/pesquisa/faixa_class_auditoria.module');
var fiscal_sif_module_1 = require('./form/fiscal_sif/pesquisa/fiscal_sif.module');
var fluxograma_module_1 = require('./form/fluxograma/pesquisa/fluxograma.module');
var formulario_module_1 = require('./form/formulario/pesquisa/formulario.module');
var formulario_indicador_module_1 = require('./form/formulario_indicador/pesquisa/formulario_indicador.module');
var funcao_usuario_module_1 = require('./form/funcao_usuario/pesquisa/funcao_usuario.module');
var grupo_auditoria_module_1 = require('./form/grupo_auditoria/pesquisa/grupo_auditoria.module');
var grupo_formulario_module_1 = require('./form/grupo_formulario/pesquisa/grupo_formulario.module');
var grupo_usuario_module_1 = require('./form/grupo_usuario/pesquisa/grupo_usuario.module');
var grupo_usuario_programa_module_1 = require('./form/grupo_usuario_programa/pesquisa/grupo_usuario_programa.module');
var helpdesk_ocorrencia_module_1 = require('./form/helpdesk_ocorrencia/pesquisa/helpdesk_ocorrencia.module');
var ideia_reuniao_pic_module_1 = require('./form/ideia_reuniao_pic/pesquisa/ideia_reuniao_pic.module');
var indicador_customizado_module_1 = require('./form/indicador_customizado/pesquisa/indicador_customizado.module');
var lista_modulos_module_1 = require('./form/lista_modulos/pesquisa/lista_modulos.module');
var log_documento_module_1 = require('./form/log_documento/pesquisa/log_documento.module');
var manutencao_preventiva_module_1 = require('./form/manutencao_preventiva/pesquisa/manutencao_preventiva.module');
var mapa_formulario_module_1 = require('./form/mapa_formulario/pesquisa/mapa_formulario.module');
var menu_module_1 = require('./form/menu/pesquisa/menu.module');
var menu_indicadores_module_1 = require('./form/menu_indicadores/pesquisa/menu_indicadores.module');
var modulo_module_1 = require('./form/modulo/pesquisa/modulo.module');
var modulo_indicadores_module_1 = require('./form/modulo_indicadores/pesquisa/modulo_indicadores.module');
var municipio_module_1 = require('./form/municipio/pesquisa/municipio.module');
var natureza_ocorrencia_module_1 = require('./form/natureza_ocorrencia/pesquisa/natureza_ocorrencia.module');
var notificacao_module_1 = require('./form/notificacao/pesquisa/notificacao.module');
var notificacao_automatica_module_1 = require('./form/notificacao_automatica/pesquisa/notificacao_automatica.module');
var notificacao_grupo_usuario_module_1 = require('./form/notificacao_grupo_usuario/pesquisa/notificacao_grupo_usuario.module');
var notificacao_plano_acao_module_1 = require('./form/notificacao_plano_acao/pesquisa/notificacao_plano_acao.module');
var notificacao_usuario_module_1 = require('./form/notificacao_usuario/pesquisa/notificacao_usuario.module');
var ocorrencia_module_1 = require('./form/ocorrencia/pesquisa/ocorrencia.module');
var ocorrencia_ouvidoria_module_1 = require('./form/ocorrencia_ouvidoria/pesquisa/ocorrencia_ouvidoria.module');
var ocorrencia_periodicidade_module_1 = require('./form/ocorrencia_periodicidade/pesquisa/ocorrencia_periodicidade.module');
var operacao_notificacao_module_1 = require('./form/operacao_notificacao/pesquisa/operacao_notificacao.module');
var pais_module_1 = require('./form/pais/pesquisa/pais.module');
var participantes_reuniao_module_1 = require('./form/participantes_reuniao/pesquisa/participantes_reuniao.module');
var participantes_reuniao_pic_module_1 = require('./form/participantes_reuniao_pic/pesquisa/participantes_reuniao_pic.module');
var participantes_treinamento_module_1 = require('./form/participantes_treinamento/pesquisa/participantes_treinamento.module');
var pergunta_auditoria_module_1 = require('./form/pergunta_auditoria/pesquisa/pergunta_auditoria.module');
var pergunta_avaliacao_ideia_module_1 = require('./form/pergunta_avaliacao_ideia/pesquisa/pergunta_avaliacao_ideia.module');
var periodicidade_module_1 = require('./form/periodicidade/pesquisa/periodicidade.module');
var permissao_acesso_module_1 = require('./form/permissao_acesso/pesquisa/permissao_acesso.module');
var permissao_acesso_documento_module_1 = require('./form/permissao_acesso_documento/pesquisa/permissao_acesso_documento.module');
var permissao_indicador_module_1 = require('./form/permissao_indicador/pesquisa/permissao_indicador.module');
var permissao_menu_indicadores_module_1 = require('./form/permissao_menu_indicadores/pesquisa/permissao_menu_indicadores.module');
var permissao_padrao_module_1 = require('./form/permissao_padrao/pesquisa/permissao_padrao.module');
var pessoa_module_1 = require('./form/pessoa/pesquisa/pessoa.module');
var pessoa_juridica_module_1 = require('./form/pessoa_juridica/pesquisa/pessoa_juridica.module');
var pic_module_1 = require('./form/pic/pesquisa/pic.module');
var plano_acao_module_1 = require('./form/plano_acao/pesquisa/plano_acao.module');
var plano_acao_auditoria_module_1 = require('./form/plano_acao_auditoria/pesquisa/plano_acao_auditoria.module');
var plano_acao_formulario_module_1 = require('./form/plano_acao_formulario/pesquisa/plano_acao_formulario.module');
var plano_acao_hp_module_1 = require('./form/plano_acao_hp/pesquisa/plano_acao_hp.module');
var plano_acao_nc_module_1 = require('./form/plano_acao_nc/pesquisa/plano_acao_nc.module');
var plano_acao_ocorrencia_module_1 = require('./form/plano_acao_ocorrencia/pesquisa/plano_acao_ocorrencia.module');
var planos_cronograma_auditoria_module_1 = require('./form/planos_cronograma_auditoria/pesquisa/planos_cronograma_auditoria.module');
var ponto_mapa_module_1 = require('./form/ponto_mapa/pesquisa/ponto_mapa.module');
var pre_avaliacao_ideia_pic_module_1 = require('./form/pre_avaliacao_ideia_pic/pesquisa/pre_avaliacao_ideia_pic.module');
var processo_fluxo_module_1 = require('./form/processo_fluxo/pesquisa/processo_fluxo.module');
var produto_module_1 = require('./form/produto/pesquisa/produto.module');
var produto_compra_module_1 = require('./form/produto_compra/pesquisa/produto_compra.module');
var produto_servico_module_1 = require('./form/produto_servico/pesquisa/produto_servico.module');
var profissao_module_1 = require('./form/profissao/pesquisa/profissao.module');
var programa_module_1 = require('./form/programa/pesquisa/programa.module');
var programa_qualidade_module_1 = require('./form/programa_qualidade/pesquisa/programa_qualidade.module');
var proposta_candidato_module_1 = require('./form/proposta_candidato/pesquisa/proposta_candidato.module');
var registro_treinamento_module_1 = require('./form/registro_treinamento/pesquisa/registro_treinamento.module');
var resolucao_ocorrencia_module_1 = require('./form/resolucao_ocorrencia/pesquisa/resolucao_ocorrencia.module');
var resposta_auditoria_module_1 = require('./form/resposta_auditoria/pesquisa/resposta_auditoria.module');
var resposta_campo_formulario_module_1 = require('./form/resposta_campo_formulario/pesquisa/resposta_campo_formulario.module');
var resposta_exec_auditoria_module_1 = require('./form/resposta_exec_auditoria/pesquisa/resposta_exec_auditoria.module');
var resposta_exec_formulario_module_1 = require('./form/resposta_exec_formulario/pesquisa/resposta_exec_formulario.module');
var reuniao_module_1 = require('./form/reuniao/pesquisa/reuniao.module');
var reuniao_pic_module_1 = require('./form/reuniao_pic/pesquisa/reuniao_pic.module');
var revisao_programa_qualidade_module_1 = require('./form/revisao_programa_qualidade/pesquisa/revisao_programa_qualidade.module');
var servico_module_1 = require('./form/servico/pesquisa/servico.module');
var setor_module_1 = require('./form/setor/pesquisa/setor.module');
var sistema_module_1 = require('./form/sistema/pesquisa/sistema.module');
var sub_formulario_module_1 = require('./form/sub_formulario/pesquisa/sub_formulario.module');
var tabela_module_1 = require('./form/tabela/pesquisa/tabela.module');
var tipo_campo_module_1 = require('./form/tipo_campo/pesquisa/tipo_campo.module');
var tipo_notificacao_module_1 = require('./form/tipo_notificacao/pesquisa/tipo_notificacao.module');
var tipo_turno_module_1 = require('./form/tipo_turno/pesquisa/tipo_turno.module');
var treinamento_funcao_module_1 = require('./form/treinamento_funcao/pesquisa/treinamento_funcao.module');
var unidade_module_1 = require('./form/unidade/pesquisa/unidade.module');
var usuario_module_1 = require('./form/usuario/pesquisa/usuario.module');
var usuario_grupo_usuario_module_1 = require('./form/usuario_grupo_usuario/pesquisa/usuario_grupo_usuario.module');
var usuario_setor_module_1 = require('./form/usuario_setor/pesquisa/usuario_setor.module');
var veiculo_module_1 = require('./form/veiculo/pesquisa/veiculo.module');
//import { PessoaModule } from './form/pessoa/pesquisa/pessoa.module';
var menu_topo_component_1 = require('./core/componentes/menu_topo/menu_topo.component');
var mapa_calor_module_1 = require('./mapas/calor/mapa_calor.module');
var mapa_pontos_module_1 = require('./mapas/pontos/mapa_pontos.module');
var mapa_cluster_module_1 = require('./mapas/cluster/mapa_cluster.module');
var rota_destino_module_1 = require('./mapas/rotas/rota_destino.module');
var x_module_1 = require('./x/x.module');
var app_routing_1 = require('./app.routing');
var core_module_1 = require('./core/core.module');
var shared_module_1 = require('./shared/shared.module');
var AppModule = (function () {
    function AppModule(_appRef) {
        this._appRef = _appRef;
    }
    AppModule.prototype.ngDoBootstrap = function () {
        this._appRef.bootstrap(AppModule);
    };
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.app_routing,
                customers_module_1.CustomersModule,
                login_module_1.LoginModule,
                home_module_1.HomeModule,
                /**
                 *
                 * IMPORTAR OS MÓDULOS CRIADOS E QUE SERÃO UTILIZADOS PELO AppComponent: Singleton, routing.
                 */
                acao_corretiva_module_1.Acao_corretivaModule, acao_corretiva_formulario_module_1.Acao_corretiva_formularioModule, acao_corretiva_helpdesk_module_1.Acao_corretiva_helpdeskModule, acao_corretiva_pa_module_1.Acao_corretiva_paModule, acao_plano_acao_hp_module_1.Acao_plano_acao_hpModule, acao_preventiva_module_1.Acao_preventivaModule, acao_preventiva_formulario_module_1.Acao_preventiva_formularioModule, acao_preventiva_pa_module_1.Acao_preventiva_paModule, anexo_module_1.AnexoModule, atividade_acao_pl_hp_module_1.Atividade_acao_pl_hpModule, atividade_plano_acao_module_1.Atividade_plano_acaoModule, atividades_module_1.AtividadesModule, atividades_acao_imediata_module_1.Atividades_acao_imediataModule, atividades_cronograma_manutencao_module_1.Atividades_cronograma_manutencaoModule, atividades_manutencao_module_1.Atividades_manutencaoModule, atv_exec_manutencao_module_1.Atv_exec_manutencaoModule, auditoria_module_1.AuditoriaModule, avaliacao_ideia_module_1.Avaliacao_ideiaModule, avaliacao_reuniao_module_1.Avaliacao_reuniaoModule, bug_report_module_1.Bug_reportModule, campo_module_1.CampoModule, campo_agrupador_module_1.Campo_agrupadorModule, campo_formulario_module_1.Campo_formularioModule, campo_indicador_module_1.Campo_indicadorModule, candidato_module_1.CandidatoModule, categoria_ishikawa_module_1.Categoria_ishikawaModule, categoria_ocorrencia_module_1.Categoria_ocorrenciaModule, causa_efeito_module_1.Causa_efeitoModule, checagem_documento_module_1.Checagem_documentoModule, classificacao_auditoria_module_1.Classificacao_auditoriaModule, classificacao_helpdesk_module_1.Classificacao_helpdeskModule, classificacao_ouvidoria_module_1.Classificacao_ouvidoriaModule, cliente_module_1.ClienteModule, compra_module_1.CompraModule, conclusao_auditoria_module_1.Conclusao_auditoriaModule, condicao_module_1.CondicaoModule, config_campo_formulario_module_1.Config_campo_formularioModule, config_campo_pesquisa_module_1.Config_campo_pesquisaModule, config_envio_indicadores_module_1.Config_envio_indicadoresModule, config_impressao_module_1.Config_impressaoModule, config_indicadores_module_1.Config_indicadoresModule, config_pesquisa_module_1.Config_pesquisaModule, config_sistema_module_1.Config_sistemaModule, configuracao_helpdesk_module_1.Configuracao_helpdeskModule, configuracao_ouvidoria_module_1.Configuracao_ouvidoriaModule, container_principal_module_1.Container_principalModule, cronograma_auditoria_module_1.Cronograma_auditoriaModule, cronograma_manutencao_module_1.Cronograma_manutencaoModule, descricao_funcional_module_1.Descricao_funcionalModule, descritivo_treinamento_module_1.Descritivo_treinamentoModule, diagrama_helpdesk_module_1.Diagrama_helpdeskModule, doc_descritivo_treinamento_module_1.Doc_descritivo_treinamentoModule, doc_revisao_formulario_module_1.Doc_revisao_formularioModule, documento_module_1.DocumentoModule, documento_pic_module_1.Documento_picModule, empresa_module_1.EmpresaModule, endereco_module_1.EnderecoModule, equipamento_module_1.EquipamentoModule, equipe_cronograma_auditoria_module_1.Equipe_cronograma_auditoriaModule, escala_tempo_module_1.Escala_tempoModule, escalonamento_formulario_module_1.Escalonamento_formularioModule, escalonamento_usuario_module_1.Escalonamento_usuarioModule, estado_module_1.EstadoModule, evento_campanha_module_1.Evento_campanhaModule, evidencia_helpdesk_module_1.Evidencia_helpdeskModule, evidencia_resposta_exec_module_1.Evidencia_resposta_execModule, exame_funcao_module_1.Exame_funcaoModule, exame_medico_module_1.Exame_medicoModule, execucao_auditoria_module_1.Execucao_auditoriaModule, execucao_formulario_module_1.Execucao_formularioModule, executar_manutencao_module_1.Executar_manutencaoModule, executar_reuniao_module_1.Executar_reuniaoModule, fabricante_module_1.FabricanteModule, faixa_class_auditoria_module_1.Faixa_class_auditoriaModule, fiscal_sif_module_1.Fiscal_sifModule, fluxograma_module_1.FluxogramaModule, formulario_module_1.FormularioModule, formulario_indicador_module_1.Formulario_indicadorModule, funcao_usuario_module_1.Funcao_usuarioModule, grupo_auditoria_module_1.Grupo_auditoriaModule, grupo_formulario_module_1.Grupo_formularioModule, grupo_usuario_module_1.Grupo_usuarioModule, grupo_usuario_programa_module_1.Grupo_usuario_programaModule, helpdesk_ocorrencia_module_1.Helpdesk_ocorrenciaModule, ideia_reuniao_pic_module_1.Ideia_reuniao_picModule, indicador_customizado_module_1.Indicador_customizadoModule, lista_modulos_module_1.Lista_modulosModule, log_documento_module_1.Log_documentoModule, manutencao_preventiva_module_1.Manutencao_preventivaModule, mapa_formulario_module_1.Mapa_formularioModule, menu_module_1.MenuModule, menu_indicadores_module_1.Menu_indicadoresModule, modulo_module_1.ModuloModule, modulo_indicadores_module_1.Modulo_indicadoresModule, municipio_module_1.MunicipioModule, natureza_ocorrencia_module_1.Natureza_ocorrenciaModule, notificacao_module_1.NotificacaoModule, notificacao_automatica_module_1.Notificacao_automaticaModule, notificacao_grupo_usuario_module_1.Notificacao_grupo_usuarioModule, notificacao_plano_acao_module_1.Notificacao_plano_acaoModule, notificacao_usuario_module_1.Notificacao_usuarioModule, ocorrencia_module_1.OcorrenciaModule, ocorrencia_ouvidoria_module_1.Ocorrencia_ouvidoriaModule, ocorrencia_periodicidade_module_1.Ocorrencia_periodicidadeModule, operacao_notificacao_module_1.Operacao_notificacaoModule, pais_module_1.PaisModule, participantes_reuniao_module_1.Participantes_reuniaoModule, participantes_reuniao_pic_module_1.Participantes_reuniao_picModule, participantes_treinamento_module_1.Participantes_treinamentoModule, pergunta_auditoria_module_1.Pergunta_auditoriaModule, pergunta_avaliacao_ideia_module_1.Pergunta_avaliacao_ideiaModule, periodicidade_module_1.PeriodicidadeModule, permissao_acesso_module_1.Permissao_acessoModule, permissao_acesso_documento_module_1.Permissao_acesso_documentoModule, permissao_indicador_module_1.Permissao_indicadorModule, permissao_menu_indicadores_module_1.Permissao_menu_indicadoresModule, permissao_padrao_module_1.Permissao_padraoModule, pessoa_module_1.PessoaModule, pessoa_juridica_module_1.Pessoa_juridicaModule, pic_module_1.PicModule, plano_acao_module_1.Plano_acaoModule, plano_acao_auditoria_module_1.Plano_acao_auditoriaModule, plano_acao_formulario_module_1.Plano_acao_formularioModule, plano_acao_hp_module_1.Plano_acao_hpModule, plano_acao_nc_module_1.Plano_acao_ncModule, plano_acao_ocorrencia_module_1.Plano_acao_ocorrenciaModule, planos_cronograma_auditoria_module_1.Planos_cronograma_auditoriaModule, ponto_mapa_module_1.Ponto_mapaModule, pre_avaliacao_ideia_pic_module_1.Pre_avaliacao_ideia_picModule, processo_fluxo_module_1.Processo_fluxoModule, produto_module_1.ProdutoModule, produto_compra_module_1.Produto_compraModule, produto_servico_module_1.Produto_servicoModule, profissao_module_1.ProfissaoModule, programa_module_1.ProgramaModule, programa_qualidade_module_1.Programa_qualidadeModule, proposta_candidato_module_1.Proposta_candidatoModule, registro_treinamento_module_1.Registro_treinamentoModule, resolucao_ocorrencia_module_1.Resolucao_ocorrenciaModule, resposta_auditoria_module_1.Resposta_auditoriaModule, resposta_campo_formulario_module_1.Resposta_campo_formularioModule, resposta_exec_auditoria_module_1.Resposta_exec_auditoriaModule, resposta_exec_formulario_module_1.Resposta_exec_formularioModule, reuniao_module_1.ReuniaoModule, reuniao_pic_module_1.Reuniao_picModule, revisao_programa_qualidade_module_1.Revisao_programa_qualidadeModule, servico_module_1.ServicoModule, setor_module_1.SetorModule, sistema_module_1.SistemaModule, sub_formulario_module_1.Sub_formularioModule, tabela_module_1.TabelaModule, tipo_campo_module_1.Tipo_campoModule, tipo_notificacao_module_1.Tipo_notificacaoModule, tipo_turno_module_1.Tipo_turnoModule, treinamento_funcao_module_1.Treinamento_funcaoModule, unidade_module_1.UnidadeModule, usuario_module_1.UsuarioModule, usuario_grupo_usuario_module_1.Usuario_grupo_usuarioModule, usuario_setor_module_1.Usuario_setorModule, veiculo_module_1.VeiculoModule,
                mapa_calor_module_1.Mapa_calorModule,
                rota_destino_module_1.Rota_destinoModule,
                mapa_pontos_module_1.Mapa_pontosModule,
                mapa_cluster_module_1.Mapa_clusterModule,
                x_module_1.XModule,
                core_module_1.CoreModule,
                shared_module_1.SharedModule,
            ],
            declarations: [app_component_1.AppComponent, menu_topo_component_1.Menu_topoComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map