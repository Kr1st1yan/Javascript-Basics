function printInfoAboutCity(city) {
    for(let key in city){
        console.log(`${key} -> ${city[key]}`);
      }
}

printInfoAboutCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
});
