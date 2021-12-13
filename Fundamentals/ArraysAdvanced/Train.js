function addingPassengersToTrain(inputArr) {
    let train = inputArr[0].split(" ");
    let capacityOfWagons = parseInt(inputArr[1]);
    let commands = [];

    for (let index = 2; index < inputArr.length; index++) {
        commands.push(inputArr[index]);
    }

    commands.forEach((element) => {
        if (element.includes("Add")) {
            let arr = element.split(" ");
            train.push(arr[1]);
        } else {
            for (let index = 0; index < train.length; index++) {
                let wagon = parseInt(train[index]);

                if (wagon + parseInt(element) <= capacityOfWagons) {
                    wagon += parseInt(element);
                    train[index] = wagon;
                    break;
                }
            }
        }
    });

    console.log(train.join(" "));
}

addingPassengersToTrain([
    "0 0 0 10 2 4",
    "10",
    "Add 10",
    "10",
    "10",
    "10",
    "8",
    "6",
]);
