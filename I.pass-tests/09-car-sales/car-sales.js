const sales = (cars) => {
    //se crea un array con los nombres de las marcas en cars
    const makeAndPrice = cars.map(car => {
        return car.make
    })
    //Se guardan valores únicos de las marcas de cars
    const brands = [...new Set(makeAndPrice)].sort();
    //Se filtra por nombre de la marca y se guardan los totales de los precios
    const brandTotals = brands.map(brand => {
        return {
            brand: brand, 
            total: cars.filter(car => car.make === brand).reduce((acumulador, car) => acumulador +car.price, 0)
        }
    })
    //Se crea la estructura de las marcas y el total de sus precios en un objeto
    const totals =  brandTotals.reduce((obj, brandTotal) => {
        obj[brandTotal.brand] = brandTotal.total;
        return obj;
    }, {});
    console.log(totals);

    return totals



}

module.exports = {
    sales
}