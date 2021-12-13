function displayCatalogue(arr) {
    let catalogueList = [];

    class Catalogue {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    for (let index = 0; index < arr.length; index++) {
        let [name, price] = arr[index].split(" : ");
        catalogueList.push(new Catalogue(name, price));
    }

    catalogueList.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });

    let oldLetter = catalogueList[0].name[0];
    console.log(oldLetter);
    
    for (let index = 0; index < catalogueList.length; index++) {
        let currLetter = catalogueList[index].name[0];

        if (currLetter === oldLetter) {
            console.log(
                `${catalogueList[index].name}: ${catalogueList[index].price}`
            );
        } else {
            console.log(currLetter);
            console.log(
                `${catalogueList[index].name}: ${catalogueList[index].price}`
            );
            oldLetter = currLetter;
        }
    }
}

displayCatalogue([
    "Omlet : 5.4",
    "Oriz : 6.5",
    "Shirt : 15",
    "Cake : 59",
    "Oola : 32",
]);
