const {expect} = require('chai');
const sort = require('./index');

describe('insertion sort', () => {
  it('case [3, 2, 1]', () => {
    expect(sort([3, 2, 1])).to.eql([1, 2, 3]);
  });
  it('case [7, 9, 3, 5, 1, 2, 8, 4, 6]', () => {
    expect(sort([7, 9, 3, 5, 1, 2, 8, 4, 6])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it('case [3, 3, 4, 5, 1, 2, 2]', () => {
    expect(sort([3, 3, 4, 5, 1, 2, 2])).to.eql([1, 2, 2, 3, 3, 4, 5]);
  });
});