let solution = Math.floor(Math.random()*100 + 1);
console.log(solution);
let compteur = 7;
let reponse;

while(compteur != 0 && reponse != solution){
  console.log("Entrée un chiffre entre 1 et 100 >>>").
  reponse = parseInt(window.prompt());  
  if(reponse != solution){
    console.log("raté!!!");
    compteur--;
  }
  else if(reponse == solution){
    console.log("bravo!!!");
    compteur = 0;
  }
}
console.log("game over!!!")