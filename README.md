# Conversor de números v.1.0.2

**Esta biblioteca se destina à conversão de números em extenso, para uso em aplicações web.**
Na versão atual é capaz de converter números de 0 a 999999999 para seus equivalentes em extenso, com letras minúsculas.

## Como instalar:

```shell

$  npm install chayote-lib

```

## Como utilizar:

```node

> const writtenNumber = require("chayote-lib");
> console.log(writtenNumber(10))
> // returns "dez"

```

## roadmap oficial do projeto

#### versão 3.0.0 (sem previsão, aceita-se contribuições)
- implementação da conversão para bilhões e trilhões;
- README translated to english;
- conversão de centavos.

#### versão 2.0.0 (previsão outubro/2018)
- correção de bugs de espaçamento em números acima de 100000;
- implementação da opção "letras maiúsculas ou minúsculas";
- implementação da opção de incluir moeda na conversão.

#### versão 1.0.0 (released)
- funcionalidades: conversão de números de 0 a 999999999.
- conversão para texto em português brasileiro, com letras minúsculas.
