function printsCharactersInRange(firstChar, secondChar) {
    let code1 = firstChar.charCodeAt(0);
    let code2 = secondChar.charCodeAt(0);

    let finalChars = [];

    if (code2 > code1) {
        for (let index = code1 + 1; index < code2; index++) {
            finalChars.push(String.fromCharCode(index));
        }
    } else {
        for (let index = code2 + 1; index < code1; index++) {
            finalChars.push(String.fromCharCode(index));
        }
    }

    console.log(finalChars.join(' '));

}

printsCharactersInRange("C", "#");
