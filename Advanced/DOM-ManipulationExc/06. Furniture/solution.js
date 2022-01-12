function solve() {
    addEventListeners();
}

function addEventListeners() {
    let a = document.getElementsByTagName("button");

    for (let index = 0; index < a.length; index++) {
        if (a[index].innerText === "Generate") {
            a[index].addEventListener("click", generate);
        } else {
            a[index].addEventListener("click", buy);
        }
    }
    enableCheckboxes();
}

function enableCheckboxes() {
    let checkBoxes = document.getElementsByTagName("input");

    for (let index = 0; index < checkBoxes.length; index++) {
        checkBoxes[index].disabled = false;
    }
}

function generate() {
    let input = JSON.parse(document.getElementsByTagName("textarea")[0].value);

    for (let index = 0; index < input.length; index++) {
        let mainTr = document.createElement("tr");

        let name = input[index].name;
        let img = input[index].img;
        let price = input[index].price;
        let decFactor = input[index].decFactor;

        let imageTd = document.createElement("td");
        let image = document.createElement("img");
        image.src = img;
        imageTd.appendChild(image);

        let nameTd = document.createElement("td");
        let tdName = document.createElement("p");
        tdName.textContent = name;
        nameTd.appendChild(tdName);

        let priceTd = document.createElement("td");
        let tdPrice = document.createElement("p");
        tdPrice.textContent = price;
        priceTd.appendChild(tdPrice);

        let factorTd = document.createElement("td");
        let tdFactor = document.createElement("p");
        tdFactor.textContent = decFactor;
        factorTd.appendChild(tdFactor);

        let checkBoxTd = document.createElement("td");
        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.disabled = false;
        checkBoxTd.appendChild(checkBox);

        mainTr.appendChild(imageTd);
        mainTr.appendChild(nameTd);
        mainTr.appendChild(priceTd);
        mainTr.appendChild(factorTd);
        mainTr.appendChild(checkBoxTd);

        document.getElementsByTagName("tbody")[0].appendChild(mainTr);
    }
    enableCheckboxes();
}

function buy() {
    let checkBoxes = document.getElementsByTagName("input");
    let productNames = [];
    let finalPrice = 0;
    let finalDec = 0;

    for (let index = 0; index < checkBoxes.length; index++) {
        if (checkBoxes[index].checked) {
            let element = checkBoxes[index].parentElement.parentElement;
            let elements = element.getElementsByTagName("td");
            let name = elements[1].innerText;
            let price = elements[2].innerText;
            let dec = elements[3].innerText;

            productNames.push(name);
            finalPrice += Number(price);
            finalDec += Number(dec);
        }
    }

    let outputNames = "Bought furniture: ";

    for (let i = 0; i < productNames.length; i++) {
        outputNames += `${productNames[i]}; `;
    }

    let textArea = document.getElementsByTagName("textarea")[1];
    textArea.value += `${outputNames}\n`;
    textArea.value += `Total price: ${finalPrice.toFixed(2)}\n`;
    textArea.value += `Average decoration factor: ${(
        finalDec / productNames.length
    ).toFixed(1)}`;
}
