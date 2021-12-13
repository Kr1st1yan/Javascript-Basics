function printPhoneBook(inputArr) {
    let outputArr = {};

    for (let index = 0; index < inputArr.length; index++) {
        let info = inputArr[index].split(" ");
        let name = info[0];
        let number = info[1];

        outputArr[name] = number;
    }

    for (let key in outputArr) {
        console.log(`${key} -> ${outputArr[key]}`);
    }
}

printPhoneBook([
    "Tim 0834212554",
    "Peter 0877547887",
    "Bill 0896543112",
    "Tim 0876566344",
]);
