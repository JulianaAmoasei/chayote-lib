const assert = require('assert');
const retornaExtenso = require('./index');

describe('retornaExtenso()', function() {
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(0), 'zero');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(1), 'um');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(10), 'dez');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(11), 'onze');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(19), 'dezenove');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(20), 'vinte');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(21), 'vinte e um');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(50), 'cinquenta');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(55), 'cinquenta e cinco');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(99), 'noventa e nove');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(100), 'cem');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(101), 'cento e um');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(110), 'cento e dez');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(116), 'cento e dezesseis');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(120), 'cento e vinte');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(134), 'cento e trinta e quatro');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(200), 'duzentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(201), 'duzentos e um');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(210), 'duzentos e dez');
  });});
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(217), 'duzentos e dezessete');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(240), 'duzentos e quarenta');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(288), 'duzentos e oitenta e oito');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(300), 'trezentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(400), 'quatrocentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(500), 'quinhentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(600), 'seiscentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(999), 'novecentos e noventa e nove');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(1000), 'um mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(1001), 'um mil e um');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(2000), 'dois mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(20000), 'vinte mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(99999), 'noventa e nove mil novecentos e noventa e nove');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(100000), 'cem mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(110000), 'cento e dez mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(999999), 'novecentos e noventa e nove mil novecentos e noventa e nove');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(1000200), 'um milhão e duzentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(1000220), 'um milhão duzentos e vinte');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(1110000), 'um milhão cento e dez mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(2140000), 'dois milhões cento e quarenta mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(retornaExtenso(999999999), 'novecentos e noventa e nove milhões novecentos e noventa e nove mil novecentos e noventa e nove');
  });

