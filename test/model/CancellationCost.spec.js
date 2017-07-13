/**
 * Lyft API
 * Drive your app to success with Lyft's API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api-support@lyft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.lyft);
  }
}(this, function(expect, lyft) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new lyft.CancellationCost();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CancellationCost', function() {
    it('should create an instance of CancellationCost', function() {
      // uncomment below and update the code to test CancellationCost
      //var instane = new lyft.CancellationCost();
      //expect(instance).to.be.a(lyft.CancellationCost);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new lyft.CancellationCost();
      //expect(instance).to.be();
    });

    it('should have the property tokenDuration (base name: "token_duration")', function() {
      // uncomment below and update the code to test the property tokenDuration
      //var instane = new lyft.CancellationCost();
      //expect(instance).to.be();
    });

  });

}));
