{
  let str1 = "aman pandia";

  let indexSpace = str1.indexOf(" ");
  console.log(str1.substring(0, indexSpace));
  console.log(str1.substring(indexSpace + 1));

  let arr1 = [1, 2, 3, 4, 5, 6, 7];
  console.log(arr1.splice(2, 1, "woman"));
  console.log(arr1); //splice directly affects the object
}

{
  //string to array using split
  let str = "a b c d e f g h";
  let arr = str.split(" ");
  console.log(arr);

  arr.push("i");
  arr.unshift("-");

  console.log(arr);
}

{
  //callback: when a function has another function as a parameter
  function add(a, b) {
    console.log(a + b);
  }

  function calculate(callback, val1, val2) {
    callback(val1, val2);
  }

  calculate(add, 2, 3);

  //setTimeout is an example of callback
  function getData(data) {
    return data;
  }

  setTimeout(() => {
    let data = getData(4);
    console.log(data);
  }, 3000);
}

{
  //foreach
  let arr = [1, 2, 3, 4, 5];
  arr.forEach((x) => console.log(x));

  //passing callbacks in forEach
  arr.forEach(double);

  function double(val) {
    console.log(val * 2);
  }

  //callbacks passed to the forEach methods have given set of parameters:
  // fucntion double(element, index, array)
  arr.forEach(triple);

  function triple(element, index, array) {
    array[index] = element * 3; //this will affect the arr directly
  }

  console.log(arr);
  //map
  let newArr = arr.map((x) => x * 2);
  console.log(newArr);

  let newArr2 = arr.map((x) => {
    return x * 2;
  });
  console.log(newArr2);

  //filter
  let filteredArr = arr.filter((x) => x % 2 === 0);
  console.log(filteredArr);

  //reduce
  let sumArr = arr.reduce((prev, curr) => {
    return prev + curr;
  });

  console.log(sumArr);

  let maxArr = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });

  console.log(maxArr);
}

{
  //functions, objects, classes and constructors

  //functions
  function square(x) {
    return Math.pow(x, 2);
  }
  //other way
  const cube = (x) => {
    return Math.pow(x, 3);
  };

  console.log(square(2));
  console.log(cube(3));

  //objects
  const studentAman = {
    name: "Aman pandia",
    age: 26,
    marks: 90,
    sayHello: function () {
      console.log("hello");
    },
    sayBye() {
      console.log("bye");
    },
  };

  studentAman.sayHello();
  studentAman.sayBye();

  //classes as funcitons
  //these are called constructor functions
  function Car(brand, year, make, price) {
    //see the capitalization of car
    (this.brand = brand),
      (this.year = year),
      (this.make = make),
      (this.price = price);
  }

  let car1 = Car("swift", "2018", "dzire", 1000000);
  console.log(car1);

  //above you can see it itself is telling us to convert it to class declaration
  //class
  class Bike {
    constructor(brand, year, make, price) {
      (this.brand = brand),
        (this.year = year),
        (this.make = make),
        (this.price = price);
    }

    run() {
      console.log(`running bike ${this.brand}'s ${this.make}`);
    }

    displayCost() {
      console.log(`cost is ${this.price.toFixed(2)}`); //toFixed method helps us to add zeros after decimals
    }
  }

  let bike1 = new Bike("Yamaha", "2015", "RTR", 2000000);
  bike1.run();
  bike1.displayCost();
}

{
  //static keyword
  //shows the properties and methods that are associated to the class directly (not the objects)
  //class owns the static stuff

  class School {
    // constructor(name, address){
    //   this.name =
    // }

    static name = "DAV public school";
    static address = "morak";
  }

  class Student {
    static studCount = 0;
    constructor(school, name, age) {
      Student.studCount++;
      (this.school = school), (this.name = name), (this.age = age);
    }

    displayStudent() {
      console.log(
        `student ${this.name} is ${this.age} years old and studies in ${School.name}`
      );
    }
  }

  let school = new School();
  let stud1 = new Student(school, "aman", 10);

  stud1.displayStudent();

  console.log(School.name);

  console.log(Student.studCount);
}

//inheritence and super keyword
{
  class Vehicle {
    static vehicleCount = 0;

    constructor(brand, year) {
      (this.brand = brand), (this.year = year);
    }

    start() {
      console.log("started...");
    }
    run() {
      console.log("running...");
    }
    stop() {
      console.log("stopped...");
    }

    static showVehicleCount() {
      console.log(`vehicles created : ${Vehicle.vehicleCount}`);
    }
  }

  class Car extends Vehicle {
    constructor(brand, year, window, roof) {
      //super will refer to the parent class
      super(brand, year), (this.window = window), (this.roof = roof);
    }

    runCar() {
      console.log("car is ");
      super.run();
    }

    displayCar() {
      console.log(
        `the car is of brand ${this.brand} and has ${this.window} windows`
      );
    }
  }

  let car1 = new Car("swift", "2018", 4, 1);
  console.log(car1.displayCar());
  car1.start();
  car1.runCar();
}

//getters and setters
{
  class Student {
    //IMPORTANT: there can only be 1 constructor in the class in JS
    // constructor(){
    //   console.log("student object created");
    // }

    constructor(name, age) {
      // this();
      (this.name = name), (this.age = age);
    }

    display() {
      console.log(`studnet ${this.name} is ${this.age} years old`);
    }

    set name(name) {
      if (name == "") {
        console.error("name cant be empty");
      } else {
        this._name = name;
      }
    }

    get name() {
      return this._name;
    }

    set age(age) {
      if (age < 0 || age > 50) {
        console.error("check age");
      } else {
        this._age = age;
      }
    }

    get age() {
      return this._age;
    }
  }

  let stud = new Student("aman", 6);

  stud.display();
}

//arrays of objects
{
  //the array of objects is a general output of APIs which then we need to work on
  let fruits = [
    { name: "banana", calories: 22, price: 20.0 },
    { name: "orange", calories: 22, price: 20.0 },
    { name: "watermelon", calories: 22, price: 20.0 },
    { name: "pineapple", calories: 22, price: 20.0 },
  ];

  let fruitNames = fruits.map((x) => x.name);
  console.log(fruitNames);
}

{
  //shuffle an array
  let array = [1, 2, 3, 4, 5, 6, 7, 8];
  //implementing fisher yates algorithm

  shuffle(array);
  console.log(array);

  function shuffle(array) {
    for (let i = array.lenth - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * array.lenth);

      [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; //destructuring: way to swap elements in JS
    }
  }
}
