let tableau = [19, 27, 53, 77, 99, 112, 153, 260, 1000];
let somme = 0;
let moyenne = 0;

if (tableau.length > 0) {
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    moyenne = somme / tableau.length;
    console.log("Moyenne :", moyenne);
} else {
    console.log("Le tableau est vide");
}