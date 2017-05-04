import { test } from 'qunit';
import { moduleFor } from 'ember-qunit';
import MapboxDraw from 'mapbox-gl-draw';

moduleFor('helper:draw-control', 'Unit | Helper | draw control', {
  needs: [
    'config:environment'
  ]
});

// Replace this with your real tests.
test('it should create a mapbox-gl-draw control', function(assert) {
  let result = this.subject().compute();
  assert.ok(result instanceof MapboxDraw, 'is a mapbox-gl-draw control');
});

