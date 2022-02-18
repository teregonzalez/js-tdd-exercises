const paintShop = (cars) => {
    /*console.log(typeof cars)
    const carsCopy = [...cars];
    console.log(carsCopy);
    const paintedFord = carsCopy.filter(car => car.make !== "Ford" ? true : car.colour = "Pink");
    console.log(paintedFord);
    console.log(cars);
    */




    return cars.map(car => {
        if(car.make === "Ford"){
            return {
                make: car.make,
                model: car.model,
                colour: "Pink"
            };
        }
        return {
            make: car.make,
            model: car.model,
            colour: car.colour
        };
    })
    //return paintedFord
}

module.exports = {
    paintShop
}