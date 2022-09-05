const {expect} = require('chai');
const findPeakElement = require('./index');

describe('peak-finder', () => {
  it('case [5]', () => {
    expect(findPeakElement([5])).to.equal(0);
  });

  it('case [1, 2, 1]', () => {
    expect(findPeakElement([1, 2, 1])).to.equal(1);
  });

  it('case [1, 2, 3, 2, 1]', () => {
    expect(findPeakElement([1, 2, 3, 2, 1])).to.equal(2);
  });

  it('case [1, 2, 3, 2]', () => {
    expect(findPeakElement([1, 2, 3, 2])).to.equal(2);
  });

  it('case [1, 4, 3, 2, 1, 3]', () => {
    expect(findPeakElement([1, 4, 3, 2, 1, 3])).to.equal(1);
  });
});