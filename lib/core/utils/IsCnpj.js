const IsCnpj = function( cnpj ){
	if( !cnpj ){
		return false;
  }

	// Retorna só os números
  cnpj = String(cnpj);
	cnpj = cnpj.replace(/[^0-9]/g, '');

	/**
	 * CNPJ tem 14 digitos, verifica se não é 14.
	 * Verifica se foi informada uma sequência de digitos repetidos.
	 */
	if( cnpj.length != 14 || cnpj.match('/(\d)\1{13}/') ){
    return false;
  }
	/**
	 * Calculo para validar o CNPJ
	 */
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0,tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;

    if (pos < 2){
      pos = 9;
    }
  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

  if (resultado != digitos.charAt(0)){
    return false;
  }
       
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

  if (resultado != digitos.charAt(1)){
    return false;
  }
         
  return true;

}

module.exports = { IsCnpj };
module.exports.default = IsCnpj;
