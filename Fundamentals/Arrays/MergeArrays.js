function concatArrays(firstArr, secondArr) {
    let outputArr = [];

    for (let index = 0; index < firstArr.length; index++) {
        if (index % 2 === 0) {
            outputArr.push(Number(firstArr[index]) + Number(secondArr[index]));
        } else {
            outputArr.push(`${firstArr[index]}${secondArr[index]}`);
        }
    }

    console.log(outputArr.join(" - "));
}

concatArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
