const expect = require('chai').expect
const move = require('../src/move');

describe('move', function() {

  describe('move from 0,0', function() {

    it('should move 1 space in the expected direction when facing north', function() {
      let result = move.move({ x: 0, y: 0, face: 'NORTH'});
    
      expect(result).to.deep.equal({ x: 0, y: 1, face: 'NORTH'});
    });

    it('should remain when at 5 and facing north', function() {
      let result = move.move({ x: 0, y: 5, face: 'NORTH'});
    
      expect(result).to.deep.equal({ x: 0, y: 5, face: 'NORTH'});
    });

    it('should move 1 space in the expected direction when facing east', function() {
      let result = move.move({ x: 0, y: 0, face: 'EAST'});
    
      expect(result).to.deep.equal({ x: 1, y: 0, face: 'EAST'});
    });

    it('should move 1 space in the expected direction when facing south', function() {
      let result = move.move({ x: 0, y: 0, face: 'SOUTH'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'SOUTH'});
    });

    it('should remain when at 0 and facing south', function() {
      let result = move.move({ x: 0, y: 0, face: 'SOUTH'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'SOUTH'});
    });

    it('should move 1 space in the expected direction when facing west', function() {
      let result = move.move({ x: 0, y: 0, face: 'WEST'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'WEST'});
    });
  
  });

});


