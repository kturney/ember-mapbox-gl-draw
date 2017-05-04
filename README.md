# ember-mapbox-gl-draw

[![Latest NPM release][npm-badge]][npm-badge-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]

[npm-badge]: https://img.shields.io/npm/v/ember-mapbox-gl-draw.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-mapbox-gl-draw
[travis-badge]: https://img.shields.io/travis/kturney/ember-mapbox-gl-draw/master.svg
[travis-badge-url]: https://travis-ci.org/kturney/ember-mapbox-gl-draw
[ember-observer-badge]: http://emberobserver.com/badges/ember-mapbox-gl-draw.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-mapbox-gl-draw

Ember addon to import the [mapbox-gl-draw control](https://github.com/mapbox/mapbox-gl-draw).
Also provides a helper to create draw controls in templates.

## Installation

```sh
ember install ember-mapbox-gl
```

## Example

```handlebars
{{#mapbox-gl as |map|}}
  {{map.control (draw-control touchEnabled=true) 'top-left'}}
{{/mapbox-gl}}
```

## Notes

Global options for draw controls may also be added to a `mapbox-gl-draw` object in `config/environment.js`.
