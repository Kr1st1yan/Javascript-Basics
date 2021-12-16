function printEmployees(arr) {
    let employees = [];

    class Employee {
        constructor(name,number) {
            this.name = name;
            this.number = number;
        }
    }

    for (let index = 0; index < arr.length; index++) {
        let person = new Employee(arr[index],arr[index].length);
        employees.push(person);
    }

    employees.forEach((employee) => {
        console.log(
            `Name: ${employee.name} -- Personal Number: ${employee.number}`
        );
    });
}

printEmployees([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
