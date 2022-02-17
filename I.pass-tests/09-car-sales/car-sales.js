const sales = (cars) => {

    const makeAndPrice = cars.map(car => {
        return car.make
    })
    const brands = [...new Set(makeAndPrice)].sort();
    const brandTotals = brands.map(brand => {
        return {
            brand: brand, 
            total: cars.filter(car => car.make === brand).reduce((acumulador, car) => acumulador +car.price, 0)
        }
    })
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