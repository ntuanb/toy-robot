const expect = require('chai').expect
const rotate = require('../../src/rotate.js');

describe('rotate', function() {

  describe('left', function() {

    it('should rotate west when facing north', function() {
      let result = rotate.left({ x: 0, y: 0, face: 'NORTH'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'WEST'});
    });

    it('should rotate south when facing west', function() {
      let result = rotate.left({ x: 0, y: 0, face: 'WEST'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'SOUTH'});
    });

    it('should rotate east when facing south', function() {
      let result = rotate.left({ x: 0, y: 0, face: 'SOUTH'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'EAST'});
    });

    it('should rotate north when facing east', function() {
      let result = rotate.left({ x: 0, y: 0, face: 'EAST'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'NORTH'});
    });
  
  });

  describe('right', function() {

    it('should rotate east when facing north', function() {
      let result = rotate.right({ x: 0, y: 0, face: 'NORTH'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'EAST'});
    });

    it('should rotate south when facing east', function() {
      let result = rotate.right({ x: 0, y: 0, face: 'EAST'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'SOUTH'});
    });

    it('should rotate west when facing south', function() {
      let result = rotate.right({ x: 0, y: 0, face: 'SOUTH'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'WEST'});
    });

    it('should rotate north when facing west', function() {
      let result = rotate.right({ x: 0, y: 0, face: 'WEST'});
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'NORTH'});
    });
  
  });

  describe('multiple', function() {

    it('should rotate right back to north when done 4 times', function() {
      let result = { x: 0, y: 0, face: 'NORTH'};

      result = rotate.right(result);
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'EAST'});

      result = rotate.right(result);
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'SOUTH'});

      result = rotate.right(result);

      expect(result).to.deep.equal({ x: 0, y: 0, face: 'WEST'});

      result = rotate.right(result);

      expect(result).to.deep.equal({ x: 0, y: 0, face: 'NORTH'});
    });

    it('should rotate left back to north when done 4 times', function() {
      let result = { x: 0, y: 0, face: 'NORTH'};

      result = rotate.left(result);
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'WEST'});

      result = rotate.left(result);
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'SOUTH'});

      result = rotate.left(result);

      expect(result).to.deep.equal({ x: 0, y: 0, face: 'EAST'});

      result = rotate.left(result);

      expect(result).to.deep.equal({ x: 0, y: 0, face: 'NORTH'});
    });
  
  });
});