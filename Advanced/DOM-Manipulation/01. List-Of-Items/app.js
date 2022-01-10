function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let textToAdd = `<li>${inputText}</li>`;
    document.getElementById('items').innerHTML += textToAdd;
}