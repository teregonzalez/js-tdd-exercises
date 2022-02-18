const paintShop = (cars) => {
    console.log(typeof cars)
    const paintedFord = copyCars.filter(car => car.make !== "Ford" ? true : car.colour = "Pink");
    console.log(paintedFord)
    console.log(cars)
    return paintedFord

}

module.exports = {
    paintShop
}