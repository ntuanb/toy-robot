const expect = require('chai').expect
const app = require('../src/app');

describe('app', function() {

  it('should perform example A with expected results', function() {
    app.run('PLACE 0,0,NORTH');
    app.run('MOVE');

    expect(app.run('REPORT')).to.deep.equal({ x: 0, y: 1, face: 'NORTH' });
  });

  it('should perform example B with expected results', function() {
    app.run('PLACE 0,0,NORTH');
    app.run('LEFT');

    expect(app.run('REPORT')).to.deep.equal({ x: 0, y: 0, face: 'WEST' });
  });

  it('should perform example C with expected results', function() {
    app.run('PLACE 1,2,EAST');
    app.run('MOVE');
    app.run('MOVE');
    app.run('LEFT');
    app.run('MOVE');

    expect(app.run('REPORT')).to.deep.equal({ x: 3, y: 3, face: 'NORTH' });
  });

});
