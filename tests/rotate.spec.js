const expect = require('chai').expect
const move = require('../src/rotate');

describe('rotate', function() {

  describe('left', function() {

    it('should rotate west when facing north', function() {
      let result = move.left({ x: 0, y: 0, face: 'NORTH'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'WEST'});
    });

    it('should rotate south when facing west', function() {
      let result = move.left({ x: 0, y: 0, face: 'WEST'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'SOUTH'});
    });

    it('should rotate east when facing south', function() {
      let result = move.left({ x: 0, y: 0, face: 'SOUTH'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'EAST'});
    });

    it('should rotate north when facing east', function() {
      let result = move.left({ x: 0, y: 0, face: 'EAST'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'NORTH'});
    });
  
  });
});