class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`Driving a ${this.color} ${this.brand}`);
  }
}

const car1 = new Car('Toyota','Red');
car1.drive();

