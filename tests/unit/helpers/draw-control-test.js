import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import MapboxDraw from 'mapbox-gl-draw';

module('Unit | Helper | draw control', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it should create a mapbox-gl-draw control', function(assert) {
    let result = this.owner.lookup('helper:draw-control').compute();
    assert.ok(result instanceof MapboxDraw, 'is a mapbox-gl-draw control');
  });
});

