function findTheMagicSum(arr, number) {
    for (let index = 0; index < arr.length; index++) {
        for (let index1 = index + 1; index1 < arr.length; index1++) {
            let first = arr[index];
            let second = arr[index1];
            let a = first + second;

            if (a === number) {
                console.log(`${arr[index]} ${arr[index + 1]}`);
            }
        }
    }
}

findTheMagicSum([1, 2, 3, 4, 5, 6], 6);
