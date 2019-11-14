var p;
var n = 0;
var e = "#";
var espace = " "
p = prompt(`Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?`);

while (p >= 0){
  
    console.log(espace.repeat(p)+e.repeat(n));
    p = p-1;
    n = n + 1;
}
