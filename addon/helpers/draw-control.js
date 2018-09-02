import { assign } from '@ember/polyfills';
import { getOwner } from '@ember/application';
import Helper from '@ember/component/helper';
import MapboxDraw from '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw';

export default Helper.extend({
  compute(params, config) {
    const globalConfig = getOwner(this).resolveRegistration('config:environment')['mapbox-gl-draw'];

    const mergedConfig = assign({}, globalConfig, config);

    if (config && 'controls' in config && globalConfig && 'controls' in globalConfig) {
      mergedConfig.controls = assign({}, config.controls, globalConfig.controls);
    }

    return new MapboxDraw(mergedConfig);
  }
});
