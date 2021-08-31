let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {

    if (contador == 0) {
        console.log("O número atual é ZERO");
    } else if (contador % 2 == 0) {
        console.log("O número " + contador + " é PAR")
    } else {
        console.log(`O número ${contador} é ÍMPAR`)
    }
}

    // Vou deixar os outros métodos como comentário.

    // Usando While

// let numeroDeAlunos = 10;
// let contador = 0;
// 
// while (contador <= numeroDeAlunos) {
// 
//    if (contador == 0) {
//        console.log("O número atual é Zero")
//    } else if (contador % 2 == 1) {
//        console.log(`O número ${contador} é ímpar`)
//    } else {
//        console.log(`O número ${contador} é Par`)
//    }
//
//    contador++;
// }

    // Usando forof

// let numeroDeAlunos = 10;
// let contador = 0;
// let nomesAlunos = ["Maria", "João", "Ana", "José", "Raimundo", "Francisca"]

// for (let nome of nomesAlunos) {
//     console.log(`Esta pessoa se chama ${nome}`);
// }

    // Usando forEach

// nomesAlunos.forEach( nome => {
//     console.log(`O nome é ${nome}`);
// });