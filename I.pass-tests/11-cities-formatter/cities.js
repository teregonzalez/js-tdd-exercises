const formatCities = (someObject, someFunction) => {
    return someObject.map(element => {
        return someFunction(element);
    })
};

module.exports = {
    formatCities
}