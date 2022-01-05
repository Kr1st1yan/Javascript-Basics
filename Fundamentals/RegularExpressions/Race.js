function printRaceResults(inputArr) {
    let racers = new Map();
    let names = inputArr[0].split(", ");
    let nameReg = new RegExp("(?<name>[A-Za-z])");
    let distanceReg = new RegExp("(?<distance>[0-9])");

    for (let index = 1; index < inputArr.length; index++) {
        let value = inputArr[index];
        let name = "";
        let distance = 0;

        if (value !== "end of race") {
            for (let index1 = 0; index1 < value.length; index1++) {
                let char = value[index1];
                if (nameReg.exec(char) !== null) {
                    name += char;
                } else if (distanceReg.exec(char) !== null) {
                    distance += Number(char);
                }
            }
            if (names.includes(name)) {
                if (!racers.has(name)) {
                    racers.set(name, distance);
                } else {
                    let dist = racers.get(name);
                    dist += distance;
                    racers.set(name, dist);
                }
            }
        }
    }

    racers = [...racers.entries()].sort(
        (a, b) => b[1] - a[1]
    );

    console.log(`1st place: ${racers[0][0]}`);
    console.log(`2nd place: ${racers[1][0]}`);
    console.log(`3rd place: ${racers[2][0]}`);
}

printRaceResults(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);
