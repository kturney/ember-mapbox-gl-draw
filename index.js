'use strict';

const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const Path = require('path');

module.exports = {
  name: require('./package').name,

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

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('app/styles/mapbox-gl-draw.css');
  }
};
