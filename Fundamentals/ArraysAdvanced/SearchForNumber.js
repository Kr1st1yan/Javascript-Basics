function searchNumber(arr1, arr2) {
    let workArr = arr1.slice(0, arr2[0]);

    workArr = workArr.slice(arr2[1], workArr.length);

    let occurTimes = workArr.filter((x) => x === arr2[2]);

    console.log(`Number ${arr2[2]} occurs ${occurTimes.length} times.`);
}

searchNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
