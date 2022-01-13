function findCommonElement(firstArr, secondArr) {
    for (let index = 0; index < firstArr.length; index++) {
        for (let index1 = 0; index1 < secondArr.length; index1++) {
            if (firstArr[index] === secondArr[index1]) {
                console.log(firstArr[index]);
            }
        }
    }
}

findCommonElement(
    ["S", "o", "f", "t", "U", "n", "i", " "],
    ["s", "o", "c", "i", "a", "l"]
);
