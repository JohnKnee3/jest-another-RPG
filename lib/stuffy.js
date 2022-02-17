class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  honk() {
    console.log("beep beep");
  }
}

// car objects are still created and used the same way
const car = new Car("Honda", "Civic");
console.log(car);
car.honk();
