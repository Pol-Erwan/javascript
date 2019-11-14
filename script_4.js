const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("********** Liste ceux qui sont nés dans les années 1970 :");
for(const item in entrepreneurs) {
if (entrepreneurs[item].year > 1970 && entrepreneurs[item].year < 1980) {
  console.log(entrepreneurs[item]);
}
}

console.log("********** Liste des noms et prénoms :");
for(const item in entrepreneurs) {
  console.log(entrepreneurs[item].first + " " + entrepreneurs[item].last);
}

console.log("********** Aujourd'hui chaque inventeur aurait :");
let année = 2019;
for(const item in entrepreneurs) {
  let age = année - entrepreneurs[item].year
  console.log(entrepreneurs[item].first + " " + entrepreneurs[item].last + " " + age + " ans");
}

function tri(a,b)
{
if (a.last < b.last) {
return -1; // si a<b il sera mis une position en dessous
}
else if (a.last == b.last) {
 return 0; // si a == b il sera laissé à la position
}
else {
 return 1; // si a>b il sera mis 1 position au dessus
}
}
  console.log(entrepreneurs.sort(tri));

