function printWinner(inputString) {
    let arrWithMaterials = inputString.split(" ");
    let finalMap = new Map();
    let keyFragmentsMap = new Map();
    keyFragmentsMap.set("fragments", 0);
    keyFragmentsMap.set("shards", 0);
    keyFragmentsMap.set("motes", 0);
    keyFragmentsMap.set("fragments", 0);

    for (let index = 0; index < arrWithMaterials.length; index += 2) {
        let name = arrWithMaterials[index + 1].toLowerCase();
        let value = Number(arrWithMaterials[index]);

        if (name === "motes" || name === "fragments" || name === "shards") {
            let times = keyFragmentsMap.get(name);
            times += Number(value);
            keyFragmentsMap.set(name, times);
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
    let times = keyFragmentsMap.get(name);
    times -= 250;
    keyFragmentsMap.set(name, times);
    keyFragmentsMap = [...keyFragmentsMap.entries()].sort((a, b) => {
        if (b[1] - a[1] === 0) {
            return b[0].length - a[0].length;
        } else {
            return b[1] - a[1];
        }
    });

    finalMap = [...finalMap.entries()].sort();

    for (let kvp of keyFragmentsMap) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }

    for (let kvp of finalMap) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }
}

printWinner(
    "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);

