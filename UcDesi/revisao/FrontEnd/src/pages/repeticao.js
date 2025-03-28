
const notas = [0, 5, 8, 6, 9];

const resultado = notas.map(element => {
    let extenso;
    switch (element) {
        case 0:
            extenso = "Zero";

            break;
        case 5:
            extenso = "Cinco";

            break;
        case 8:
            extenso = "Oito";

            break;
        case 6:
            extenso = "Seis";

            break;
        case 9:
            extenso = "Nove";

            break;

        default:
            
            extenso = "Numero não encontrado";
            break;
    }

    return {
        numero: element,
        extenso: extenso
    }
});

console.log("Resultado : ", resultado);

// notas.map(element => {
//     ;
// });

// notas.reduce(element => {

// }, 0);