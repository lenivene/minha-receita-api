const MinhaReceita = require('./core/MinhaReceitaApi');

const minhareceita = MinhaReceita;

module.exports = minhareceita;

// Allow use of default import syntax in TypeScript
module.exports.default = minhareceita;
