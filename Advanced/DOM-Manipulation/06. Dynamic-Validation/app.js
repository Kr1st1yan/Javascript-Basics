function validate() {
    //dk
    let email = document.getElementById('email').value;
    let matcher = email.match(/^\w+@(\w+).\w+$/); 

    if (matcher === null) {
        console.log('aaaa');
    }
}