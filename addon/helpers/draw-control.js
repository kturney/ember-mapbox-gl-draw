import { assign } from '@ember/polyfills';
import { getOwner } from '@ember/application';
import Helper from '@ember/component/helper';
import MapboxDraw from 'mapbox-gl-draw';

export default Helper.extend({
  compute(params, hash) {
    const globalConfig = getOwner(this).resolveRegistration('config:environment')['mapbox-gl-draw'];

    return new MapboxDraw(assign({}, globalConfig, hash));
  }
});
