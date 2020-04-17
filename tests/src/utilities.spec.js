const expect = require('chai').expect
const utilities = require('../../src/utilities.js');

describe('utilities', function() {

  describe('report', function() {

    it('should report as expected', function() {
      let result = utilities.report({ x: 1, y: 0, face: 'NORTH'});
    
      expect(result).to.equal('1,0,NORTH');
    });

  });

  describe('isPositioned', function() {

    it('should return false when x is null', function() {
      let result = utilities.isPositioned({ x: null, y: 0, face: 'NORTH'});
    
      expect(result).to.deep.equal(false);
    });

    it('should return false when y is null', function() {
      let result = utilities.isPositioned({ x: 0, y: null, face: 'NORTH'});
    
      expect(result).to.deep.equal(false);
    });

    it('should return false when face is null', function() {
      let result = utilities.isPositioned({ x: 0, y: 0, face: null});
    
      expect(result).to.deep.equal(false);
    });

    it('should return true when all values are set', function() {
      let result = utilities.isPositioned({ x: 0, y: 0, face: 'NORTH'});
    
      expect(result).to.deep.equal(true);
    });
  
  });
});