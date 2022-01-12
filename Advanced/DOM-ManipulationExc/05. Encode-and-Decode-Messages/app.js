function encodeAndDecodeMessages() {
    addEventListeners();
}

function encode() {
    let button = event.target;
    let transformedText = "";

    if (button.innerText === "Encode and send it") {
        let textToTransform =
            button.parentNode.getElementsByTagName("textarea")[0].value;

        for (let index = 0; index < textToTransform.length; index++) {
            let symbol = textToTransform.charCodeAt(index) + 1;
            transformedText += String.fromCharCode(symbol);
        }
        document
            .getElementById("main")
            .getElementsByTagName("div")[1]
            .getElementsByTagName("textarea")[0].value = transformedText;
    } else {
        let finalText = "";
        let textToTransform =
            button.parentNode.getElementsByTagName("textarea")[0].value;

        for (let index = 0; index < textToTransform.length; index++) {
            let symbol = textToTransform.charCodeAt(index) - 1;
            finalText += String.fromCharCode(symbol);
        }       
        button.parentNode.getElementsByTagName("textarea")[0].value = finalText;
    }
}

function addEventListeners() {
    let a = document.getElementsByTagName("button");

    for (let index = 0; index < a.length; index++) {
        a[index].addEventListener("click", encode);
    }
}
