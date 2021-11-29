function calcularPrecioDesc(precio, desc) {
    const porcentajePrecioDesc = 100 - desc;
    const precioDesc = (precio * porcentajePrecioDesc) / 100;

    return precioDesc
}

function priceDiscount() {
    const price = document.getElementById('price');
    const priceValue = price.value;

    const discount = document.getElementById('discount');
    const discountValue = discount.value;

    const priceFinal = calcularPrecioDesc(priceValue, discountValue);

    const result = document.getElementById('valueFinal');
    result.innerText = `Se aplico un descuento de ${discountValue}% y el precio final es $${priceFinal}`;
}