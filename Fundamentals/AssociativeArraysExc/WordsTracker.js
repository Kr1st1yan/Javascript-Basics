function trackWords(arr) {
    let wordsToSearch = arr[0].split(" ");
    arr.shift();
    arr.sort((a, b) => {
        if (b.value > a.value) {
            return 1;
        }
        if (b.value < a.value) {
            return -1;
        }
        return 0;
    });

    let output = new Map();

    for (let index = 0; index < wordsToSearch.length; index++) {
        let word = wordsToSearch[index];
        let counter = 0;

        arr.forEach((element) => {
            if (element === word) {
                counter++;
            }
        });

        output.set(word, counter);
    }

    output = [...output.entries()].sort().reverse();

    for (let kvp of output) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}

trackWords([
    "is the",
    "first",
    "sentence",
    "Here",
    "is",
    "another",
    "the",
    "And",
    "finally",
    "the",
    "the",
    "sentence",
]);
