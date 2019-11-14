let word = "";
let letter;

while (true) {
    letter = prompt("Salut petit adolescent qu'est-ce que tu veux ?");

    if ( letter.indexOf("?") >= 0 ) {
      console.log("Ouais Ouais... ") ;
	} 
        if ( letter.toUpperCase() === letter && letter !== word && letter.indexOf("?") < 0 ) {
	  console.log("Pwa, calme-toi ...");
	}
	    if ( letter.indexOf("fortnite") >= 0 && letter.indexOf("?") < 0  ) {
	      console.log("on s' fait une partie soum-soum ,") ;
	      } 
                if ( letter === "" ) {
	          console.log("T'es en PLS ?");
		  //break;
		}
		    if (letter !== word && letter.toUpperCase() !== letter && letter.indexOf("fortnite") < 0 ) {
		      console.log("baleck.");
		    }
}

