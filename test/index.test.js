describe('the test suite', function() {
  it('always passes', function() {
    assert.isTrue(true);
  })

  it('fails if LOOK_A_FAILURE is set', function() {
    assert.strictEqual(process.env.LOOK_A_FAILURE || '', '');
  })
})
