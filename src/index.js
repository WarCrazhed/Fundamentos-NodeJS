const args = process.argv.slice(2);

let min = 1;
let max = 100;

if (args.length >= 2) {
    parsedMin = parseInt(args[0], 10);
    parsedMax = parseInt(args[1], 10);

    if (!isNaN(parsedMin) && !isNaN(parsedMax) && min < max) {
        min = parsedMin;
        max = parsedMax;
    } else {
        console.log('Rango inválido. usando valores predeterminados 1 a 100.');
    }

}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`El Número aleatorio generado entre ${min} y ${max} es: ${randomNumber}`);
