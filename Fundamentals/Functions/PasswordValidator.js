function validatePassword(password) {
    let errorCounter = 0;

    errorCounter += sizeCheck(password, errorCounter);
    errorCounter += numberInPassCheck(password, errorCounter);
    errorCounter += lettersAndDigitsCheck(password, errorCounter);

    if (errorCounter === 0) {
        console.log("Password is valid");
    }
}

function sizeCheck(password, errorCounter) {
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        errorCounter++;
    }

    return errorCounter;
}

function numberInPassCheck(password, errorCounter) {
    if (/\d/.test(password)) {
        let numberCounter = 0;
        for (let index = 0; index < password.length; index++) {
            let a = password.charAt(index);
            if (!isNaN(a)) {
                numberCounter++;
            }
        }

        if (numberCounter < 2) {
            console.log("Password must have at least 2 digits");
            errorCounter++;
        }
    } else {
        console.log("Password must have at least 2 digits");
        errorCounter++;
    }

    return errorCounter;
}

function lettersAndDigitsCheck(password, errorCounter) {
    if (!password.match("^[A-Za-z0-9]+$")) {
        console.log("Password must consist only of letters and digits");
        errorCounter++;
    }

    return errorCounter;
}

validatePassword("logIn");
