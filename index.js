const writtenHundreds = {
  0: "",
  1: "cento",
  2: "duzentos",
  3: "trezentos",
  4: "quatrocentos",
  5: "quinhentos",
  6: "seiscentos",
  7: "setecentos",
  8: "oitocentos",
  9: "novecentos"
};

const writtenUnitaries = {
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

const writtenDozens = {
  0: "",
  1: "dez",
  2: "vinte",
  3: "trinta",
  4: "quarenta",
  5: "cinquenta",
  6: "sessenta",
  7: "setenta",
  8: "oitenta",
  9: "noventa"
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
  19: "dezenove"
};

function writtenNumber(num) {
  if (num === 0) {
    return "zero";
  }
  return million(num) + millions(num) + fullHundred(num);
}

function fullHundred(num) {
  return hundreds(num) + dozens(num);
}

function hundreds(num) {
  const hundred = parseInt((num % 1000) / 100);
  const dozen = num % 100;

  if (num % 1000 === 0) {
    return "";
  }

  const previousCombination = dozen === 0 && num > 1000 ? "e " : "";
  if (dozen === 0 && hundred === 1) {
    return previousCombination + "cem";
  }

  const betweenNumbers = dozen === 0 || num < 100 ? "" : " e ";
  return previousCombination + writtenHundreds[hundred] + betweenNumbers;
}

function millions(num) {
  if (num === 1000) {
    return "um mil";
  }

  if (num >= 1000 && num % 1000000 > 1000) {
    const betweenNumbers = num % 1000 > 100 ? " " : "";
    return fullHundred(parseInt(num / 1000)) + " mil" + betweenNumbers;
  } else {
    return "";
  }
}

function million(num) {
  const millionValue = parseInt(num / 1000000);

  if (num >= 1000000 && num < 2000000) {
    return fullHundred(millionValue) + " milhão ";
  } else if (num >= 2000000) {
    return fullHundred(millionValue) + " milhões ";
  } else {
    return "";
  }
}

function dozens(num) {
  const number = num % 100;
  const unitary = number % 10;
  const dozen = parseInt((number % 100) / 10);

  if (number >= 1 && number <= 9) {
    return writtenUnitaries[number];
  }

  if (number >= 11 && number <= 19) {
    return elevenToNineteen[number];
  }

  const betweenNumbers = unitary !== 0 ? " e " : "";
  return writtenDozens[dozen] + betweenNumbers + writtenUnitaries[unitary];
}

module.exports = writtenNumber;
