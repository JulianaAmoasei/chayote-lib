const centenas = {
  0: "",
  1: "cento",
  2: "duzentos",
  3: "trezentos",
  4: "quatrocentos",
  5: "quinhentos",
  6: "seiscentos",
  7: "setecentos",
  8: "oitocentos",
  9: "novecentos",
};

const unidades = {
  0: "",
  1: "um",
  2: "dois",
  3: "três",
  4: "quatro",
  5: "cinco",
  6: "seis",
  7: "sete",
  8: "oito",
  9: "nove"
};

const dezenas = {
  0: "",
  1: "dez",
  2: "vinte",
  3: "trinta",
  4: "quarenta",
  5: "cinquenta",
  6: "sessenta",
  7: "setenta",
  8: "oitenta",
  9: "noventa",
};

const onzeDezenove = {
  0: "",
  11: "onze",
  12: "doze",
  13: "treze",
  14: "quatorze",
  15: "quinze",
  16: "dezesseis",
  17: "dezessete",
  18: "dezoito",
  19: "dezenove",
};

function retornaExtenso(num){
  if (num === 0){
    return "zero";
  }
  return retornaMilhao(num) + retornaMilhar(num) + retornaCentenaInteira(num);
}

function retornaCentenaInteira(num){
  return retornaCentenas(num) + retornaDezenas(num);
}

function retornaCentenas(num){
  let centena = parseInt(num % 1000 / 100);
  let dezena = num % 100;

  if ((num % 1000) === 0) {
    return "";
  }
  let preNum = "";
  if (((num % 100) === 0) && (num > 1000)) {
    preNum = "e ";
  }
  if ((num % 100) === 0 && centena === 1){
    return preNum + "cem";
  }
  let complemento = " e ";
  if ((dezena === 0) || (num < 100)){
    complemento = "";
  }
  return preNum + centenas[centena] + complemento;
}

function retornaMilhar(num){
  if (num === 1000){
    return "um mil";
  }
  if ((num >= 1000) && (num % 1000000 > 1000)){
    let complemento = "";
    if (num % 1000 !== 0){
      complemento = " ";
    }
    return retornaCentenaInteira(parseInt(num / 1000)) + " mil" + complemento;
  } else {
    return "";
  }
}

function retornaMilhao(num){
  if (num >= 1000000 && num < 2000000){
    return retornaCentenaInteira(parseInt(num / 1000000)) + " milhão ";
  } 
  else if (num >= 2000000){
    return retornaCentenaInteira(parseInt(num / 1000000)) + " milhões ";
  } else {
    return "";
  }  
}

function retornaDezenas(num){
  let numero = num % 100;
  let unidade = numero % 10;
  let dezena = parseInt(numero % 100 / 10);

  if (numero >= 1 && numero <= 9){
    return unidades[numero];
  }

  if (numero >= 11 && numero <= 19){
    return onzeDezenove[numero];
  } 
  let complemento = " e ";
  if (unidade === 0){
    complemento = "";
  }
  return dezenas[dezena] + complemento + unidades[unidade];  
}

module.exports = retornaExtenso;