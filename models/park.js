const Park = function(name, price){
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  const index = this.dinosaurs.indexOf(dinosaur);

  if(index !== -1){
    this.dinosaurs.splice(index, 1);
  }
};

Park.prototype.findMostPopularDinosaur = function(){
result = null;
highest_value = 0;
for (dinosaur of this.dinosaurs){
  if(dinosaur.guestsAttractedPerDay > highest_value){
    highest_value = dinosaur.guestsAttractedPerDay;
    result = dinosaur;
  }
}
return result;
};

Park.prototype.findBySpecies = function(species){
  result = [];
  for(dinosaur of this.dinosaurs){
    if(dinosaur.species === species){
      result.push(dinosaur);
    }
  }
  return result;
};

Park.prototype.removeAllOfSpecies = function(species) {
  foundDinosaurs = this.findBySpecies(species);
  for (let dinosaurToDelete of foundDinosaurs){
    this.removeDinosaur(dinosaurToDelete);
  }
};

Park.prototype.calculateVisitorsPerDay = function(){
visitorsPerDay = 0;
for(let dinosaur of this.dinosaurs){
  visitorsPerDay += dinosaur.guestsAttractedPerDay;
}
return visitorsPerDay;
}

Park.prototype.calculateVisitorsPerYear = function(){
    return this.calculateVisitorsPerDay() * 365;
}

Park.prototype.calculateRevenuePerYear = function(){
  return this.calculateVisitorsPerYear() * this.price;
}


module.exports = Park;
