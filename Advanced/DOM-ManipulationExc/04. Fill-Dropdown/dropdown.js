function addItem() {
    let text = document.getElementById("newItemText").value;
    let value = document.getElementById("newItemValue").value;

    let item = document.createElement("option");
    item.text = `${text}:${value}`;
    item.value = `${text}:${value}`;

    document.getElementById("menu").appendChild(item);
    document.getElementById("newItemText").value = '';
    document.getElementById("newItemValue").value = '';
}
