'use strict';

angular.module('myApp.version', [
  'burning_tides_app.version.interpolate-filter',
  'burning_tides_app.version.version-directive'
])

.value('version', '0.1');
