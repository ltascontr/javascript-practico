function calculoPromedio(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado, valorActual) {
            return valorAcumulado + valorActual;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}

// const lista1 = [
//     100, 200, 500, 700,
// ];

let mediana;

function calculoMedia(lista) {
    
    const listaOrdenada = lista.sort((a, b)=>{return a - b});
    console.log(listaOrdenada);
    const mitadLista = parseInt(listaOrdenada.length / 2);
    console.log(mitadLista);
    

    function esPar(lista) {
        if (lista % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    if (esPar(listaOrdenada.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElementos = calculoPromedio([elemento1, elemento2]);

        mediana = promedioElementos;
    } else {
        mediana = lista[mitadLista];
    }
    
}