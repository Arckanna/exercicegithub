alert("Bienvenue dans ce jeu de devinette !");
var solution, proposition;
var essai=0;



// Cette ligne génère aléatoirement un nombre entre 1 et 100
solution = Math.floor(Math.random() * 100) + 1;



proposition = Number(prompt("Devinez un nombre entre 1 et 100 vous avez 6 essais :"));

// recherche de solution
while ((proposition !== solution) && (essai < 6)) {

    alert("essai :" + essai);
    essai++;
    if (proposition < solution) {
        alert("Plus grand");
    } else {
        alert("Plus petit");
    }
    proposition = Number(prompt("essayer encore :"));
}


// resultat
if (proposition == solution) {
    alert("Bravo vous avez trouver la solution !");
} else {
    alert("Raté la solution etait " + solution + " une prochaine fois peut-etre");
}
