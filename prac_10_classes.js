//classes and objects

console.log("classes and objects");

//javascript object is an entity having state and behaviour

const student = {
  name: "aman pandia",
  marks: 44.6,
  age: 26,
  adult: true,
  getName: function () {
    console.log("name " + this.name);
  },
  getMarks() {
    //another way of defining methods in an object
    console.log("marks " + this.marks);
  },
};

//every object created has an inbuild object coming in called PROTOTYPE with it
//the prototype object has many other methods and properties related to it in a way that it can be used with the object

//ffor eg, the methods like push, pop, shift, etc coming in for our array are all coming from prototype

{
  const vehicle = {
    isPetrol: true,
    tyres: 0,
    price: 5000,
  };

  const car = {
    tyres: 4,
  };

  car.__proto__ = vehicle; //car takes all properties and methods from vehicle
  //this is called protoypal inheritence

  console.log(car.isPetrol);
}

//classes provide us a template to create an object
//classes have some state(variables) and some behaviors(functions)

/*
  class MyClass{
    constructor()
    variables
    MyMethods()
  }

*/

{
  class Vehicle {
    constructor(type) {
      this.type = type;
      console.log("vehicle object created");
    }
    run() {
      console.log("vehicle is running");
    }
    start() {
      console.log("vehicle is starting");
    }
    stop() {
      console.log("vehicle is stopping");
    }
  }
  //inheritence
  class Car extends Vehicle {
    //super constructor

    //constructor
    constructor(type, brandName, metalType) {
      super(type); //to invoke parent class constructor
      console.log("creating a new object of class Car");
      this.tyres = 4;
      this.brandName = brandName;
      this.chassis = metalType;
    }
    //defining methods in the class
    start() {
      console.log("car start");
    }
    stop() {
      console.log("car stop");
    }
    //setting variables or states
    setBrandName(brandName) {
      this.brandName = brandName;
    }
    getBrandName() {
      return this.brandName;
    }
  }

  let toyotaCar = new Car("Car", "Toyotacar", "steel");
  toyotaCar.setBrandName("Toyota");
  toyotaCar.start();
  console.log(toyotaCar.getBrandName());
  console.log(toyotaCar.tyres);
  toyotaCar.run();
}

//error handling
//try catch in java script
