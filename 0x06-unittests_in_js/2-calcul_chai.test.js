var chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculate Numbers', function () {
  describe(' add Round', function () {
    it('should return 5', function () {
      chai.expect(calculateNumber('SUM', 1, 4)).to.equal(5);
    });
  });

  describe('add second round ', function () {
    it('should return 6', function () {
      chai.expect(calculateNumber('SUM', 4, 2.4)).to.equal(6);
    });
  });

  describe('SUM both round', function () {
    it('should return 6', function () {
      chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('add first round', function () {
    it('should return 6', function () {
      chai.expect(calculateNumber('SUM', 2.4, 4)).to.equal(6);
    });
  });

  describe('SUBTRACT no round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });
  });

   describe('DIVIDE first round', function () {
    it('should return 5', function () {
      chai.expect(calculateNumber('DIVIDE', 9.5, 2)).to.equal(5);
    });
  });

  describe('DIVIDE second round', function () {
    it('should return 0.2', function () {
      chai.expect(calculateNumber('DIVIDE', 2, 9.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE both round', function () {
    it('should return 0.2', function () {
      chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('SUBTRACT first round', function () {
    it('should return -3', function () {
      chai.expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    });  describe("Tests DIVIDE function W 0:", function(){
        it("Returns 'Error'.", function(){
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
        })
    })
  });

  describe('SUBTRACT second round', function () {
    it('should return 3', function () {
      chai.expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
    });
  });

  describe('SUBTRACT both round', function () {
    it('should return -4', function () {
      chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });
  });

});
