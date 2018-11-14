const chai = require('chai');
global.assert = chai.assert;

describe('the test suite', function() {
  it('always passes', function() {
    assert.isTrue(true);
  })

  it('fails if LOOK_A_FAILURE is set', function() {
    assert.strictEqual(process.env.LOOK_A_FAILURE || '', '');
  })

  it('fails sporadically if FLAKE_IT_GOOD is set', function() {
    if (process.env.FLAKE_IT_GOOD && Math.random() > 0.5) {
      assert.isFalse(true, 'oh no a flake');
    } else {
      assert.isTrue(true);
    }
  })
})
