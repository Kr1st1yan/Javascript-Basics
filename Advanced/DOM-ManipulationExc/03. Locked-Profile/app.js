function lockedProfile() {
    addEventListeners();
}

function addEventListeners() {
    let a = document.getElementsByTagName("button");

    for (let index = 0; index < a.length; index++) {
        a[index].addEventListener("click", first);
    }
}

function first() {
    let button = event.target;
    let profile = button.parentNode;
    let moreInformation = profile.getElementsByTagName("div")[0];
    let lockStatus = profile.querySelector('input[type="radio"]:checked').value;

    if (lockStatus === "unlock") {
        
        if (button.textContent === "Show more") {
            moreInformation.style.display = "inline-block";
            button.textContent = "Hide it";
        } else if (button.textContent === "Hide it") {
            moreInformation.style.display = "none";
            button.textContent = "Show more";
        }
    }
}
