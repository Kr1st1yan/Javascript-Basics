function printProducts(input) {
    let regEx = new RegExp(
        ">>(?<product>[A-Z][A-Za-z]+)<<(?<price>[0-9]+.*)!(?<quantity>[0-9]+)"
    );

    let moneySpent = 0;

    console.log("Bought furniture:");

    for (let index = 0; index < input.length; index++) {
        let productStr = input[index];

        if (productStr != "Purchase") {
            let match = regEx.exec(productStr);

            if (match != null) {
                let name = match[1];
                let price = match[2];
                let quantity = match[3];

                let finalPrice = Number(price) * Number(quantity);

                console.log(name);
                moneySpent += finalPrice;
            }
        }
    }
    
    console.log(`Total money spend: ${moneySpent.toFixed(2)}`);
}

printProducts([
    ">>Laptop<<312.2323!3",
    ">>TV<<300.21314!5",
    ">Invalid<<!5",
    ">>TV<<300.21314!20",
    ">>Invalid<!5",
    ">>TV<<30.21314!5",
    ">>Invalid<<!!5",
    "Purchase",
]);
