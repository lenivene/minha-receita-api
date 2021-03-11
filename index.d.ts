export type CnpjNumber = string | number;
export type QSAType = {
  cnpj: string,
  identificador_de_socio: number,
  nome_socio: string,
  cnpj_cpf_do_socio: string,
  codigo_qualificacao_socio: number,
  percentual_capital_social: number,
  data_entrada_sociedade: string,
  cpf_representante_legal: string,
  nome_representante_legal: string,
  codigo_qualificacao_representante_legal: number
}

export type CnaesSecundariasType = {
  codigo: number,
  descricao: string
}

export interface MinhaReceitaData {
  cnpj: string,
  identificador_matriz_filial: number,
  descricao_matriz_filial: string,
  razao_social: string,
  nome_fantasia: string,
  situacao_cadastral: number,
  descricao_situacao_cadastral: string,
  data_situacao_cadastral: string,
  motivo_situacao_cadastral: number,
  nome_cidade_exterior: string,
  codigo_natureza_juridica: number,
  data_inicio_atividade: string,
  cnae_fiscal: number,
  cnae_fiscal_descricao: string,
  descricao_tipo_logradouro: string,
  logradouro: string,
  numero: string,
  complemento: string,
  bairro: string,
  cep: string,
  uf: string,
  codigo_municipio: number,
  municipio: string,
  ddd_telefone_1: string,
  ddd_telefone_2: string,
  ddd_fax: string,
  qualificacao_do_responsavel: number,
  capital_social: number,
  porte: number,
  descricao_porte: string,
  opcao_pelo_simples: boolean,
  data_opcao_pelo_simples: string,
  data_exclusao_do_simples: null | string,
  opcao_pelo_mei: boolean,
  situacao_especial: string,
  data_situacao_especial: null | string,
  qsa: Array<QSAType>,
  cnaes_secundarias: Array<CnaesSecundariasType>
}

declare module "minha-receita-api"{
  export default class MinhaReceita{
    constructor(cnpj: PicPayConfig);

    get(): Promise<MinhaReceitaData>
  }
}
