function printStorage(inputArr) {
    let mapWithData = new Map();

    for (let index = 0; index < inputArr.length; index++) {
        let data = inputArr[index].split(' ');
        let product = data[0];
        let quantity = Number(data[1]);

        if (!mapWithData.has(product)) {
            mapWithData.set(product, quantity);
        } else {
            let currQuantity = mapWithData.get(product);
            let newQuantity = currQuantity + quantity;
            mapWithData.set(product, newQuantity);
        }     
    }

    for (let kvp of mapWithData) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

printStorage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
