// Exo 3 factorielle

const Number = parseInt(prompt("Entrez un nombre :"));
// console.log(`On recupere bien le nombre: ${Nombre}`);

if (Number % 1 === 0){
    let factorielle = 1;
    if (Number === 1) {
        console.log("Le factoriel de 1 c'est 1 !")
    }

    else if (Number > 1) {
        let i = 1
        while (i <= Number) {
            factorielle *= i;
            i++;
        }
    console.log(`Le factoriel de ${Number} est ${factorielle} !`);
  }
  else {
    console.log("Le nombre doit être positif et superieur a 1 pour calculer la factorielle.");
  }

}