console.clear();
// 3. Parašyti funkciją, kuri skaičiuotų krepšinio taškus, pirmas perduodamas parametras baudų skaičius, 
// antras perduodamas parametras dvitaškių skaičius, trečias perduodamas tritaškių. 
// Apskaičiuoti ir gražinti bendrą surinkta komandos taškų skaičių ! ! ! ! !

// TEST:
// basketballPoints(5, 25, 10) ➞ 85
// basketballPoints(1, 1, 1) ➞ 6
// basketballPoints(10, 20, 5) ➞ 6

let baudos =0;
let dvitaskiai =0;
let tritaskiai =0;

function zalgiris(baudos, dvitaskiai, tritaskiai) {
    komanda = baudos * 1
            + dvitaskiai * 2
            + tritaskiai * 3;
    return komanda;
}
console.log(`Komanda is viso surinko tasku: ${zalgiris(9, 9, 9)}`);