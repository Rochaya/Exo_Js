const NumberStage = parseInt(prompt("Entrez le nombre d'étages souhaité pour cette pyramide :"));

if (NumberStage <= 0) {
  console.log("Veuillez choisir un nombre d'étages valide, il faut un minimum d'un étage.");
} else {
  let i = 1;

  while (i <= NumberStage) {
    let ligne = "";
    let j = 1;

    while (j <= NumberStage - i) {
      ligne += " ";
      j++;
    }

    let k = 1;

    while (k <= i) {
      ligne += "#";
      k++;
    }

    console.log(ligne);
    i++;
  }
}

