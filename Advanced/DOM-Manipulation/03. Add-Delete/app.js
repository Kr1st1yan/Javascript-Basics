function addItem() {
    let inputText = document.getElementById('newItemText').value;
    let textToAdd = `<li>${inputText}<a id = "${inputText}" href="#" onClick = "function1(this.id);">[Delete]</a></li>`;
    document.getElementById('items').innerHTML += textToAdd;
}

function function1(id){
    let a = document.getElementsByTagName('li');
    let storage = document.getElementsByTagName('ul')[0];
    for (let index = 0; index < a.length; index++) {
        if (a[index].innerText.includes(id)) {
           storage.removeChild(a[index]);
        }   
    }
}