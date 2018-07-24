const Park = function(name, price){
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
  const index = this.dinosaurs.indexOf(dinosaur);

  if(index !== -1){
    dinosaurs.splice(index, 1);
  }
}

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
}


module.exports = Park;

// Park.prototype.findMostPopularDinosaur = function(){
//   result = null;
//   highest_count = 0;
//   for (dinosaur of this.dinosaurs){
//     if (dinosaur.guestsAttractedPerDay > highest_count){
//       highest_count = dinosaur.guestsAttractedPerDay;
//       result = dinosaur;
//     }
//   }
//   return result;
// }
