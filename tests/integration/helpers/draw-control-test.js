import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw';

module('Integration | Helper | draw-control', function(hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(function() {
    delete this.owner.resolveRegistration('config:environment')['mapbox-gl-draw'];
  });

  test('it creates a mapbox draw control', async function(assert) {
    this.onControl = (control) => {
      assert.step('onControl');
      assert.ok(control instanceof MapboxDraw, 'is a mapbox-gl-draw control');
    };

    await render(hbs`{{compute onControl (draw-control)}}`);

    assert.verifySteps([
      'onControl'
    ]);
  });

  test('it passes options through to the draw-control', async function(assert) {
    const controlWithDefaults = new MapboxDraw();

    this.keybindings = !controlWithDefaults.options.keybindings;
    this.point = !controlWithDefaults.options.controls.point;
    this.lineString = !controlWithDefaults.options.controls.line_string;

    this.onControl = (control) => {
      assert.step('onControl');
      assert.ok(control instanceof MapboxDraw, 'is a mapbox-gl-draw control');
      assert.equal(
        control.options.keybindings,
        this.keybindings,
        'control.options.keybindings'
      );

      assert.equal(
        control.options.controls.point,
        this.point,
        'control.options.controls.point'
      );

      assert.equal(
        control.options.controls.line_string,
        this.lineString,
        'control.options.controls.line_string'
      );
    };

    await render(hbs`{{compute onControl (draw-control
      keybindings=keybindings
      controls=(hash
        point=point
        line_string=lineString
      )
    )}}`);

    assert.verifySteps([
      'onControl'
    ]);
  });

  test('it passes options through to the draw-control from environment config', async function(assert) {
    const controlWithDefaults = new MapboxDraw();

    const config = {
      keybindings: !controlWithDefaults.options.keybindings,
      controls: {
        point: !controlWithDefaults.options.controls.point,
        line_string: !controlWithDefaults.options.controls.line_string
      }
    };

    this.owner.resolveRegistration('config:environment')['mapbox-gl-draw'] = config;

    this.onControl = (control) => {
      assert.step('onControl');
      assert.ok(control instanceof MapboxDraw, 'is a mapbox-gl-draw control');
      assert.equal(
        control.options.keybindings,
        config.keybindings,
        'control.options.keybindings'
      );

      assert.equal(
        control.options.controls.point,
        config.controls.point,
        'control.options.controls.point'
      );

      assert.equal(
        control.options.controls.line_string,
        config.controls.line_string,
        'control.options.controls.line_string'
      );
    };

    await render(hbs`{{compute onControl (draw-control)}}`);

    assert.verifySteps([
      'onControl'
    ]);
  });

  test('it merges environment and argument options', async function(assert) {
    const controlWithDefaults = new MapboxDraw();

    this.keybindings = controlWithDefaults.options.keybindings;
    this.point = !controlWithDefaults.options.controls.point;

    const config = {
      keybindings: !controlWithDefaults.options.keybindings,
      controls: {
        line_string: !controlWithDefaults.options.controls.line_string
      }
    };

    this.owner.resolveRegistration('config:environment')['mapbox-gl-draw'] = config;

    this.onControl = (control) => {
      assert.step('onControl');
      assert.ok(control instanceof MapboxDraw, 'is a mapbox-gl-draw control');
      assert.equal(
        control.options.keybindings,
        this.keybindings,
        'control.options.keybindings'
      );

      assert.equal(
        control.options.controls.point,
        this.point,
        'control.options.controls.point'
      );

      assert.equal(
        control.options.controls.line_string,
        config.controls.line_string,
        'control.options.controls.line_string'
      );
    };

    await render(hbs`{{compute onControl (draw-control
      keybindings=keybindings
      controls=(hash
        point=point
      )
    )}}`);

    assert.verifySteps([
      'onControl'
    ]);
  });
});
