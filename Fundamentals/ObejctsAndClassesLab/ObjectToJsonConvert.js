function logJsonFromObject(name,lastName,hairColor){
    class Person {
        constructor(name,lastName,hairColor){
            this.name = name;
            this.lastName = lastName;
            this.hairColor = hairColor;
        }
    }

    let me = new Person(name,lastName,hairColor);
    console.log(JSON.stringify(me));
}

logJsonFromObject('George', 'Jones', 'Brown');