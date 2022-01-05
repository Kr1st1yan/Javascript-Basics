function solve() {
  let outputField = document.getElementById("output");
  let text = document.getElementById("input").value.split(".");
  let stringToAdd = "";
  let sentenceCounter = 1;

  for (let index = 0; index < text.length; index++) {
    
    if (sentenceCounter < 3 && index < text.length - 1) {
      stringToAdd += text[index];
      sentenceCounter++;
    } else {
      let finalString = `<p>${stringToAdd}</p>`;
      outputField.innerHTML += finalString;

      stringToAdd = "";
      sentenceCounter = 1;
    }
  }
}
