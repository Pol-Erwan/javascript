const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("********** Est-ce que tous les livres ont été au moins empruntés une fois ? ");
for(const item in books) {
  if (books[item].rented > 0) {
  console.log(books[item].title + " --> oui");
}
}

console.log("********** livre le plus emprunté :");
var most
rented = books[0].rented;
for(const item in books) {
  if (books[item].rented > rented) {
  //console.log(books[item].title + " --> le plus emprunté " + books[item].rented);
  rented = books[item].rented;
  most = books[item];
  }
  else {
  //console.log(books[item].title + " " + books[item].rented);
}
}
console.log(most.title + " --> le plus emprunté " + most.rented);

console.log("********** livre le moins emprunté :");
var less
rented = books[0].rented;
for(const item in books) {
  if (books[item].rented < rented) {
  //console.log(books[item].title + " --> le moins emprunté " + books[item].rented);
  rented = books[item].rented;
  less = books[item];
  }
  else {
  //console.log(books[item].title + " " + books[item].rented);
}
}
console.log(less.title + " --> le moins emprunté " + less.rented);

console.log("********** Trouve le livre avec l'ID: 873495");
for(const item in books) {
  if (books[item].id === 873495) {
  console.log(books[item].title + " --> ID 873495");
}
}

console.log("********** Supprime le livre avec l'ID: 133712");
for(const item in books) {
  if (books[item].id === 133712) {
  console.log(books[item].title + " --> ID 133712");
  books.splice(item,1);
  console.log(books);
}
}

console.log("********** Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");

function tri(a,b)
{
if (a.title < b.title) {
return -1; // si a<b il sera mis une position en dessous
}
else if (a.title == b.title) {
 return 0; // si a == b il sera laissé à la position
}
else {
 return 1; // si a>b il sera mis 1 position au dessus
}
}
console.log(books.sort(tri));


