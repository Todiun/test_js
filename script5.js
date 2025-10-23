const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps, perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?");
const allRented = books.every(book => book.rented > 0);
console.log(allRented ? "Oui, tous les livres ont été empruntés au moins une fois." : "Non, certains livres n'ont jamais été empruntés.");

console.log("Livre le plus emprunté :");
const mostRented = books.reduce((max, book) => (book.rented > max.rented ? book : max));
console.log(`${mostRented.title} avec ${mostRented.rented} emprunts.`);

console.log("Livre le moins emprunté :");
const leastRented = books.reduce((min, book) => (book.rented < min.rented ? book : min));
console.log(`${leastRented.title} avec seulement ${leastRented.rented} emprunts.`);

console.log("Livre avec l'ID 873495 :");
const foundBook = books.find(book => book.id === 873495);
console.log(foundBook);

console.log("Suppression du livre avec l'ID 133712 :");
const indexToRemove = books.findIndex(book => book.id === 133712);
if (indexToRemove !== -1) {
  books.splice(indexToRemove, 1);
  console.log("Livre supprimé !");
}

console.log(" Tri des livres par ordre alphabétique :");
const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
console.log(sortedBooks);
