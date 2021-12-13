function findSmallestNumber(num1, num2, num3) {
    let arr = [num1, num2, num3];
    let result = Math.min(...arr);
    console.log(result);
}

findSmallestNumber(25, 21, 4);
