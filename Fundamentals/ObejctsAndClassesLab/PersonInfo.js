function addInfoToPerson(firstName, lastName, age) {
    class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }

    let me = new Person(firstName, lastName, age);

    return me;
}

let a = addInfoToPerson("Peter", "Pan", "20");
