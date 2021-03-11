<div align="center">
    <img alt="Logo" title="Minha Receita" width="100%" style="max-width:700px;" src="https://docs.minhareceita.org/minha-receita.svg">
    <br><br>
    <h1 style="border:0;font-weight:bold;text-transform:uppercase;margin:0">Minha Receita</h1>
    <b>Consulta de informações do CNPJ</b>
</div>

# 📔 Indíce

- [📔 Indíce](#-indíce)
- [📖 Sobre](#-sobre)
- [📚 Como usar?](#-como-usar)
- [📝 License](#-license)

# 📖 Sobre

O _Minha Receita_ é uma API desenvolvido por [Eduardo Cuducos](https://github.com/cuducos) e aqui é um modulo para facilitar o uso dessa api.

# 📚 Como usar?

```ts
import MinhaReceita from "minha-receita-api";

const minhareceita = new MinhaReceita('06.990.590/0001-23');

minhareceita.get().then(cnpj => {
  console.log(cnpj);
})
.catch(error => {
  console.log(error);
})
```

# 📝 License

This project is under the MIT license.
