// const lista1 = [1,2,3,1,2,3,1,2,3,4,2,2,1];

// const lista1Count = {};

// lista1.map(
//     function (elemento) {
//         if (lista1Count[elemento]) {
//             lista1Count[elemento] += 1;
//         } else {
//             lista1Count[elemento] = 1;
//         }
//     }
// );

// const listaArr = Object.entries(lista1Count).sort((a, b)=>{return a[1] - b[1]});

// const moda = listaArr[listaArr.length -1]

function calcularModa(arr) {

    const arrCount = {};

    arr.map(
        function (elem) {
            if (arrCount[elem]) {
                arrCount[elem] += 1;
            } else {
                arrCount[elem] = 1;
            }
        }
    );

    const newArr = Object.entries(arrCount).sort((a, b)=>{return a[1] - b[1]});

    const moda = newArr[newArr.length -1]

    return moda;
}