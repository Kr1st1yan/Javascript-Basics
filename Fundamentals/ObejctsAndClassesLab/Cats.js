function printCats(inputArr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let index = 0; index < inputArr.length; index++) {
        let catData = inputArr[index].split(" ");
        let catName = catData[0];
        let catAge = catData[1];

        let cat = new Cat(catName, catAge);
        cat.meow();
    }
}

printCats(['Candy 1', 'Poppy 3', 'Nyx 2']);
