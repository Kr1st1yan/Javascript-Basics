function printTowns(arr) {
    let towns = [];

    class Town {
        constructor(name, latitude, longtitude) {
            this.name = name;
            this.latitude = latitude;
            this.longtitude = longtitude;
        }
    }

    for (let index = 0; index < arr.length; index++) {
        let [name, latitude, longtitude] = arr[index].split(" | ");
        let town = new Town(
            name,
            Number(latitude).toFixed(2),
            Number(longtitude).toFixed(2)
        );
        towns.push(town);
    }

    towns.forEach((town) => {
        console.log(
            `{ town: '${town.name}', latitude: '${town.latitude}', longitude: '${town.longtitude}' }`
        );
    });
}

printTowns([
    "Sofia | 42.696552 | 23.32601",
    "Beijing | 39.913818 | 116.363625",
]);
