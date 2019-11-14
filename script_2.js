let n;
n = prompt('De quel nombre veux-tu calculer la factorielle ?');

  function factorielle(n) {
    if(n==0) return 1;
    else return n*factorielle(n-1);
  }

console.log(`Le résultat est :${factorielle(n)}`);

