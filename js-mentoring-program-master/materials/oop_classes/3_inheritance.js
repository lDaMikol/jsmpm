/**
 * Create a class named "Model" which will inherit the methods from the "Car" class
 */
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  present() {
    return `I have a car with the brand ${this.brand} and ${this.year} year`;
  }
  /**
 * Getters / setters
 */
  get myBrand() {
    return this.brand;
  }

  set myBrand(brand) {
    this.brand = brand;
  }
}

class Model extends Car {
  constructor(brand, year, model) {
    super(brand, year);
    this.model = model;
  }

  present() {
    return super.present() + ` model ${this.model}`;
  }
}

const mycar = new Model('ford', 1932, 'Model T');