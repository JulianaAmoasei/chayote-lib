# Conversor de números v.1.0.0

**Esta biblioteca se destina à conversão de números em extenso, para uso em aplicações web.**
Na versão atual é capaz de converter números de 0 a 999999999 para seus equivalentes em extenso, com letras minúsculas.


## Os métodos utilizados na biblioteca são:

#### **returnsWritten(num);**

Exemplo de uso:

```
$node
> let convert = require("chayote-lib")
> convert(1); //'um'
```
banana

## versão 1.0.0

- funcionalidades: conversão de números de 0 a 999999999;
- conversão para texto em português brasileiro, com letras minúsculas.


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install chayote-lib`


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
