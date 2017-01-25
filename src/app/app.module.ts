import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ApplicationRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { CustomersModule } from './customers/customers.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { FormsModule }   from '@angular/forms';
//import { PolymerElement } from '@vaadin/angular2-polymer';
/**
 * 
 * IMPORTAR OS MÓDULOS CRIADOS E QUE SERÃO UTILIZADOS PELO AppComponent: Singleton, routing.
 */
	import { Acao_corretivaModule } from './form/acao_corretiva/pesquisa/acao_corretiva.module';	import { Acao_corretiva_formularioModule } from './form/acao_corretiva_formulario/pesquisa/acao_corretiva_formulario.module';	import { Acao_corretiva_helpdeskModule } from './form/acao_corretiva_helpdesk/pesquisa/acao_corretiva_helpdesk.module';	import { Acao_corretiva_paModule } from './form/acao_corretiva_pa/pesquisa/acao_corretiva_pa.module';	import { Acao_plano_acao_hpModule } from './form/acao_plano_acao_hp/pesquisa/acao_plano_acao_hp.module';	import { Acao_preventivaModule } from './form/acao_preventiva/pesquisa/acao_preventiva.module';	import { Acao_preventiva_formularioModule } from './form/acao_preventiva_formulario/pesquisa/acao_preventiva_formulario.module';	import { Acao_preventiva_paModule } from './form/acao_preventiva_pa/pesquisa/acao_preventiva_pa.module';	import { AnexoModule } from './form/anexo/pesquisa/anexo.module';	import { Atividade_acao_pl_hpModule } from './form/atividade_acao_pl_hp/pesquisa/atividade_acao_pl_hp.module';	import { Atividade_plano_acaoModule } from './form/atividade_plano_acao/pesquisa/atividade_plano_acao.module';	import { AtividadesModule } from './form/atividades/pesquisa/atividades.module';	import { Atividades_acao_imediataModule } from './form/atividades_acao_imediata/pesquisa/atividades_acao_imediata.module';	import { Atividades_cronograma_manutencaoModule } from './form/atividades_cronograma_manutencao/pesquisa/atividades_cronograma_manutencao.module';	import { Atividades_manutencaoModule } from './form/atividades_manutencao/pesquisa/atividades_manutencao.module';	import { Atv_exec_manutencaoModule } from './form/atv_exec_manutencao/pesquisa/atv_exec_manutencao.module';	import { AuditoriaModule } from './form/auditoria/pesquisa/auditoria.module';	import { Avaliacao_ideiaModule } from './form/avaliacao_ideia/pesquisa/avaliacao_ideia.module';	import { Avaliacao_reuniaoModule } from './form/avaliacao_reuniao/pesquisa/avaliacao_reuniao.module';	import { Bug_reportModule } from './form/bug_report/pesquisa/bug_report.module';	import { CampoModule } from './form/campo/pesquisa/campo.module';	import { Campo_agrupadorModule } from './form/campo_agrupador/pesquisa/campo_agrupador.module';	import { Campo_formularioModule } from './form/campo_formulario/pesquisa/campo_formulario.module';	
  
  import { Campo_indicadorModule } from './form/campo_indicador/pesquisa/campo_indicador.module';
  import { CandidatoModule } from './form/candidato/pesquisa/candidato.module';	import { Categoria_ishikawaModule } from './form/categoria_ishikawa/pesquisa/categoria_ishikawa.module';	import { Categoria_ocorrenciaModule } from './form/categoria_ocorrencia/pesquisa/categoria_ocorrencia.module';	import { Causa_efeitoModule } from './form/causa_efeito/pesquisa/causa_efeito.module';	import { Checagem_documentoModule } from './form/checagem_documento/pesquisa/checagem_documento.module';	import { Classificacao_auditoriaModule } from './form/classificacao_auditoria/pesquisa/classificacao_auditoria.module';	import { Classificacao_helpdeskModule } from './form/classificacao_helpdesk/pesquisa/classificacao_helpdesk.module';	import { Classificacao_ouvidoriaModule } from './form/classificacao_ouvidoria/pesquisa/classificacao_ouvidoria.module';	import { ClienteModule } from './form/cliente/pesquisa/cliente.module';	import { CompraModule } from './form/compra/pesquisa/compra.module';	import { Conclusao_auditoriaModule } from './form/conclusao_auditoria/pesquisa/conclusao_auditoria.module';	import { CondicaoModule } from './form/condicao/pesquisa/condicao.module';	import { Config_campo_formularioModule } from './form/config_campo_formulario/pesquisa/config_campo_formulario.module';	import { Config_campo_pesquisaModule } from './form/config_campo_pesquisa/pesquisa/config_campo_pesquisa.module';	import { Config_envio_indicadoresModule } from './form/config_envio_indicadores/pesquisa/config_envio_indicadores.module';	import { Config_impressaoModule } from './form/config_impressao/pesquisa/config_impressao.module';	import { Config_indicadoresModule } from './form/config_indicadores/pesquisa/config_indicadores.module';	import { Config_pesquisaModule } from './form/config_pesquisa/pesquisa/config_pesquisa.module';	import { Config_sistemaModule } from './form/config_sistema/pesquisa/config_sistema.module';	import { Configuracao_helpdeskModule } from './form/configuracao_helpdesk/pesquisa/configuracao_helpdesk.module';	import { Configuracao_ouvidoriaModule } from './form/configuracao_ouvidoria/pesquisa/configuracao_ouvidoria.module';	import { Container_principalModule } from './form/container_principal/pesquisa/container_principal.module';	import { Cronograma_auditoriaModule } from './form/cronograma_auditoria/pesquisa/cronograma_auditoria.module';	import { Cronograma_manutencaoModule } from './form/cronograma_manutencao/pesquisa/cronograma_manutencao.module';	
  import { Descricao_funcionalModule } from './form/descricao_funcional/pesquisa/descricao_funcional.module';	import { Descritivo_treinamentoModule } from './form/descritivo_treinamento/pesquisa/descritivo_treinamento.module';	import { Diagrama_helpdeskModule } from './form/diagrama_helpdesk/pesquisa/diagrama_helpdesk.module';	import { Doc_descritivo_treinamentoModule } from './form/doc_descritivo_treinamento/pesquisa/doc_descritivo_treinamento.module';	import { Doc_revisao_formularioModule } from './form/doc_revisao_formulario/pesquisa/doc_revisao_formulario.module';	import { DocumentoModule } from './form/documento/pesquisa/documento.module';	import { Documento_picModule } from './form/documento_pic/pesquisa/documento_pic.module';	import { EmpresaModule } from './form/empresa/pesquisa/empresa.module';	import { EnderecoModule } from './form/endereco/pesquisa/endereco.module';	import { EquipamentoModule } from './form/equipamento/pesquisa/equipamento.module';	import { Equipe_cronograma_auditoriaModule } from './form/equipe_cronograma_auditoria/pesquisa/equipe_cronograma_auditoria.module';	import { Escala_tempoModule } from './form/escala_tempo/pesquisa/escala_tempo.module';	import { Escalonamento_formularioModule } from './form/escalonamento_formulario/pesquisa/escalonamento_formulario.module';	import { Escalonamento_usuarioModule } from './form/escalonamento_usuario/pesquisa/escalonamento_usuario.module';	
  import { EstadoModule } from './form/estado/pesquisa/estado.module';	import { Evento_campanhaModule } from './form/evento_campanha/pesquisa/evento_campanha.module';	import { Evidencia_helpdeskModule } from './form/evidencia_helpdesk/pesquisa/evidencia_helpdesk.module';	import { Evidencia_resposta_execModule } from './form/evidencia_resposta_exec/pesquisa/evidencia_resposta_exec.module';	import { Exame_funcaoModule } from './form/exame_funcao/pesquisa/exame_funcao.module';	import { Exame_medicoModule } from './form/exame_medico/pesquisa/exame_medico.module';	import { Execucao_auditoriaModule } from './form/execucao_auditoria/pesquisa/execucao_auditoria.module';	import { Execucao_formularioModule } from './form/execucao_formulario/pesquisa/execucao_formulario.module';	import { Executar_manutencaoModule } from './form/executar_manutencao/pesquisa/executar_manutencao.module';	import { Executar_reuniaoModule } from './form/executar_reuniao/pesquisa/executar_reuniao.module';	import { FabricanteModule } from './form/fabricante/pesquisa/fabricante.module';	import { Faixa_class_auditoriaModule } from './form/faixa_class_auditoria/pesquisa/faixa_class_auditoria.module';	import { Fiscal_sifModule } from './form/fiscal_sif/pesquisa/fiscal_sif.module';	import { FluxogramaModule } from './form/fluxograma/pesquisa/fluxograma.module';	import { FormularioModule } from './form/formulario/pesquisa/formulario.module';	import { Formulario_indicadorModule } from './form/formulario_indicador/pesquisa/formulario_indicador.module';	import { Funcao_usuarioModule } from './form/funcao_usuario/pesquisa/funcao_usuario.module';	import { Grupo_auditoriaModule } from './form/grupo_auditoria/pesquisa/grupo_auditoria.module';	import { Grupo_formularioModule } from './form/grupo_formulario/pesquisa/grupo_formulario.module';	import { Grupo_usuarioModule } from './form/grupo_usuario/pesquisa/grupo_usuario.module';	import { Grupo_usuario_programaModule } from './form/grupo_usuario_programa/pesquisa/grupo_usuario_programa.module';	import { Helpdesk_ocorrenciaModule } from './form/helpdesk_ocorrencia/pesquisa/helpdesk_ocorrencia.module';	import { Ideia_reuniao_picModule } from './form/ideia_reuniao_pic/pesquisa/ideia_reuniao_pic.module';	import { Indicador_customizadoModule } from './form/indicador_customizado/pesquisa/indicador_customizado.module';	import { Lista_modulosModule } from './form/lista_modulos/pesquisa/lista_modulos.module';	import { Log_documentoModule } from './form/log_documento/pesquisa/log_documento.module';	import { Manutencao_preventivaModule } from './form/manutencao_preventiva/pesquisa/manutencao_preventiva.module';	import { Mapa_formularioModule } from './form/mapa_formulario/pesquisa/mapa_formulario.module';	import { MenuModule } from './form/menu/pesquisa/menu.module';	import { Menu_indicadoresModule } from './form/menu_indicadores/pesquisa/menu_indicadores.module';	import { ModuloModule } from './form/modulo/pesquisa/modulo.module';	import { Modulo_indicadoresModule } from './form/modulo_indicadores/pesquisa/modulo_indicadores.module';	import { MunicipioModule } from './form/municipio/pesquisa/municipio.module';	import { Natureza_ocorrenciaModule } from './form/natureza_ocorrencia/pesquisa/natureza_ocorrencia.module';	import { NotificacaoModule } from './form/notificacao/pesquisa/notificacao.module';	import { Notificacao_automaticaModule } from './form/notificacao_automatica/pesquisa/notificacao_automatica.module';	import { Notificacao_grupo_usuarioModule } from './form/notificacao_grupo_usuario/pesquisa/notificacao_grupo_usuario.module';	import { Notificacao_plano_acaoModule } from './form/notificacao_plano_acao/pesquisa/notificacao_plano_acao.module';	import { Notificacao_usuarioModule } from './form/notificacao_usuario/pesquisa/notificacao_usuario.module';	import { OcorrenciaModule } from './form/ocorrencia/pesquisa/ocorrencia.module';	import { Ocorrencia_ouvidoriaModule } from './form/ocorrencia_ouvidoria/pesquisa/ocorrencia_ouvidoria.module';	import { Ocorrencia_periodicidadeModule } from './form/ocorrencia_periodicidade/pesquisa/ocorrencia_periodicidade.module';	import { Operacao_notificacaoModule } from './form/operacao_notificacao/pesquisa/operacao_notificacao.module';	import { PaisModule } from './form/pais/pesquisa/pais.module';	import { Participantes_reuniaoModule } from './form/participantes_reuniao/pesquisa/participantes_reuniao.module';	import { Participantes_reuniao_picModule } from './form/participantes_reuniao_pic/pesquisa/participantes_reuniao_pic.module';	import { Participantes_treinamentoModule } from './form/participantes_treinamento/pesquisa/participantes_treinamento.module';	import { Pergunta_auditoriaModule } from './form/pergunta_auditoria/pesquisa/pergunta_auditoria.module';	import { Pergunta_avaliacao_ideiaModule } from './form/pergunta_avaliacao_ideia/pesquisa/pergunta_avaliacao_ideia.module';	import { PeriodicidadeModule } from './form/periodicidade/pesquisa/periodicidade.module';	import { Permissao_acessoModule } from './form/permissao_acesso/pesquisa/permissao_acesso.module';	import { Permissao_acesso_documentoModule } from './form/permissao_acesso_documento/pesquisa/permissao_acesso_documento.module';	import { Permissao_indicadorModule } from './form/permissao_indicador/pesquisa/permissao_indicador.module';	import { Permissao_menu_indicadoresModule } from './form/permissao_menu_indicadores/pesquisa/permissao_menu_indicadores.module';	import { Permissao_padraoModule } from './form/permissao_padrao/pesquisa/permissao_padrao.module';	import { PessoaModule } from './form/pessoa/pesquisa/pessoa.module';	import { Pessoa_juridicaModule } from './form/pessoa_juridica/pesquisa/pessoa_juridica.module';	import { PicModule } from './form/pic/pesquisa/pic.module';	import { Plano_acaoModule } from './form/plano_acao/pesquisa/plano_acao.module';	import { Plano_acao_auditoriaModule } from './form/plano_acao_auditoria/pesquisa/plano_acao_auditoria.module';	import { Plano_acao_formularioModule } from './form/plano_acao_formulario/pesquisa/plano_acao_formulario.module';	import { Plano_acao_hpModule } from './form/plano_acao_hp/pesquisa/plano_acao_hp.module';	import { Plano_acao_ncModule } from './form/plano_acao_nc/pesquisa/plano_acao_nc.module';	import { Plano_acao_ocorrenciaModule } from './form/plano_acao_ocorrencia/pesquisa/plano_acao_ocorrencia.module';	import { Planos_cronograma_auditoriaModule } from './form/planos_cronograma_auditoria/pesquisa/planos_cronograma_auditoria.module';	import { Ponto_mapaModule } from './form/ponto_mapa/pesquisa/ponto_mapa.module';	import { Pre_avaliacao_ideia_picModule } from './form/pre_avaliacao_ideia_pic/pesquisa/pre_avaliacao_ideia_pic.module';	import { Processo_fluxoModule } from './form/processo_fluxo/pesquisa/processo_fluxo.module';	import { ProdutoModule } from './form/produto/pesquisa/produto.module';	import { Produto_compraModule } from './form/produto_compra/pesquisa/produto_compra.module';	import { Produto_servicoModule } from './form/produto_servico/pesquisa/produto_servico.module';	import { ProfissaoModule } from './form/profissao/pesquisa/profissao.module';	import { ProgramaModule } from './form/programa/pesquisa/programa.module';	import { Programa_qualidadeModule } from './form/programa_qualidade/pesquisa/programa_qualidade.module';	import { Proposta_candidatoModule } from './form/proposta_candidato/pesquisa/proposta_candidato.module';	import { Registro_treinamentoModule } from './form/registro_treinamento/pesquisa/registro_treinamento.module';	import { Resolucao_ocorrenciaModule } from './form/resolucao_ocorrencia/pesquisa/resolucao_ocorrencia.module';	import { Resposta_auditoriaModule } from './form/resposta_auditoria/pesquisa/resposta_auditoria.module';	import { Resposta_campo_formularioModule } from './form/resposta_campo_formulario/pesquisa/resposta_campo_formulario.module';	import { Resposta_exec_auditoriaModule } from './form/resposta_exec_auditoria/pesquisa/resposta_exec_auditoria.module';	import { Resposta_exec_formularioModule } from './form/resposta_exec_formulario/pesquisa/resposta_exec_formulario.module';	import { ReuniaoModule } from './form/reuniao/pesquisa/reuniao.module';	import { Reuniao_picModule } from './form/reuniao_pic/pesquisa/reuniao_pic.module';	import { Revisao_programa_qualidadeModule } from './form/revisao_programa_qualidade/pesquisa/revisao_programa_qualidade.module';	import { ServicoModule } from './form/servico/pesquisa/servico.module';	import { SetorModule } from './form/setor/pesquisa/setor.module';	import { SistemaModule } from './form/sistema/pesquisa/sistema.module';	import { Sub_formularioModule } from './form/sub_formulario/pesquisa/sub_formulario.module';	import { TabelaModule } from './form/tabela/pesquisa/tabela.module';	import { Tipo_campoModule } from './form/tipo_campo/pesquisa/tipo_campo.module';	import { Tipo_notificacaoModule } from './form/tipo_notificacao/pesquisa/tipo_notificacao.module';	import { Tipo_turnoModule } from './form/tipo_turno/pesquisa/tipo_turno.module';	import { Treinamento_funcaoModule } from './form/treinamento_funcao/pesquisa/treinamento_funcao.module';	import { UnidadeModule } from './form/unidade/pesquisa/unidade.module';	import { UsuarioModule } from './form/usuario/pesquisa/usuario.module';	import { Usuario_grupo_usuarioModule } from './form/usuario_grupo_usuario/pesquisa/usuario_grupo_usuario.module';	import { Usuario_setorModule } from './form/usuario_setor/pesquisa/usuario_setor.module';	import { VeiculoModule } from './form/veiculo/pesquisa/veiculo.module';







































//import { PessoaModule } from './form/pessoa/pesquisa/pessoa.module';
import { Menu_topoComponent } from './core/componentes/menu_topo/menu_topo.component';
import { Mapa_calorModule } from './mapas/calor/mapa_calor.module';
import { Mapa_pontosModule } from './mapas/pontos/mapa_pontos.module';
import { Mapa_clusterModule } from './mapas/cluster/mapa_cluster.module';
import { Rota_destinoModule } from './mapas/rotas/rota_destino.module';
import { XModule } from './x/x.module';

import { app_routing } from './app.routing';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    app_routing, 
    CustomersModule,
    LoginModule,
    HomeModule,
  /**
   * 
   * IMPORTAR OS MÓDULOS CRIADOS E QUE SERÃO UTILIZADOS PELO AppComponent: Singleton, routing.
   */
  



Acao_corretivaModule,Acao_corretiva_formularioModule,Acao_corretiva_helpdeskModule,Acao_corretiva_paModule,Acao_plano_acao_hpModule,Acao_preventivaModule,Acao_preventiva_formularioModule,Acao_preventiva_paModule,AnexoModule,Atividade_acao_pl_hpModule,Atividade_plano_acaoModule,AtividadesModule,Atividades_acao_imediataModule,Atividades_cronograma_manutencaoModule,Atividades_manutencaoModule,Atv_exec_manutencaoModule,AuditoriaModule,Avaliacao_ideiaModule,Avaliacao_reuniaoModule,Bug_reportModule,CampoModule,Campo_agrupadorModule,Campo_formularioModule,Campo_indicadorModule,CandidatoModule,Categoria_ishikawaModule,Categoria_ocorrenciaModule,Causa_efeitoModule,Checagem_documentoModule,Classificacao_auditoriaModule,Classificacao_helpdeskModule,Classificacao_ouvidoriaModule,ClienteModule,CompraModule,Conclusao_auditoriaModule,CondicaoModule,Config_campo_formularioModule,Config_campo_pesquisaModule,Config_envio_indicadoresModule,Config_impressaoModule,Config_indicadoresModule,Config_pesquisaModule,Config_sistemaModule,Configuracao_helpdeskModule,Configuracao_ouvidoriaModule,Container_principalModule,Cronograma_auditoriaModule,Cronograma_manutencaoModule,Descricao_funcionalModule,Descritivo_treinamentoModule,Diagrama_helpdeskModule,Doc_descritivo_treinamentoModule,Doc_revisao_formularioModule,DocumentoModule,Documento_picModule,EmpresaModule,EnderecoModule,EquipamentoModule,Equipe_cronograma_auditoriaModule,Escala_tempoModule,Escalonamento_formularioModule,Escalonamento_usuarioModule,EstadoModule,Evento_campanhaModule,Evidencia_helpdeskModule,Evidencia_resposta_execModule,Exame_funcaoModule,Exame_medicoModule,Execucao_auditoriaModule,Execucao_formularioModule,Executar_manutencaoModule,Executar_reuniaoModule,FabricanteModule,Faixa_class_auditoriaModule,Fiscal_sifModule,FluxogramaModule,FormularioModule,Formulario_indicadorModule,Funcao_usuarioModule,Grupo_auditoriaModule,Grupo_formularioModule,Grupo_usuarioModule,Grupo_usuario_programaModule,Helpdesk_ocorrenciaModule,Ideia_reuniao_picModule,Indicador_customizadoModule,Lista_modulosModule,Log_documentoModule,Manutencao_preventivaModule,Mapa_formularioModule,MenuModule,Menu_indicadoresModule,ModuloModule,Modulo_indicadoresModule,MunicipioModule,Natureza_ocorrenciaModule,NotificacaoModule,Notificacao_automaticaModule,Notificacao_grupo_usuarioModule,Notificacao_plano_acaoModule,Notificacao_usuarioModule,OcorrenciaModule,Ocorrencia_ouvidoriaModule,Ocorrencia_periodicidadeModule,Operacao_notificacaoModule,PaisModule,Participantes_reuniaoModule,Participantes_reuniao_picModule,Participantes_treinamentoModule,Pergunta_auditoriaModule,Pergunta_avaliacao_ideiaModule,PeriodicidadeModule,Permissao_acessoModule,Permissao_acesso_documentoModule,Permissao_indicadorModule,Permissao_menu_indicadoresModule,Permissao_padraoModule,PessoaModule,Pessoa_juridicaModule,PicModule,Plano_acaoModule,Plano_acao_auditoriaModule,Plano_acao_formularioModule,Plano_acao_hpModule,Plano_acao_ncModule,Plano_acao_ocorrenciaModule,Planos_cronograma_auditoriaModule,Ponto_mapaModule,Pre_avaliacao_ideia_picModule,Processo_fluxoModule,ProdutoModule,Produto_compraModule,Produto_servicoModule,ProfissaoModule,ProgramaModule,Programa_qualidadeModule,Proposta_candidatoModule,Registro_treinamentoModule,Resolucao_ocorrenciaModule,Resposta_auditoriaModule,Resposta_campo_formularioModule,Resposta_exec_auditoriaModule,Resposta_exec_formularioModule,ReuniaoModule,Reuniao_picModule,Revisao_programa_qualidadeModule,ServicoModule,SetorModule,SistemaModule,Sub_formularioModule,TabelaModule,Tipo_campoModule,Tipo_notificacaoModule,Tipo_turnoModule,Treinamento_funcaoModule,UnidadeModule,UsuarioModule,Usuario_grupo_usuarioModule,Usuario_setorModule,VeiculoModule





















    ,Mapa_calorModule
    ,Rota_destinoModule
    ,Mapa_pontosModule
    ,Mapa_clusterModule
    ,XModule,
    CoreModule,   //Singleton objects
    SharedModule,  //Shared (multi-instance) objects
  ],
  declarations: [ AppComponent, Menu_topoComponent
  /*,
  
    PolymerElement('paper-checkbox'),
    PolymerElement('paper-dialog'),
    PolymerElement('paper-icon-button'),
    PolymerElement('paper-input'),
    PolymerElement('paper-textarea'),
    PolymerElement('paper-toast'),
    PolymerElement('chart-element'),
    PolymerElement('vaadin-combo-box'),
    PolymerElement('vaadin-date-picker'),
    PolymerElement('vaadin-grid'),
    PolymerElement('vaadin-upload')*/ ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { 
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppModule);
  }
}