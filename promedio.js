// const lista1 = [
//     150, 210, 300, 440,
// ];

function calculoPromedio(lista) {

    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i]
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado, valorActual) {
            return valorAcumulado + valorActual;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}