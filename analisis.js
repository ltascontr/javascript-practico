//Validacion de si el numero de elementos de la lista es par o no
function esPar(numero) {
    return (numero % 2 === 0);
}

//Calculo del promedio de una lista
function calculoPromedio(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado, valorActual) {
            return valorAcumulado + valorActual;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}

//Calculo del promedio de salarios de la lista
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calculoPromedio([personaMitad1, personaMitad2]);
        return mediana
    } else {
        const personaMitad = lista[mitad];
        return personaMitad
    }
}


const salariosCol = colombia.map((persona)=>{return persona.salary})

const salariosOrdenados = salariosCol.sort((a, b)=>{return a - b});

const mediaGeneralCol = medianaSalarios(salariosOrdenados);

//Calculo del promedio del 10% de los sueldos mas altos de la lista
const spliceStart = (salariosOrdenados.length * 90) / 100;
const spliceCount = salariosOrdenados.length - spliceStart;

const salariosColTop = salariosOrdenados.splice(spliceStart, spliceCount)

const mediaTopCol = medianaSalarios(salariosColTop);


console.log({mediaGeneralCol, mediaTopCol});