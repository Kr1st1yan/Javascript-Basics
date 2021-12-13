function maxNumberPrint(arr) {
    let outputArr = [];

    for (let index = 0; index < arr.length; index++) {
        let number = arr[index];
        let biggerOrNot = 0;

        for (let index1 = index; index1 < arr.length; index1++) {
            if (number < arr[index1]) {
                biggerOrNot = 1;
            }
        }

        if (biggerOrNot === 0 && !outputArr.includes(number)) {
            outputArr.push(number);
        }
    }

    console.log(outputArr.join(" "));
}

maxNumberPrint([27, 19, 42, 2, 13, 45, 48]);
