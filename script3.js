console.log("Salut, bienvenue dans ma super pyramide !");

let etages = prompt("Combien d'étages veux-tu ?");

etages = Number(etages);

if (isNaN(etages)){
  console.log("Merci d'entrer un nombre positif !");
} else {
  for (let i = 1; i <= etages; i++) {
    let espaces = " ".repeat(etages - i);
    let dies = "#".repeat(i);

    console.log(espaces + dies);
  }
}
