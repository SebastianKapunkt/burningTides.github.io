'use strict';

describe('burning_tides_app.version module', function() {
  beforeEach(module('burning_tides_app.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
