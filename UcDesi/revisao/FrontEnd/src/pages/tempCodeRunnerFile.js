const medalhas = ["ouro", "prata", "bronze", "Sem Medalha"];
let resultado2 = [];
let i = 0;
nomeCorredores.map((corredores) => {

    if (i <= 2) {

        resultado2.push({ nome: corredores, medalha: medalhas[i], posição: i + 1 });
    } else {
        resultado2.push({ nome: corredores, medalha: medalhas[3], posição: i + 1});
    }
    i++;

});
console.log("Resultado 2) : ", resultado2);