function arrrayRotation(arr, numberOfRotations) {
    for (let index = 0; index < numberOfRotations; index++) {
        let element = arr.shift();
        arr.push(element);
    }
    console.log(arr.join(' '));
}

arrrayRotation([51, 47, 32, 61, 21], 2);
