function printWinner(inputString) {
    //fix the whole task
    let arrWithMaterials = inputString.split(" ");
    let finalMap = new Map();
    let keyFragmentsMap = new Map();

    for (let index = 0; index < arrWithMaterials.length; index += 2) {
        let name = arrWithMaterials[index + 1].toLowerCase();
        let value = Number(arrWithMaterials[index]);

        if (name === "motes" || name === "fragments" || name === "shards") {

            if (!keyFragmentsMap.has(name)) {
                keyFragmentsMap.set(name, value);
            } else {
                let times = keyFragmentsMap.get(name);
                times += Number(value);
                keyFragmentsMap.set(name, times);
            }
        } else {

            if (!finalMap.has(name)) {
                finalMap.set(name, value);
            } else {
                let times = finalMap.get(name);
                times += Number(value);
                finalMap.set(name, times);
            }
        }

        if (
            keyFragmentsMap.has("motes") &&
            Number(keyFragmentsMap.get("motes")) >= 250
        ) {
            console.log("Dragonwrath obtained!");
            orderAndPrint(name, finalMap, keyFragmentsMap);
            break;
        } else if (
            keyFragmentsMap.has("fragments") &&
            Number(keyFragmentsMap.get("fragments")) >= 250
        ) {
            console.log("Valanyr obtained!");
            orderAndPrint(name, finalMap, keyFragmentsMap);
            break;
        } else if (
            finalMap.has("shards") &&
            Number(finalMap.get("shards")) >= 250
        ) {
            console.log("Shadowmourne obtained!");
            orderAndPrint(name, finalMap, keyFragmentsMap);
            break;
        }
    }
}


function orderAndPrint(name, finalMap, keyFragmentsMap) {
    let times = finalMap.get(name);
    times -= 250;
    keyFragmentsMap.set(name, times);
    keyFragmentsMap = [...keyFragmentsMap.entries()].sort(
        (a, b) => b[1] - a[1]
    );

    finalMap = [...finalMap.entries()].sort();

    for (let kvp of keyFragmentsMap) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }

    for (let kvp of finalMap) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }
}

printWinner(
   '3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
);

console.log();
