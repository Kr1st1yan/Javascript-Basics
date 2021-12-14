function repalceWords(input, input2) {
    let words = input.split(", ");
    let sentence = input2;

    let arrFromSentence = sentence.split(" ");

    while (words.length > 0) {
        let word = words[0];

        for (let index = 0; index < arrFromSentence.length; index++) {
            if (
                arrFromSentence[index].length === word.length &&
                arrFromSentence[index].includes("*")
            ) {
                sentence = sentence.replace(arrFromSentence[index], word);
            }
        }

        words.shift();
    }

    console.log(sentence);
}

repalceWords(
    "great, learning",
    "softuni is ***** place for ******** new programming languages"
);
