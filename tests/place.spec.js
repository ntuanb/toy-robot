const expect = require('chai').expect
const place = require('../src/place');

describe('place', function() {

  describe('x', function() {

    it('should discard the position when less than 0', function() {
      let result = place.place(-1, 0, 'NORTH');
    
      expect(result).to.deep.equal({});
    });

    it('should discard the position when larger than 5', function() {
      let result = place.place(6, 0, 'NORTH');
    
      expect(result).to.deep.equal({});
    });

    it('should place the position in a valid spot when between 0 and 5', function() {
      let result = place.place(3, 0, 'NORTH');
    
      expect(result).to.deep.equal({ x: 3, y: 0, face: 'NORTH'});
    });
  
  });

  describe('y', function() {

    it('should discard the position when less than 0', function() {
      let result = place.place(0, -1, 'NORTH');
    
      expect(result).to.deep.equal({});
    });

    it('should discard the position when larger than 5', function() {
      let result = place.place(0, 6, 'NORTH');
    
      expect(result).to.deep.equal({});
    });

    it('should place the position in a valid spot when between 0 and 5', function() {
      let result = place.place(0, 3, 'NORTH');
    
      expect(result).to.deep.equal({ x: 0, y: 3, face: 'NORTH'});
    });
  
  });

  describe('face', function() {

    it('should place the position and point north as expected', function() {
      let result = place.place(0, 0, 'NORTH');
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'NORTH'});
    });
    
    it('should place the position and point east as expected', function() {
      let result = place.place(0, 0, 'EAST');
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'EAST'});
    });
    
    it('should place the position and point south as expected', function() {
      let result = place.place(0, 0, 'SOUTH');
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'SOUTH'});
    });
    
    it('should place the position and point west as expected', function() {
      let result = place.place(0, 0, 'WEST');
    
      expect(result).to.deep.equal({ x: 0, y: 0, face: 'WEST'});
    });
  
  });

});


