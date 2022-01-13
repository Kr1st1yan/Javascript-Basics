function fillText(inputArr) {
    let text = inputArr[0];
    let words = inputArr[1];
    let regex = new RegExp("_+", "g");
    let emptyFields = [...text.matchAll(regex)];

    for (let index = 0; index < emptyFields.length; index++) {
        let field = emptyFields[index][0];

        for (let index1 = 0; index1 < words.length; index1++) {
            let word = words[index1];
            if (word.length === field.length) {
                text = text.replace(field, words[index1]);
                break;
            }
        }
    }

    console.log(text);
}

fillText([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
