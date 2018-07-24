const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let park;
    let dinosaur;
    let dinosaur2;
    let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurasic World', 100);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 30);
    dinosaur3 = new Dinosaur('long neck', 'herbivorous', 100);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurasic World');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findMostPopularDinosaur();
    assert.strictEqual(actual, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findBySpecies('t-rex')
    assert.deepStrictEqual(actual, [dinosaur, dinosaur2]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeAllOfSpecies('t-rex');
    const actual = park.dinosaurs.length;
    assert.deepStrictEqual(actual, 1);
  });

  it('should calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.calculateVisitorsPerDay();
    assert.strictEqual(actual, 180);
  })

  it('Calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.calculateVisitorsPerYear();
    assert.strictEqual(actual, 65700);
  })

});
