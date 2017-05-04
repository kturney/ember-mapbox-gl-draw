/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const Path = require('path');

module.exports = {
  name: 'ember-mapbox-gl-draw',

  treeForPublic(vendorTree) {
    const mapboxGlDrawTree = new Funnel(Path.dirname(require.resolve('@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js')), {
      srcDir: '/svg',
      destDir: '/assets/images'
    });

    if (vendorTree) {
      return new MergeTrees([ vendorTree, mapboxGlDrawTree ]);
    }

    return mapboxGlDrawTree;
  },

  treeForVendor(vendorTree) {
    const mapboxGlDrawTree = new Funnel(Path.dirname(require.resolve('@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js')), {
      files: [ 'mapbox-gl-draw.js', 'mapbox-gl-draw.css' ],
    });

    if (vendorTree) {
      return new MergeTrees([ vendorTree, mapboxGlDrawTree ]);
    }

    return mapboxGlDrawTree;
  },

  included() {
    this._super.included(...arguments);

    this.import('vendor/mapbox-gl-draw.js', {
      using: [
        { transformation: 'amd', as: 'mapbox-gl-draw' }
      ]
    });

    this.import('vendor/mapbox-gl-draw.css');
  }
};
