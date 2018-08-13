alert("Bienvenue dans ce jeu de devinette !");
var solution, proposition;
 

//fonction aleatoire
function aleatoire() {
    // Cette ligne génère aléatoirement un nombre entre 1 et 100
    solution = Math.floor(Math.random() * 100) + 1;
}

//debut
function debut() {
    proposition = Number(prompt("Devinez un nombre entre 1 et 100 vous avez 6 essais :"));
}

debut();