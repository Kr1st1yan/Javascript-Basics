function returnObjectFromJson(jsonStr) {
    let personData = JSON.parse(jsonStr);

    for (let key in personData) {
        console.log(`${key}: ${personData[key]}`);
    }
}

returnObjectFromJson('{"name": "George", "age": 40, "town": "Sofia"}');

// This is how to create class and object from Json

// class User {
//     firstName;
//     lastName;
//     sex;
  
//     constructor(data) {
//       Object.assign(this, data);
//   //  ^^^^^^^^^^^^^^^^^^^^^^^^^^
//     }
//   }
  
//   var data = JSON.parse(req.responseText);
//   new User(data);