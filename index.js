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

  treeForStyles(tree) {
    const mapboxGlTree = new Funnel(Path.dirname(require.resolve('@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js')), {
      files: [ 'mapbox-gl-draw.css' ],
      destDir: 'app/styles'
    });

    if (tree) {
      return new MergeTrees([ tree, mapboxGlTree ]);
    }

    return mapboxGlTree;
  },

  treeForVendor(vendorTree) {
    const mapboxGlDrawTree = new Funnel(Path.dirname(require.resolve('@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js')), {
      files: [ 'mapbox-gl-draw.js' ],
    });

    if (vendorTree) {
      return new MergeTrees([ vendorTree, mapboxGlDrawTree ]);
    }

    return mapboxGlDrawTree;
  },

  included(app) {
    this._super.included(...arguments);

    app.import('vendor/mapbox-gl-draw.js', {
      using: [
        { transformation: 'amd', as: 'mapbox-gl-draw' }
      ]
    });

    app.import('app/styles/mapbox-gl-draw.css');
  }
};
