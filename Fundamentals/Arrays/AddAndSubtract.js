function arrModifier(arr) {
    let newArr = [];
    let inputSum = 0;
    let outputSum = 0;


    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        inputSum += element;

        if (element % 2 === 0) {
            element += index;
        } else {
            element -= index;
        }
        outputSum += element;
        newArr.push(element);
    }
    console.log(JSON.stringify(newArr));
    console.log(inputSum);
    console.log(outputSum);
}

arrModifier([ 5, 14, 21, 59, 31 ]);
