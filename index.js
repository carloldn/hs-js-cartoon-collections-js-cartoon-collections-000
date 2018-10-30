<<<<<<< HEAD
function dwarfRollCall(dwarves) {
 let dwarfList = [];
  for(let i = 0; i < dwarves.length;i++){
     dwarfList.push((i + 1) + ". "+ dwarves[i] + " ");        
  }
   return dwarfList.join ('');
}

function summonCaptainPlanet(planeteerCalls){
  const captain =[] ;
  for( let i = 0; i < planeteerCalls.length;i++){
    captain.push(planeteerCalls[i].toUpperCase() + "!");
  }return captain;
}

function longPlaneteerCalls(words) {
  let list = true;
  if (words.length > 4) {
    return list;
} else {
    return false;
  }
}

function findTheCheese (foods) {
  let cheese =['cheddar','gouda','camembert','emmenthal'];
  for(var i = 0; i < foods.length; i++){
    for(var j = 0; j < cheese.length; j++){
      if(cheese[j] === foods[i]){
        return foods[i];
        
      }
    }
  }
  return 'no cheese!';

}
=======
function dwarfRollCall(dwarves) { 
  let dwarvesList = ['Doc', 'Dopey', 'Bashful', 'Grumpy'];
  for(let i = 0; i < dwarvesList.length;i++){
     dwarves.push((i + 1) + ". "+  dwarves[i]);         
  }
   dwarvesList.join();


}


function summonCaptainPlanet(planeteerCalls){
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
>>>>>>> 410ec2151cdb283a62efdf643522be9aabaf02df

function wordswithB (words) {
  
}

