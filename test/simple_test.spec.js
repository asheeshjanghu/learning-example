const should = require('should');
var assert = require('chai').assert;
var expect = require('chai').expect;
const fibSequencer = require(`../src/controllers/fibonacci_sequence`);

let n = 5;
describe('Fib num seq', ()=> {
    it('should be equal to 21', function () {
        assert.equal(fibSequencer.nthFib(n), 21);
        expect(fibSequencer.nthFib(n)).to.equal(21);
    });
});