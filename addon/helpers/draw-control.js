import Ember from 'ember';
import MapboxDraw from 'mapbox-gl-draw';

const {
  assign,
  getOwner,
  Helper
} = Ember;

export default Helper.extend({
  compute(params, hash) {
    const globalConfig = getOwner(this).resolveRegistration('config:environment')['mapbox-gl-draw'];

    return new MapboxDraw(assign({}, globalConfig, hash));
  }
});
