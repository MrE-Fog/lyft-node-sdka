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
    instance = new lyft.VehicleDetail();
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

  describe('VehicleDetail', function() {
    it('should create an instance of VehicleDetail', function() {
      // uncomment below and update the code to test VehicleDetail
      //var instane = new lyft.VehicleDetail();
      //expect(instance).to.be.a(lyft.VehicleDetail);
    });

    it('should have the property make (base name: "make")', function() {
      // uncomment below and update the code to test the property make
      //var instane = new lyft.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instane = new lyft.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property year (base name: "year")', function() {
      // uncomment below and update the code to test the property year
      //var instane = new lyft.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property licensePlate (base name: "license_plate")', function() {
      // uncomment below and update the code to test the property licensePlate
      //var instane = new lyft.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property licensePlateState (base name: "license_plate_state")', function() {
      // uncomment below and update the code to test the property licensePlateState
      //var instane = new lyft.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new lyft.VehicleDetail();
      //expect(instance).to.be();
    });

    it('should have the property imageUrl (base name: "image_url")', function() {
      // uncomment below and update the code to test the property imageUrl
      //var instane = new lyft.VehicleDetail();
      //expect(instance).to.be();
    });

  });

}));
