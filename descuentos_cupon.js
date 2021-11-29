function calcularPrecioDesc(precio, desc) {
    const porcentajePrecioDesc = 100 - desc;
    const precioDesc = (precio * porcentajePrecioDesc) / 100;

    return precioDesc
}

// const coupons = [
//     "octubre",
//     "noviembre",
//     "diciembre",
// ];

const coupons = [
    {
        name: 'mayo',
        discountU: 15
    },
    {
        name: 'junio',
        discountU: 20
    },
    {
        name: 'julio',
        discountU: 30
    },
];

function priceDiscount() {
    const price = document.getElementById('price');
    const priceValue = price.value;

    const coupon = document.getElementById('coupon');
    const couponValue = coupon.value;

    // let discount

    // switch (couponValue) {
    //     case coupons[0]:
    //         discount = 15;
    //         break;
    //     case coupons[1]:
    //         discount = 20;
    //         break;
    //     case coupons[2]:
    //         discount = 30;
    //         break;
    // }

    // if (!coupons.includes(couponValue)) {
    //     alert(`El cupón ${couponValue} no es válido`);
    // } else if (couponValue === 'octubre') {
    //     discount = 15;
    // } else if (couponValue === 'noviembre') {
    //     discount = 20;
    // } else if (couponValue === 'diciembre') {
    //     discount = 30;
    // }

    const couponValid = function(coupon) {
        return coupon.name === couponValue;
    }

    const userCoupon = coupons.find(couponValid);

    if (!userCoupon) {
        alert(`El cupón ${couponValue} no es válido`);
    } else {
        const discount = userCoupon.discountU;
        const priceFinal = calcularPrecioDesc(priceValue, discount);

        const result = document.getElementById('valueFinal');
        result.innerText = `Se aplico un descuento de ${discount}% y el precio final es $${priceFinal}`;
    }
}