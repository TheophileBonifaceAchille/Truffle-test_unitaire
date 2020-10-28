const { contract } = require('@openzeppelin/test-environment');

const { BN, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

const Multiplier = contract.fromArtifact('Multiplier');
const Divisor = contract.fromArtifact('Divisor');

describe('Multiplier', () => {
  beforeEach(async function () {
    this.multiplier = await Multiplier.new();
  });

  it('multiplies numbers', async function () {
    expect(await this.multiplier.mul(1, 3)).to.be.bignumber.equal(new BN(3));
  });
});

describe('Divisor', () => {
  beforeEach(async function () {
    this.divisor = await Divisor.new();
  });

  it('divides numbers nb1 / nb2', async function () {
    expect(await this.divisor.div(100, 50)).to.be.bignumber.equal(new BN(2));
  });

  it('reverts when nb2 = 0', async function () {
    await expectRevert(
      this.divisor.div(10, 0),
      'Divisor: can not divide by 0',
    );
  });
})
;
