const axios = require("axios");
const { IsCnpj } = require("./utils/isCnpj");

function MinhaReceitaApi(cnpj) {
  this.baseUrl = "https://minhareceita.org";
  this.api = axios.create({ baseURL: this.baseUrl });

  const isCnpj = IsCnpj(cnpj);

  if (!isCnpj) {
    throw new Error("Preencha CNPJ valido!");
  }

  this.cnpj = cnpj;

  return this;
}

MinhaReceitaApi.prototype.get = async function get() {
  try {
    const { data } = await this.api.get(this.cnpj);

    return data;
  } catch (error) {
    if (error && error.response && error.response.status) {
      return error.response.data;
    }

    return {
      message: "Error desconhecido",
    };
  }
};

module.exports = MinhaReceitaApi;
