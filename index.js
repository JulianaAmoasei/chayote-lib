const hundreds = {
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

const unitaries = {
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

const dozens = {
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

const elevenToNineteen = {
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

function returnsWritten(num){
  if (num === 0){
    return "zero";
  }
  return returnsMillion(num) + returnsMillions(num) + returnsFullHundred(num);
}

function returnsFullHundred(num){
  return returnsHundreds(num) + returnsDozens(num);
}

function returnsHundreds(num){
  let hundred = parseInt(num % 1000 / 100);
  let dozen = num % 100;

  if ((num % 1000) === 0) {
    return "";
  }
  let preNum = "";
  if (((num % 100) === 0) && (num > 1000)) {
    preNum = "e ";
  }
  if ((num % 100) === 0 && hundred === 1){
    return preNum + "cem";
  }
  let betweenNumbers = " e ";
  if ((dozen === 0) || (num < 100)){
    betweenNumbers = "";
  }
  return preNum + hundreds[hundred] + betweenNumbers;
}

function returnsMillions(num){
  if (num === 1000){
    return "um mil";
  }
  if ((num >= 1000) && (num % 1000000 > 1000)){
    let betweenNumbers = "";
    if (num % 1000 !== 0){
      betweenNumbers = " ";
    }
    return returnsFullHundred(parseInt(num / 1000)) + " mil" + betweenNumbers;
  } else {
    return "";
  }
}

function returnsMillion(num){
  if (num >= 1000000 && num < 2000000){
    return returnsFullHundred(parseInt(num / 1000000)) + " milhão ";
  } 
  else if (num >= 2000000){
    return returnsFullHundred(parseInt(num / 1000000)) + " milhões ";
  } else {
    return "";
  }  
}

function returnsDozens(num){
  let number = num % 100;
  let unitary = number % 10;
  let dozen = parseInt(number % 100 / 10);

  if (number >= 1 && number <= 9){
    return unitaries[number];
  }

  if (number >= 11 && number <= 19){
    return elevenToNineteen[number];
  } 
  let betweenNumbers = " e ";
  if (unitary === 0){
    betweenNumbers = "";
  }
  return dozens[dozen] + betweenNumbers + unitaries[unitary];  
}

module.exports = returnsWritten;