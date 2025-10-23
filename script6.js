const codonToAmino = {
  "UCU":"Sérine","UCC":"Sérine","UCA":"Sérine","UCG":"Sérine","AGU":"Sérine","AGC":"Sérine",
  "CCU":"Proline","CCC":"Proline","CCA":"Proline","CCG":"Proline",
  "UUA":"Leucine","UUG":"Leucine",
  "UUU":"Phénylalanine","UUC":"Phénylalanine",
  "CGU":"Arginine","CGC":"Arginine","CGA":"Arginine","CGG":"Arginine","AGA":"Arginine","AGG":"Arginine",
  "UAU":"Tyrosine","UAC":"Tyrosine"
};

function arnToProtein(arn) {
  return arn.match(/.{1,3}/g)              // Cuts to 3
            .map(codon => codonToAmino[codon] || "Inconnu") // translate
            .join("-");                  
}

const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";

console.log("ARN1 → Protéine :", arnToProtein(arn1));
console.log("ARN2 → Protéine :", arnToProtein(arn2));