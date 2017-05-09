/*jshint esversion: 6*/
let { expect }     = require("chai");
let LetterSequence = require('../src/sequencer');
//const letterSequence = new LetterSequence(); // los metodos estaticos solo se llaman con
// el nombre de la clase expect(letterSequence.create... ) no funciona

describe('LetterSequence', function() {
  describe('createSequence()', function() {
    it('should return the sequence with the count of repetitions in between each character', function() {
      expect(LetterSequence.createSequence("aabbccabbca")).to.equal("2a2b2ca2bca");
    });

    it('should only have a numbered sequence for repeats greater than 1', function(){
      expect(LetterSequence.createSequence("abcd")).to.equal("abcd");
    });
  });

  describe('decodeSequence()', function(){
    it('should return a sequence with repetition count in letters', function() {
      expect(LetterSequence.decodeSequence("2a2b2ca2bca")).to.equal("aabbccabbca");
    });
  });
});
