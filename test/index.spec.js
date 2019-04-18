/*eslint-disable */

const assert = require('chai').assert;
const returnsWritten = require('../index');

describe('returnsWritten()', () => {
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(0), 'zero');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(1), 'um');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(10), 'dez');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(11), 'onze');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(19), 'dezenove');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(20), 'vinte');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(21), 'vinte e um');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(50), 'cinquenta');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(55), 'cinquenta e cinco');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(99), 'noventa e nove');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(100), 'cem');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(101), 'cento e um');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(110), 'cento e dez');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(116), 'cento e dezesseis');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(120), 'cento e vinte');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(134), 'cento e trinta e quatro');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(200), 'duzentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(201), 'duzentos e um');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(210), 'duzentos e dez');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(217), 'duzentos e dezessete');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(240), 'duzentos e quarenta');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(288), 'duzentos e oitenta e oito');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(300), 'trezentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(400), 'quatrocentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(500), 'quinhentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(600), 'seiscentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(999), 'novecentos e noventa e nove');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(1000), 'um mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(1001), 'um mil e um');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(2000), 'dois mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(20000), 'vinte mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(99999), 'noventa e nove mil novecentos e noventa e nove');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(100000), 'cem mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(110000), 'cento e dez mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(999999), 'novecentos e noventa e nove mil novecentos e noventa e nove');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(1000200), 'um milhão e duzentos');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(1000220), 'um milhão duzentos e vinte');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(1110000), 'um milhão cento e dez mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(2140000), 'dois milhões cento e quarenta mil');
  });
  it('deve retornar por extenso', () => {
    assert.equal(returnsWritten(999999999), 'novecentos e noventa e nove milhões novecentos e noventa e nove mil novecentos e noventa e nove');
  });
});
