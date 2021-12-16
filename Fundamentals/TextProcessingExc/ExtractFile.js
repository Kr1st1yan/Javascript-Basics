function findFileAndExtension(path) {
    let input = path.split("\\");

    let fileAndExtension = input[input.length - 1];
    let secondFileAndExtension = fileAndExtension.split(".");

    let extension = secondFileAndExtension[secondFileAndExtension.length - 1];
    let fileName = secondFileAndExtension[0];

    for (let index = 1; index < secondFileAndExtension.length - 1; index++) {
        let toAdd = "." + secondFileAndExtension[index];
        fileName += toAdd;
    }

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

findFileAndExtension("'C:\\Projects\\Data-Structures\\LinkedList.adsad.cs'");
