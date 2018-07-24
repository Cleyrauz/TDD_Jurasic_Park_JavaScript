const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let park;

  beforeEach(function () {
    park = new Park('Jurasic World', 100);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurasic World');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs');

  xit('should be able to add a dinosaur to its collection');

  xit('should be able to remove a dinosaur from its collection');

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');

});
